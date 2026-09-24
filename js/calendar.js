const CALENDAR = {
  primavera: {
    label: 'Primavera',
    image: '../assets/images/calendar/Calendar_Spring_ES.png',
    alt: 'Calendario de Primavera de Stardew Valley, con 28 días y casillas marcadas para eventos y cumpleaños',
    description: 'El año empieza con cultivos, recolección y varios recursos que conviene guardar desde el primer día.',
    tips: [
      'Días 15–18: temporada de salmonberries. Recorrer Bosque Tizón y zonas cercanas puede darte una buena reserva de energía.',
      'Día 13: el Festival del Huevo es una oportunidad importante para comprar semillas de fresa. Plantarlas cuanto antes deja margen para cosechas adicionales antes de terminar la estación.',
      'Día 24: la Danza de las Flores requiere 4 corazones con la persona con la que quieras bailar; es una meta de amistad que conviene planificar con anticipación.',
      'Para el Centro Cívico, no vendas automáticamente chirivías, judías verdes, coliflores ni papas: son los cuatro cultivos de la Alacena de Primavera.'
    ],
    events: {
      4: [{ type: 'birthday', label: 'Cumpleaños', name: 'Kent' }],
      7: [{ type: 'birthday', label: 'Cumpleaños', name: 'Lewis' }],
      10: [{ type: 'birthday', label: 'Cumpleaños', name: 'Vincent' }],
      13: [{ type: 'festival', label: 'Festival', name: 'Festival del Huevo' }],
      14: [{ type: 'birthday', label: 'Cumpleaños', name: 'Haley' }],
      15: [{ type: 'festival', label: 'Festival', name: 'Festival del Desierto · día 1' }],
      16: [{ type: 'festival', label: 'Festival', name: 'Festival del Desierto · día 2' }],
      17: [{ type: 'festival', label: 'Festival', name: 'Festival del Desierto · día 3' }],
      18: [{ type: 'birthday', label: 'Cumpleaños', name: 'Pam' }],
      20: [{ type: 'birthday', label: 'Cumpleaños', name: 'Shane' }],
      24: [{ type: 'festival', label: 'Festival', name: 'Danza de las Flores' }],
      26: [{ type: 'birthday', label: 'Cumpleaños', name: 'Pierre' }],
      27: [{ type: 'birthday', label: 'Cumpleaños', name: 'Emily' }]
    }
  },
  verano: {
    label: 'Verano',
    image: '../assets/images/calendar/Calendar_Summer_ES.png',
    alt: 'Calendario de Verano de Stardew Valley, con 28 días y casillas marcadas para eventos y cumpleaños',
    description: 'La estación se llena de nuevas cosechas, actividad junto al mar y varias fechas que conviene reservar.',
    tips: [
      'Día 11: el Luau ocupa el centro de la estación; revisá con tiempo qué ingrediente querés aportar.',
      'Días 20–21: el Derby de la Trucha concentra actividades de pesca durante dos días seguidos.',
      'Día 28: la Danza de las Medusas Lunares cierra el verano y marca el paso al Otoño.'
    ],
    events: {
      4: [{ type: 'birthday', label: 'Cumpleaños', name: 'Jas' }],
      8: [{ type: 'birthday', label: 'Cumpleaños', name: 'Gus' }],
      10: [{ type: 'birthday', label: 'Cumpleaños', name: 'Maru' }],
      11: [{ type: 'festival', label: 'Festival', name: 'Luau' }],
      13: [{ type: 'birthday', label: 'Cumpleaños', name: 'Alex' }],
      17: [{ type: 'birthday', label: 'Cumpleaños', name: 'Sam' }],
      19: [{ type: 'birthday', label: 'Cumpleaños', name: 'Demetrius' }],
      20: [{ type: 'festival', label: 'Evento', name: 'Derby de la Trucha · día 1' }],
      21: [{ type: 'festival', label: 'Evento', name: 'Derby de la Trucha · día 2' }],
      22: [{ type: 'birthday', label: 'Cumpleaños', name: 'Enano' }],
      24: [{ type: 'birthday', label: 'Cumpleaños', name: 'Willy' }],
      26: [{ type: 'birthday', label: 'Cumpleaños', name: 'Leo' }],
      28: [{ type: 'festival', label: 'Festival', name: 'Danza de las medusas lunares' }]
    }
  },
  otono: {
    label: 'Otoño',
    image: '../assets/images/calendar/Calendar_Fall_ES.png',
    alt: 'Calendario de Otoño de Stardew Valley, con 28 días y casillas marcadas para eventos y cumpleaños',
    description: 'Una estación de cosecha, ferias y preparativos para aprovechar bien los últimos recursos del año.',
    tips: [
      'Día 16: la Feria de Stardew Valley es una buena fecha para tener preparados objetos y una exhibición.',
      'Días 18–24: varios cumpleaños aparecen seguidos, así que conviene revisar la agenda antes de salir.',
      'Día 27: la Víspera de los Espíritus cierra el mes con un festival nocturno en Pueblo Pelícano.'
    ],
    events: {
      2: [{ type: 'birthday', label: 'Cumpleaños', name: 'Penny' }],
      5: [{ type: 'birthday', label: 'Cumpleaños', name: 'Elliott' }],
      11: [{ type: 'birthday', label: 'Cumpleaños', name: 'Jodi' }],
      13: [{ type: 'birthday', label: 'Cumpleaños', name: 'Abigail' }],
      15: [{ type: 'birthday', label: 'Cumpleaños', name: 'Sandy' }],
      16: [{ type: 'festival', label: 'Festival', name: 'Feria de Stardew Valley' }],
      18: [{ type: 'birthday', label: 'Cumpleaños', name: 'Marnie' }],
      21: [{ type: 'birthday', label: 'Cumpleaños', name: 'Robin' }],
      24: [{ type: 'birthday', label: 'Cumpleaños', name: 'George' }],
      27: [{ type: 'festival', label: 'Festival', name: 'Víspera de los Espíritus' }]
    }
  },
  invierno: {
    label: 'Invierno',
    image: '../assets/images/calendar/Calendar_Winter_ES.png',
    alt: 'Calendario de Invierno de Stardew Valley, con 28 días y casillas marcadas para eventos y cumpleaños',
    description: 'La granja baja el ritmo y el calendario se convierte en una buena guía para pescar, minar y recorrer el pueblo.',
    tips: [
      'Día 8: el Festival del Hielo concentra actividades en Bosque Tizón.',
      'Días 15–17: el Mercado Nocturno aparece durante tres noches consecutivas.',
      'Día 25: la Fiesta de la Estrella de Invierno cierra las celebraciones del mes.'
    ],
    events: {
      1: [{ type: 'birthday', label: 'Cumpleaños', name: 'Krobus' }],
      3: [{ type: 'birthday', label: 'Cumpleaños', name: 'Linus' }],
      7: [{ type: 'birthday', label: 'Cumpleaños', name: 'Caroline' }],
      8: [{ type: 'festival', label: 'Festival', name: 'Festival del Hielo' }],
      10: [{ type: 'birthday', label: 'Cumpleaños', name: 'Sebastian' }],
      12: [{ type: 'festival', label: 'Evento', name: 'Fiesta del Calamar · día 1' }],
      13: [{ type: 'festival', label: 'Evento', name: 'Fiesta del Calamar · día 2' }],
      14: [{ type: 'birthday', label: 'Cumpleaños', name: 'Harvey' }],
      15: [{ type: 'festival', label: 'Evento', name: 'Mercado Nocturno · día 1' }],
      16: [{ type: 'festival', label: 'Evento', name: 'Mercado Nocturno · día 2' }],
      17: [
        { type: 'festival', label: 'Evento', name: 'Mercado Nocturno · día 3' },
        { type: 'birthday', label: 'Cumpleaños', name: 'Rasmodius' }
      ],
      20: [{ type: 'birthday', label: 'Cumpleaños', name: 'Evelyn' }],
      23: [{ type: 'birthday', label: 'Cumpleaños', name: 'Leah' }],
      25: [{ type: 'festival', label: 'Festival', name: 'Fiesta de la Estrella de Invierno' }],
      26: [{ type: 'birthday', label: 'Cumpleaños', name: 'Clint' }]
    }
  }
};

