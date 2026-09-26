const characters = {
  abigail: {
    name: 'Abigail',
    meta: 'Aventurera · Pueblo Pelícano',
    link: 'Candidata',
    home: "Pierre's",
    image: '../assets/images/characters/abigail.png',
    description:
      'Vive con Pierre y Caroline y mantiene una amistad cercana con Sam y Sebastian.',
    likes:
      'Le encantan la amatista, la anguila picante y la calabaza.',
    wiki: 'https://es.stardewvalleywiki.com/Abigail'
  },

  leah: {
    name: 'Leah',
    meta: 'Artista · Bosque Tizón',
    link: 'Candidata',
    home: 'Cabaña de Leah',
    image: '../assets/images/characters/leah.png',
    description:
      'Se mudó al Valle para perseguir su sueño artístico y vive sola en una pequeña cabaña.',
    likes:
      'Le gustan especialmente la ensalada, el queso de cabra y la trufa.',
    wiki: 'https://es.stardewvalleywiki.com/Leah'
  },

  sebastian: {
    name: 'Sebastian',
    meta: 'Programador · La montaña',
    link: 'Candidato',
    home: 'Casa de Robin',
    image: '../assets/images/characters/sebastian.png',
    description:
      'Vive en el sótano de Robin y está muy vinculado a los ordenadores, los cómics y la ciencia ficción.',
    likes:
      'Le encantan la obsidiana, la lágrima helada y el sashimi.',
    wiki: 'https://es.stardewvalleywiki.com/Sebastian'
  },

  robin: {
    name: 'Robin',
    meta: 'Carpintera · La montaña',
    link: 'Aldeana',
    home: 'Carpintería',
    image: '../assets/images/characters/robin.png',
    description:
      'La carpintera del pueblo. Su trabajo conecta directamente con las mejoras y construcciones de la granja.',
    likes:
      'Entre sus regalos favoritos están el espagueti y el melocotón.',
    wiki: 'https://es.stardewvalleywiki.com/Robin'
  },

  lewis: {
    name: 'Lewis',
    meta: 'Alcalde · Pueblo Pelícano',
    link: 'Aldeano',
    home: 'Mansión del alcalde',
    image: '../assets/images/characters/lewis.png',
    description:
      'Una figura central en la organización del pueblo y en varios de sus acontecimientos.',
    likes:
      'Cumpleaños: Primavera 7. Le encantan el chile y el estofado vegetal.',
    wiki: 'https://es.stardewvalleywiki.com/Lewis'
  },

  willy: {
    name: 'Willy',
    meta: 'Pescador · La playa',
    link: 'Aldeano',
    home: 'Tienda de pesca',
    image: '../assets/images/characters/willy.png',
    description:
      'Vive y trabaja frente al mar; es una de las primeras puertas de entrada a la pesca.',
    likes:
      'Cumpleaños: Verano 24. Le encantan la calabaza, el diamante y el esturión.',
    wiki: 'https://es.stardewvalleywiki.com/Willy'
  },

  sam: {
    name: 'Sam',
    meta: 'Músico · Pueblo Pelícano',
    link: 'Candidato',
    home: 'Camino del Sauce, 1',
    image: '../assets/images/characters/sam.png',
    description:
      'Es un joven enérgico al que le apasiona la música y pasa buena parte de su tiempo tocando la guitarra, practicando con su banda y reuniéndose con sus amigos.',
    likes:
      'Le encantan la pizza, el bollito de arce, el higo chumbo y el ojo de tigre.',
    wiki: 'https://es.stardewvalleywiki.com/Sam'
  },

  penny: {
    name: 'Penny',
    meta: 'Maestra · Pueblo Pelícano',
    link: 'Candidata',
    home: 'Caravana',
    image: '../assets/images/characters/penny.png',
    description:
      'Vive con Pam y suele pasar sus días leyendo, ayudando a los niños del pueblo y recorriendo distintos rincones de Pelícano.',
    likes:
      'Le encantan la amapola, el diamante, la esmeralda y el melón.',
    wiki: 'https://es.stardewvalleywiki.com/Penny'
  },

  marnie: {
    name: 'Marnie',
    meta: 'Ganadera · Bosque Tizón',
    link: 'Aldeana',
    home: 'Rancho de Marnie',
    image: '../assets/images/characters/Marnie.png',
    description:
      'Su tienda es fundamental para entrar en la crianza de animales y conseguir alimento y suministros del rancho.',
    likes:
      'Le encantan el diamante, el pastel de calabaza y el almuerzo del granjero.',
    wiki: 'https://es.stardewvalleywiki.com/Marnie'
  },

  linus: {
    name: 'Linus',
    meta: 'Habitante de la montaña · La montaña',
    link: 'Aldeano',
    home: 'Tienda de campaña',
    image: '../assets/images/characters/Linus.png',
    description:
      'Vive cerca de las minas y ayuda a mostrar una forma de vivir el Valle fuera de las estructuras del pueblo.',
    likes:
      'Le encantan el ñame, el coco, el arándano y el plato del mar.',
    wiki: 'https://es.stardewvalleywiki.com/Linus'
  },

  clint: {
    name: 'Clint',
    meta: 'Herrero · Pueblo Pelícano',
    link: 'Aldeano',
    home: 'Herrería',
    image: '../assets/images/characters/Clint.png',
    description:
      'Mejora herramientas y procesa geodas; planificar una visita a su herrería puede ahorrar días perdidos en la granja.',
    likes:
      'Le encantan la amatista, la aguamarina, la esmeralda, el jade y el topacio.',
    wiki: 'https://es.stardewvalleywiki.com/Clint'
  },

  rasmodius: {
    name: 'Rasmodius',
    meta: 'Mago · Bosque Tizón',
    link: 'Aldeano',
    home: 'Torre del Mago',
    image: '../assets/images/characters/Wizard.png',
    description:
      'Es una puerta de entrada a la parte más extraña y fantástica del Valle, y su historia se relaciona con los secretos del mundo.',
    likes:
      'Le encantan el champiñón morado, la esencia solar y la esencia del vacío.',
    wiki: 'https://es.stardewvalleywiki.com/Rasmodius'
  }
};

