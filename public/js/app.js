// Rotat — Tarot Card of the Day
(function () {
  'use strict';

  // --- Card Data ---
  const CARDS = [
    {
      id: 'fool', name: 'The Fool', number: '0', arcana: 'Major', symbol: '☽',
      keywords: ['beginnings', 'innocence', 'spontaneity', 'free spirit'],
      upright: 'New beginnings, optimism, trust in life. You stand at the edge of a great adventure. The universe invites you to leap with open arms — embrace the unknown with courage and wonder.',
      theme: 'Today is a day for fresh starts. Let go of what you think you know and approach the world with beginner\'s eyes.'
    },
    {
      id: 'magician', name: 'The Magician', number: 'I', arcana: 'Major', symbol: '☿',
      keywords: ['willpower', 'skill', 'manifestation', 'resourcefulness'],
      upright: 'You have all the tools you need. The Magician channels will into action — what you focus on, you create. Today your words carry power.',
      theme: 'Today, take intentional action. Your skills and resources are more than enough to manifest your goals.'
    },
    {
      id: 'high-priestess', name: 'The High Priestess', number: 'II', arcana: 'Major', symbol: '☾',
      keywords: ['intuition', 'mystery', 'subconscious', 'inner wisdom'],
      upright: 'Secrets and silence. The High Priestess guards the threshold between worlds. She urges you to listen not to the noise outside, but to the quiet voice within.',
      theme: 'Trust your intuition today. Not everything needs to be spoken — some answers come only in stillness.'
    },
    {
      id: 'empress', name: 'The Empress', number: 'III', arcana: 'Major', symbol: '♀',
      keywords: ['fertility', 'nature', 'abundance', 'nurturing'],
      upright: 'Abundance blooms around you. The Empress is the great nurturer — of creativity, relationships, and the body. Today, tend to what you love and watch it flourish.',
      theme: 'Nourish yourself and others. Beauty and growth are available to you in full measure today.'
    },
    {
      id: 'emperor', name: 'The Emperor', number: 'IV', arcana: 'Major', symbol: '♂',
      keywords: ['authority', 'structure', 'control', 'fatherhood'],
      upright: 'Order and discipline build the throne you sit on. The Emperor reminds you that real power comes from consistency, not impulse. Establish your domain with clarity.',
      theme: 'Today calls for structure and leadership. Set clear boundaries and take responsibility for your domain.'
    },
    {
      id: 'hierophant', name: 'The Hierophant', number: 'V', arcana: 'Major', symbol: '☩',
      keywords: ['tradition', 'conformity', 'wisdom', 'institutions'],
      upright: 'The bridge between the earthly and divine. The Hierophant speaks of wisdom passed through generations — seek counsel today, or offer it to others who need guidance.',
      theme: 'Look to tradition or a trusted mentor. Shared knowledge and community are your allies today.'
    },
    {
      id: 'lovers', name: 'The Lovers', number: 'VI', arcana: 'Major', symbol: '♋',
      keywords: ['love', 'union', 'choices', 'alignment'],
      upright: 'A crossroads of the heart. The Lovers is not only about romance — it speaks of alignment between your values and your choices. Act with love as your compass.',
      theme: 'Today, choose what truly resonates with who you are. Decisions made from love lead to wholeness.'
    },
    {
      id: 'chariot', name: 'The Chariot', number: 'VII', arcana: 'Major', symbol: '♋',
      keywords: ['control', 'willpower', 'victory', 'assertion'],
      upright: 'Victory through discipline. Two opposing forces pull the chariot — only sheer will keeps them aligned. Today, harness your contradictions and drive forward.',
      theme: 'You have the strength to overcome obstacles today. Stay focused and don\'t let distractions steer you off course.'
    },
    {
      id: 'strength', name: 'Strength', number: 'VIII', arcana: 'Major', symbol: '♌',
      keywords: ['courage', 'patience', 'compassion', 'inner strength'],
      upright: 'The lion tamed by a gentle hand. True strength is not force — it is the quiet courage to face your fears with grace. You are more powerful than you know.',
      theme: 'Lead with compassion and patience today. Your greatest power lies in gentleness, not dominance.'
    },
    {
      id: 'hermit', name: 'The Hermit', number: 'IX', arcana: 'Major', symbol: '♍',
      keywords: ['solitude', 'introspection', 'guidance', 'inner knowing'],
      upright: 'The lantern lit in darkness guides one soul at a time. The Hermit retreats not from life, but toward truth. Today, solitude is not loneliness — it is sanctuary.',
      theme: 'Spend time alone with your thoughts today. Answers you seek are already within you.'
    },
    {
      id: 'wheel', name: 'Wheel of Fortune', number: 'X', arcana: 'Major', symbol: '⊕',
      keywords: ['change', 'cycles', 'fate', 'turning point'],
      upright: 'The wheel spins and destiny shifts. What goes down must come back up. The Wheel of Fortune signals a turning point — embrace the change that is already in motion.',
      theme: 'Expect a shift today. Cycles are completing and new ones are beginning. Trust the turning.'
    },
    {
      id: 'justice', name: 'Justice', number: 'XI', arcana: 'Major', symbol: '⚖',
      keywords: ['fairness', 'truth', 'cause and effect', 'law'],
      upright: 'Every action carries its weight. Justice holds the scales impartially — today, act with integrity. What you put out into the world will return to you in kind.',
      theme: 'Truth and fairness are your guides today. Own your choices and their consequences with honesty.'
    },
    {
      id: 'hanged-man', name: 'The Hanged Man', number: 'XII', arcana: 'Major', symbol: '♆',
      keywords: ['pause', 'surrender', 'letting go', 'new perspective'],
      upright: 'Suspended between worlds, a new view emerges. The Hanged Man teaches that surrender is not defeat — sometimes releasing control reveals the path forward.',
      theme: 'Pause before acting today. A shift in perspective will reveal what force cannot. Let go and see.'
    },
    {
      id: 'death', name: 'Death', number: 'XIII', arcana: 'Major', symbol: '♏',
      keywords: ['endings', 'transformation', 'transition', 'letting go'],
      upright: 'Not death, but metamorphosis. The skeleton rides in to clear away what is finished — making space for what must be born. Embrace the ending; it is also a beginning.',
      theme: 'Something is ending today, and it\'s meant to. Release it with grace and step into your next chapter.'
    },
    {
      id: 'temperance', name: 'Temperance', number: 'XIV', arcana: 'Major', symbol: '♐',
      keywords: ['balance', 'moderation', 'patience', 'purpose'],
      upright: 'Water flows between two cups in perfect rhythm. Temperance is the art of blending opposites into harmony. Today, find the middle path — patience is your greatest ally.',
      theme: 'Balance and moderation will serve you well today. Blend your energies with care and avoid extremes.'
    },
    {
      id: 'devil', name: 'The Devil', number: 'XV', arcana: 'Major', symbol: '♑',
      keywords: ['bondage', 'materialism', 'shadow self', 'restriction'],
      upright: 'The chains you see are the ones you\'ve chosen. The Devil reveals where you feel trapped — by habit, desire, or fear. The good news: the key has always been in your hand.',
      theme: 'Notice what holds you back today. Awareness is the first step to freedom from the patterns that bind you.'
    },
    {
      id: 'tower', name: 'The Tower', number: 'XVI', arcana: 'Major', symbol: '⚡',
      keywords: ['upheaval', 'chaos', 'revelation', 'awakening'],
      upright: 'Lightning strikes the tower built on false foundations. The Tower is disruption — sudden, powerful, and necessary. What falls today was never meant to stand forever.',
      theme: 'Expect the unexpected today. A sudden revelation or disruption clears the way for something more true.'
    },
    {
      id: 'star', name: 'The Star', number: 'XVII', arcana: 'Major', symbol: '✦',
      keywords: ['hope', 'renewal', 'inspiration', 'serenity'],
      upright: 'After the storm, the star shines undimmed. The Star pours healing waters freely — renewing faith, restoring hope. Today, let yourself believe again.',
      theme: 'Hope is not naive — it is necessary. Let yourself feel renewed today. The universe is on your side.'
    },
    {
      id: 'moon', name: 'The Moon', number: 'XVIII', arcana: 'Major', symbol: '🌒',
      keywords: ['illusion', 'fear', 'subconscious', 'confusion'],
      upright: 'Things are not what they seem beneath the moonlight. The Moon illuminates your subconscious — fears, dreams, and instincts surface. Do not let illusion rule you today.',
      theme: 'Pay attention to dreams and gut feelings today. Not everything is clear, but your intuition knows the way.'
    },
    {
      id: 'sun', name: 'The Sun', number: 'XIX', arcana: 'Major', symbol: '☀',
      keywords: ['joy', 'success', 'vitality', 'clarity'],
      upright: 'Radiant, warm, unstoppable. The Sun floods everything with light — clarity, confidence, and pure joy. Today is a day to be fully alive, fully present, fully you.',
      theme: 'Allow yourself to shine today. Joy is not a luxury — it is your birthright. Celebrate what is good.'
    },
    {
      id: 'judgement', name: 'Judgement', number: 'XX', arcana: 'Major', symbol: '♒',
      keywords: ['reflection', 'reckoning', 'awakening', 'absolution'],
      upright: 'The call rings out and the sleeping rise. Judgement is the moment of reckoning — not punishment, but the invitation to rise into your higher self and answer your true calling.',
      theme: 'You are being called to something greater today. Reflect honestly, forgive fully, and step up.'
    },
    {
      id: 'world', name: 'The World', number: 'XXI', arcana: 'Major', symbol: '♄',
      keywords: ['completion', 'integration', 'accomplishment', 'wholeness'],
      upright: 'The dance at the center of all things. The World marks the end of a great journey — and the beginning of another. Today, celebrate how far you have come. You are whole.',
      theme: 'A cycle completes today. Acknowledge your growth, honor your journey, and prepare to begin again.'
    }
  ];

  // --- State ---
  let shuffledCards = [];

  // --- DOM refs ---
  const deckScreen    = document.getElementById('deck-screen');
  const readingScreen = document.getElementById('reading-screen');
  const deckContainer = document.getElementById('deck-container');
  const loadingOverlay= document.getElementById('loading');
  const flipCard      = document.querySelector('.flip-card');
  const cardFaceImg   = document.getElementById('card-face-img');
  const cardReading   = document.getElementById('card-reading');
  const cardNumber    = document.getElementById('card-number');
  const cardName      = document.getElementById('card-name');
  const cardKeywords  = document.getElementById('card-keywords');
  const cardMeaning   = document.getElementById('card-meaning');
  const cardTheme     = document.getElementById('card-theme');
  const btnNew        = document.getElementById('btn-new');

  // --- Init ---
  function init() {
    shuffledCards = shuffle([...CARDS]);
    renderDeck();
    loadingOverlay.classList.add('hidden');
  }

  // --- Fisher-Yates shuffle ---
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- Render the deck of face-down cards ---
  function renderDeck() {
    deckContainer.innerHTML = '';

    shuffledCards.forEach((card) => {
      const el = document.createElement('div');
      el.className = 'deck-card';

      const tilt = (Math.random() - 0.5) * 6;
      const lift = Math.random() * 4;
      el.style.transform = `rotate(${tilt}deg) translateY(${lift}px)`;

      const img = document.createElement('img');
      img.src = 'images/cards/back.svg';
      img.alt = 'Tarot card';
      img.loading = 'lazy';
      el.appendChild(img);

      el.addEventListener('mouseenter', () => {
        el.style.transform = `rotate(${tilt * 0.3}deg) translateY(-18px) scale(1.06)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = `rotate(${tilt}deg) translateY(${lift}px)`;
      });

      el.addEventListener('click', () => onCardPicked(el, card));

      deckContainer.appendChild(el);
    });
  }

  // --- Handle card selection ---
  async function onCardPicked(el, card) {
    document.querySelectorAll('.deck-card').forEach(c => {
      c.style.pointerEvents = 'none';
    });

    el.classList.add('selected');
    await delay(600);

    populateReading(card);
    showReadingScreen();
    await delay(300);
    triggerFlip();
  }

  // --- Populate reading content ---
  function populateReading(card) {
    cardFaceImg.src = `images/cards/${card.id}.svg`;
    cardFaceImg.alt = card.name;
    cardNumber.textContent = `Major Arcana · ${card.number}`;
    cardName.textContent = card.name;
    cardKeywords.textContent = card.keywords.join('  ·  ');
    cardMeaning.textContent = card.upright;
    cardTheme.textContent = card.theme;
  }

  // --- Flip the card to reveal ---
  function triggerFlip() {
    flipCard.classList.remove('flipped');
    setTimeout(() => {
      flipCard.classList.add('flipped');
      setTimeout(() => {
        cardReading.classList.remove('hidden');
        cardReading.classList.add('visible');
      }, 550);
    }, 150);
  }

  // --- Screen transitions ---
  function showReadingScreen() {
    deckScreen.classList.remove('active');
    readingScreen.classList.add('active');
    flipCard.classList.remove('flipped');
    cardReading.classList.add('hidden');
    cardReading.classList.remove('visible');
  }

  function showDeckScreen() {
    readingScreen.classList.remove('active');
    deckScreen.classList.add('active');
    shuffledCards = shuffle([...CARDS]);
    renderDeck();
  }

  // --- New reading ---
  btnNew.addEventListener('click', showDeckScreen);

  // --- Utility ---
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // --- Start ---
  init();
})();