const calendarIcon = (event) => {
  const icon = document.createElement('span');
  icon.className = `calendar-event__type calendar-event__type--${event.type}`;
  icon.textContent = event.type === 'birthday' ? '✿' : '✦';
  icon.setAttribute('aria-hidden', 'true');
  return icon;
};

const setupCalendar = () => {
  const root = document.querySelector('.page-calendar');
  if (!root) return;

  const image = root.querySelector('[data-calendar-image]');
  const title = root.querySelector('[data-calendar-title]');
  const detailTitle = root.querySelector('[data-calendar-detail-title]');
  const description = root.querySelector('[data-calendar-description]');
  const hotspots = root.querySelector('[data-calendar-hotspots]');
  const events = root.querySelector('[data-calendar-events]');
  const tips = root.querySelector('[data-calendar-tips]');
  const seasonButtons = [...root.querySelectorAll('[data-calendar-season]')];
  if (!image || !title || !detailTitle || !description || !hotspots || !events || !tips || !seasonButtons.length) return;

  let currentSeason = 'primavera';
  let currentDay = null;

  const showDay = (day) => {
    const data = CALENDAR[currentSeason];
    const dayEvents = data.events[day] ?? [];
    currentDay = day;

    root.querySelectorAll('.calendar-hotspot.is-selected').forEach((el) => el.classList.remove('is-selected'));
    const selected = root.querySelector(`[data-calendar-day="${day}"]`);
    if (selected) selected.classList.add('is-selected');

    events.replaceChildren();
    const heading = document.createElement('div');
    heading.className = 'calendar-events__heading';
    heading.innerHTML = `<span>Día ${day}</span><strong>${dayEvents.length ? 'Fechas a recordar' : 'Sin evento destacado'}</strong>`;
    events.append(heading);

    if (!dayEvents.length) {
      const note = document.createElement('p');
      note.className = 'calendar-events__empty';
      note.textContent = 'Un día libre para repartir entre la granja, la exploración y lo que te apetezca hacer.';
      events.append(note);
      return;
    }

    dayEvents.forEach((event) => {
      const item = document.createElement('article');
      item.className = 'calendar-event';
      const titleRow = document.createElement('div');
      titleRow.className = 'calendar-event__title-row';
      titleRow.append(calendarIcon(event));
      const eventTitle = document.createElement('h4');
      eventTitle.textContent = event.name;
      titleRow.append(eventTitle);
      item.append(titleRow);
      const detail = document.createElement('p');
      detail.textContent = event.type === 'birthday'
        ? `Cumpleaños de ${event.name}. Una fecha útil para acordarte de visitar a este habitante y preparar un regalo.`
        : `${event.name}. Una fecha marcada en el calendario para tener presente al planificar la estación.`;
      item.append(detail);
      events.append(item);
    });
  };

  const renderSeason = (season) => {
    const data = CALENDAR[season];
    if (!data) return;
    currentSeason = season;
    currentDay = null;
    title.textContent = data.label;
    detailTitle.textContent = data.label;
    description.textContent = data.description;
    image.src = data.image;
    image.alt = data.alt;
    image.width = 480;
    image.height = 336;

    seasonButtons.forEach((button) => {
      const active = button.dataset.calendarSeason === season;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    hotspots.replaceChildren();
    for (let day = 1; day <= 28; day += 1) {
      const eventsForDay = data.events[day] ?? [];
      if (!eventsForDay.length) {
        const empty = document.createElement('span');
        empty.className = 'calendar-hotspot calendar-hotspot--empty';
        empty.setAttribute('aria-hidden', 'true');
        hotspots.append(empty);
        continue;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'calendar-hotspot has-event';
      button.dataset.calendarDay = String(day);
      button.setAttribute('aria-label', `Día ${day}: ${eventsForDay.map((event) => event.name).join(' / ')}`);
      button.title = eventsForDay.map((event) => event.name).join(' · ');
      button.addEventListener('click', () => showDay(day));
      hotspots.append(button);
    }

    tips.replaceChildren();
    data.tips.forEach((tip) => {
      const li = document.createElement('li');
      li.textContent = tip;
      tips.append(li);
    });

    const firstEventDay = Object.keys(data.events).map(Number)[0] ?? 1;
    showDay(firstEventDay);
  };

  seasonButtons.forEach((button) => {
    button.addEventListener('click', () => renderSeason(button.dataset.calendarSeason));
  });

  renderSeason(currentSeason);
};

setupCalendar();
