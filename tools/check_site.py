#!/usr/bin/env python3
"""Auditoría estática mínima para Stardew Journal.

No requiere dependencias externas. Comprueba:
- index.html y .nojekyll en la raíz.
- title, meta description, canonical y un único H1 por página.
- alt en todas las imágenes.
- rutas locales de imágenes, scripts, hojas de estilo y enlaces.
- sitemap.xml y robots.txt con su referencia.
- balance básico de llaves en CSS y sintaxis de JS con Node cuando está disponible.

Uso: python tools/check_site.py
"""
from __future__ import annotations

import re
import subprocess
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / "index.html", *sorted((ROOT / "pages").glob("*.html"))]

errors: list[str] = []
warnings: list[str] = []


def check_file(path: Path) -> None:
    if not path.exists():
        errors.append(f"Falta archivo requerido: {path.relative_to(ROOT)}")


def is_external(url: str) -> bool:
    parsed = urlparse(url)
    return bool(parsed.scheme) or url.startswith("//")


def check_local_target(page: Path, url: str, kind: str) -> None:
    clean = url.split("#", 1)[0].split("?", 1)[0]
    if not clean or clean.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
        return
    if is_external(clean):
        return
    target = (page.parent / clean).resolve()
    if not target.exists():
        errors.append(
            f"{page.relative_to(ROOT)}: {kind} local inexistente -> {url}"
        )


def main() -> int:
    check_file(ROOT / "index.html")
    check_file(ROOT / ".nojekyll")
    check_file(ROOT / "sitemap.xml")
    check_file(ROOT / "robots.txt")

    if not PAGES:
        errors.append("No se encontraron páginas HTML.")

    for page in PAGES:
        soup = BeautifulSoup(page.read_text(encoding="utf-8"), "html.parser")
        rel = page.relative_to(ROOT)

        if not soup.title or not soup.title.get_text(" ", strip=True):
            errors.append(f"{rel}: falta <title>")
        description = soup.find("meta", attrs={"name": "description"})
        if not description or not description.get("content", "").strip():
            errors.append(f"{rel}: falta meta description")
        if page.name != "404.html":
            canonical = soup.find("link", attrs={"rel": "canonical"})
            if not canonical or not canonical.get("href", "").strip():
                errors.append(f"{rel}: falta canonical")
        h1_count = len(soup.find_all("h1"))
        if h1_count != 1:
            errors.append(f"{rel}: se esperaba exactamente un H1 y hay {h1_count}")

        for image in soup.find_all("img"):
            if "alt" not in image.attrs:
                errors.append(f"{rel}: imagen sin atributo alt -> {image.get('src', '')}")

        for control in soup.find_all(["input", "textarea", "select"]):
            if control.get("type") == "hidden":
                continue
            named = bool(control.get("aria-label") or control.get("aria-labelledby"))
            if control.get("id") and soup.find("label", attrs={"for": control["id"]}):
                named = True
            if control.find_parent("label"):
                named = True
            if not named:
                warnings.append(f"{rel}: control de formulario sin label/ARIA -> {control.name}#{control.get('id', '')}")

        for tag, attr in (("a", "href"), ("img", "src"), ("script", "src"), ("link", "href")):
            for element in soup.find_all(tag):
                value = element.get(attr)
                if value:
                    check_local_target(page, value, f"{tag}[{attr}]")

        if soup.find("meta", attrs={"name": "description"}):
            desc = soup.find("meta", attrs={"name": "description"})["content"]
            if len(desc) < 50:
                warnings.append(f"{rel}: description bastante corta ({len(desc)} caracteres)")

        for image in soup.find_all("img", src=True):
            if is_external(image["src"]):
                warnings.append(f"{rel}: imagen externa -> {image['src']}")

    sitemap = ROOT / "sitemap.xml"
    if sitemap.exists():
        sitemap_text = sitemap.read_text(encoding="utf-8")
        if "https://manuelbernardez.github.io/stardew-valley-journal/" not in sitemap_text:
            errors.append("sitemap.xml: falta la URL base definitiva")
        if sitemap_text.count("<loc>") != 13:
            errors.append(f"sitemap.xml: se esperaban 13 URLs y hay {sitemap_text.count('<loc>')}")
    robots = ROOT / "robots.txt"
    if robots.exists() and "Sitemap: https://manuelbernardez.github.io/stardew-valley-journal/sitemap.xml" not in robots.read_text(encoding="utf-8"):
        errors.append("robots.txt: falta referencia al sitemap definitivo")

    # CSS: detectar llaves desbalanceadas y reglas extremadamente anómalas.
    for css in sorted((ROOT / "css").rglob("*.css")):
        text = css.read_text(encoding="utf-8")
        if text.count("{") != text.count("}"):
            errors.append(f"{css.relative_to(ROOT)}: llaves CSS desbalanceadas")

    # JS: usar Node cuando está disponible para comprobar sintaxis.
    if subprocess.call(["bash", "-lc", "command -v node >/dev/null 2>&1"], stdout=subprocess.DEVNULL) == 0:
        for js in sorted((ROOT / "js").rglob("*.js")):
            result = subprocess.run(["node", "--check", str(js)], capture_output=True, text=True)
            if result.returncode != 0:
                errors.append(f"{js.relative_to(ROOT)}: error de sintaxis JS: {result.stderr.strip()}")
    else:
        warnings.append("Node no está disponible: no se pudo validar la sintaxis JavaScript automáticamente.")

    print("Stardew Journal · auditoría estática")
    print(f"Páginas revisadas: {len(PAGES)}")
    print(f"Errores: {len(errors)}")
    print(f"Advertencias: {len(warnings)}")
    for error in errors:
        print(f"  ERROR: {error}")
    for warning in warnings:
        print(f"  WARN:  {warning}")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