const characterOrder = Object.keys(characters);

const modal = document.querySelector('#character-modal');
const cards = [...document.querySelectorAll('.character-card[data-character]')];

if (modal && cards.length) {
  const image = document.querySelector('#modal-image');
  const name = document.querySelector('#character-modal-name');
  const meta = document.querySelector('#modal-meta');
  const link = document.querySelector('#modal-link');
  const home = document.querySelector('#modal-home');
  const description = document.querySelector('#modal-description');
  const likes = document.querySelector('#modal-likes');
  const wiki = document.querySelector('#modal-wiki');

  const closeButton = modal.querySelector('.character-modal__close');
  const previousButton = modal.querySelector('.character-modal__prev');
  const nextButton = modal.querySelector('.character-modal__next');

  let currentIndex = 0;

  const renderCharacter = (characterId) => {
    const character = characters[characterId];
    if (!character) return;

    currentIndex = characterOrder.indexOf(characterId);

    image.src = character.image;
    image.alt = `Retrato de ${character.name}`;
    name.textContent = character.name;
    meta.textContent = character.meta;
    link.textContent = character.link;
    home.textContent = character.home;
    description.textContent = character.description;
    likes.textContent = character.likes;
    wiki.href = character.wiki;
  };

  const openCharacter = (characterId) => {
    renderCharacter(characterId);

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    document.body.classList.add('character-modal-open');
    closeButton.focus({ preventScroll: true });
  };

  const closeCharacter = () => {
    modal.close();
    document.body.classList.remove('character-modal-open');
  };

  const changeCharacter = (direction) => {
    currentIndex =
      (currentIndex + direction + characterOrder.length) %
      characterOrder.length;

    renderCharacter(characterOrder[currentIndex]);
  };

  cards.forEach((card) => {
    const characterId = card.dataset.character;
    const button = card.querySelector('.character-card__open');

    button?.addEventListener('click', (event) => {
      event.stopPropagation();
      openCharacter(characterId);
    });

    card.addEventListener('click', () => {
      openCharacter(characterId);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCharacter(characterId);
      }
    });
  });

  closeButton.addEventListener('click', closeCharacter);
  previousButton.addEventListener('click', () => changeCharacter(-1));
  nextButton.addEventListener('click', () => changeCharacter(1));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeCharacter();
    }
  });

  modal.addEventListener('cancel', () => {
    document.body.classList.remove('character-modal-open');
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('character-modal-open');
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.open) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      changeCharacter(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      changeCharacter(1);
    }
  });
}