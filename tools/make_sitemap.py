#!/usr/bin/env python3
"""Genera sitemap.xml para la publicación final en GitHub Pages.

Uso:
    python tools/make_sitemap.py https://USUARIO.github.io/REPOSITORIO/
"""
from __future__ import annotations

import sys
from pathlib import Path
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / "index.html", *sorted((ROOT / "pages").glob("*.html"))]


def page_url(base: str, page: Path) -> str:
    rel = page.relative_to(ROOT).as_posix()
    return urljoin(base if base.endswith("/") else base + "/", rel)


def main() -> int:
    if len(sys.argv) != 2:
        print("Uso: python tools/make_sitemap.py https://USUARIO.github.io/REPOSITORIO/")
        return 2

    base = sys.argv[1].strip()
    if not base.startswith(("https://", "http://")):
        print("La URL base debe comenzar con http:// o https://")
        return 2

    urls = [page_url(base, page) for page in PAGES if page.name != "404.html"]
    today = __import__("datetime").date.today().isoformat()
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url in urls:
        lines.extend(["  <url>", f"    <loc>{url}</loc>", f"    <lastmod>{today}</lastmod>", "  </url>"])
    lines.append("</urlset>")

    output = ROOT / "sitemap.xml"
    output.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Generado: {output.relative_to(ROOT)} ({len(urls)} URLs)")
    print("Actualizá robots.txt si querés declarar el sitemap públicamente.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
