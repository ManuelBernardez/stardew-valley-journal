/**
 * Interactividad del Centro Cívico.
 * Persistencia local, búsqueda, filtro y progreso por lote/sala.
 */
(function () {
  const STORAGE_KEY = 'stardew-journal-community-center';
  const items = [...document.querySelectorAll('[data-bundle-item]')];
  const bundles = [...document.querySelectorAll('.bundle-card[data-bundle-name]')];
  const rooms = [...document.querySelectorAll('.bundle-room[data-room]')];
  const totalLabel = document.querySelector('[data-total-progress]');
  const totalBar = document.querySelector('[data-total-progress-bar]');
  const resetButton = document.querySelector('[data-reset-bundles]');
  const searchInput = document.querySelector('[data-bundle-search]');
  const roomFilter = document.querySelector('[data-bundle-room-filter]');

  if (!items.length) return;

  const readState = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  };

  const state = readState();

  const keyFor = (input) =>
    `${input.dataset.bundleRoom}::${input.dataset.bundleName}::${input.dataset.bundleItem}`;

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // El sitio sigue funcionando aunque el almacenamiento no esté disponible.
    }
  };

  const refresh = () => {
    items.forEach((input) => {
      input.checked = Boolean(state[keyFor(input)]);
      const card = input.closest('.bundle-card');
      input.closest('label')?.classList.toggle('is-checked', input.checked);
      if (card) {
        const cardItems = [...card.querySelectorAll('[data-bundle-item]')];
        const checkedItems = cardItems.filter((el) => el.checked).length;
        card.classList.toggle('is-complete', cardItems.length > 0 && checkedItems === cardItems.length);
        const status = card.querySelector('[data-bundle-status]');
        if (status) status.textContent = `${checkedItems}/${cardItems.length}`;
      }
    });

    const totalChecked = items.filter((input) => input.checked).length;
    const totalPct = items.length ? Math.round((totalChecked / items.length) * 100) : 0;
    if (totalLabel) totalLabel.textContent = `${totalPct}%`;
    if (totalBar) totalBar.style.width = `${totalPct}%`;

    rooms.forEach((room) => {
      const roomItems = [...room.querySelectorAll('[data-bundle-item]')];
      const roomBundles = [...room.querySelectorAll('.bundle-card[data-bundle-name]')];
      const completeBundles = roomBundles.filter((bundle) => {
        const cardItems = [...bundle.querySelectorAll('[data-bundle-item]')];
        return cardItems.length > 0 && cardItems.every((el) => el.checked);
      }).length;
      const counter = room.querySelector('[data-room-progress]');
      if (counter) counter.textContent = `${completeBundles}/${roomBundles.length}`;
      room.classList.toggle('is-complete', roomItems.length > 0 && roomItems.every((el) => el.checked));
    });
  };

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const applyFilter = () => {
    const query = normalize((searchInput?.value || '').trim());
    const selectedRoom = roomFilter?.value || 'all';

    bundles.forEach((bundle) => {
      const bundleText = normalize(bundle.textContent);
      const room = bundle.dataset.bundleRoom || '';
      const matchesSearch = !query || bundleText.includes(query);
      const matchesRoom = selectedRoom === 'all' || room === selectedRoom;
      bundle.hidden = !(matchesSearch && matchesRoom);
    });

    rooms.forEach((room) => {
      const visibleBundles = [...room.querySelectorAll('.bundle-card[data-bundle-name]')]
        .some((bundle) => !bundle.hidden);
      const roomMatches = selectedRoom === 'all' || room.dataset.room === selectedRoom;
      room.hidden = !(visibleBundles && roomMatches);
    });
  };

  items.forEach((input) => {
    input.addEventListener('change', () => {
      const key = keyFor(input);
      if (input.checked) state[key] = true;
      else delete state[key];
      save();
      refresh();
    });
  });

  resetButton?.addEventListener('click', () => {
    Object.keys(state).forEach((key) => delete state[key]);
    save();
    refresh();
  });

  searchInput?.addEventListener('input', applyFilter);
  roomFilter?.addEventListener('change', applyFilter);

  refresh();
  applyFilter();
})();
