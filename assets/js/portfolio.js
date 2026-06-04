(() => {
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const grid = document.getElementById('projectsGrid');
  const modal = document.getElementById('projectModal');
  if (!cards.length) return;

  const data = {
    bara: {
      title: 'Bara Swahili Dishes',
      client: 'Category: Residential / hospitality interior',
      location: 'Location: Runda Mall, Nairobi',
      scope: 'Scope: Restaurant interior finishes, seating and decor detailing',
      images: ['assets/images/projects/residences/IMG-20260602-WA0103.jpg','assets/images/projects/residences/IMG-20260602-WA0104.jpg','assets/images/projects/residences/IMG-20260602-WA0105.jpg','assets/images/projects/residences/IMG-20260602-WA0107.jpg','assets/images/projects/residences/IMG-20260602-WA0109.jpg','assets/images/projects/residences/IMG-20260602-WA0110.jpg','assets/images/projects/residences/IMG-20260602-WA0112.jpg','assets/images/projects/residences/IMG-20260602-WA0113.jpg','assets/images/projects/residences/IMG-20260602-WA0114.jpg','assets/images/projects/residences/IMG-20260602-WA0115.jpg','assets/images/projects/residences/IMG-20260602-WA0116.jpg','assets/images/projects/residences/IMG-20260602-WA0118.jpg','assets/images/projects/residences/IMG-20260602-WA0119.jpg','assets/images/projects/residences/IMG-20260602-WA0120.jpg','assets/images/projects/residences/IMG-20260602-WA0121.jpg','assets/images/projects/residences/IMG-20260602-WA0122.jpg','assets/images/projects/residences/IMG-20260602-WA0123.jpg','assets/images/projects/residences/IMG-20260602-WA0124.jpg','assets/images/projects/residences/IMG-20260602-WA0125.jpg','assets/images/projects/residences/IMG-20260602-WA0126.jpg'],
      alt: 'Bara Swahili Dishes interior showcase',
      highlights: ['Warm dining ambience','Custom booth seating','Decorative rope partitioning','Feature lighting and wall finishes','Coordinated table and service details']
    },
    runda: {
      title: 'Runda Residence',
      client: 'Category: Residential project',
      location: 'Location: Runda, Nairobi',
      scope: 'Scope: Residential exterior and interior works',
      images: ['assets/images/projects/residences/IMG-20260602-WA0106.jpg','assets/images/projects/residences/IMG-20260602-WA0108.jpg','assets/images/projects/residences/IMG-20260602-WA0111.jpg','assets/images/projects/residences/IMG-20260602-WA0127.jpg','assets/images/projects/residences/IMG-20260602-WA0128.jpg','assets/images/projects/exterior/IMG-20260602-WA0084.jpg'],
      alt: 'Runda Residence project showcase',
      highlights: ['Contemporary residence exterior','Landscaped garden approach','Stone and timber accent finishes','Balcony and pergola detailing','Polished residential presentation']
    },
    'interior-showcase': {
      title: 'Interior Fitting Showcase',
      client: 'Category: Interior design, finishes and wardrobe fittings',
      location: 'Location: Nairobi',
      scope: 'Scope: Interior designs, floor and wall finishes, wardrobes and fitted features',
      images: ['assets/images/projects/interior/IMG-20260602-WA0015.jpg','assets/images/projects/interior/IMG-20260602-WA0016.jpg','assets/images/projects/interior/IMG-20260602-WA0017.jpg','assets/images/projects/interior/IMG-20260602-WA0018.jpg','assets/images/projects/interior/IMG-20260602-WA0019.jpg','assets/images/projects/interior/IMG-20260602-WA0020.jpg','assets/images/projects/interior/IMG-20260602-WA0021.jpg','assets/images/projects/interior/IMG-20260602-WA0022.jpg','assets/images/projects/interior/IMG-20260602-WA0023.jpg','assets/images/projects/interior/IMG-20260602-WA0026.jpg','assets/images/projects/interior/IMG-20260602-WA0030.jpg','assets/images/projects/interior/IMG-20260602-WA0034.jpg','assets/images/projects/interior/IMG-20260602-WA0039.jpg','assets/images/projects/interior/IMG-20260602-WA0043.jpg','assets/images/projects/interior/IMG-20260602-WA0044.jpg','assets/images/projects/interior/IMG-20260602-WA0046.jpg','assets/images/projects/interior/IMG-20260602-WA0047.jpg','assets/images/projects/interior/IMG-20260602-WA0048.jpg','assets/images/projects/interior/IMG-20260602-WA0050.jpg','assets/images/projects/interior/IMG-20260602-WA0051.jpg','assets/images/projects/interior/IMG-20260602-WA0052.jpg','assets/images/projects/interior/IMG-20260602-WA0055.jpg','assets/images/projects/interior/IMG-20260602-WA0056.jpg','assets/images/projects/interior/IMG-20260602-WA0062.jpg','assets/images/projects/interior/IMG-20260602-WA0065.jpg','assets/images/projects/interior/IMG-20260602-WA0066.jpg','assets/images/projects/interior/IMG-20260602-WA0069.jpg','assets/images/projects/interior/IMG-20260602-WA0072.jpg','assets/images/projects/interior/IMG-20260602-WA0082.jpg','assets/images/projects/furniture/IMG-20260602-WA0042.jpg','assets/images/projects/furniture/IMG-20260602-WA0049.jpg','assets/images/projects/furniture/IMG-20260602-WA0076.jpg','assets/images/projects/furniture/IMG-20260602-WA0079.jpg'],
      alt: 'Interior design and fitting showcase',
      highlights: ['Interior design layouts','Floor and wall finish details','Wardrobe and storage fittings','Feature wall treatments','Coordinated room finishes']
    },
    'exterior-showcase': {
      title: 'Exterior Showcase',
      client: 'Category: Exterior works',
      location: 'Location: Nairobi',
      scope: 'Scope: Exterior facades, landscaping, pergolas and outdoor finishes',
      images: ['assets/images/projects/exterior/IMG-20260602-WA0053.jpg','assets/images/projects/exterior/IMG-20260602-WA0073.jpg','assets/images/projects/exterior/IMG-20260602-WA0074.jpg','assets/images/projects/exterior/IMG-20260602-WA0075.jpg','assets/images/projects/exterior/IMG-20260602-WA0080.jpg','assets/images/projects/exterior/IMG-20260602-WA0081.jpg','assets/images/projects/exterior/IMG-20260602-WA0084.jpg','assets/images/projects/exterior/IMG-20260602-WA0085.jpg','assets/images/projects/exterior/IMG-20260602-WA0086.jpg','assets/images/projects/exterior/IMG-20260602-WA0087.jpg','assets/images/projects/exterior/IMG-20260602-WA0088.jpg','assets/images/projects/exterior/IMG-20260602-WA0089.jpg','assets/images/projects/exterior/IMG-20260602-WA0090.jpg','assets/images/projects/exterior/IMG-20260602-WA0091.jpg','assets/images/projects/exterior/IMG-20260602-WA0092.jpg','assets/images/projects/exterior/IMG-20260602-WA0093.jpg','assets/images/projects/exterior/IMG-20260602-WA0094.jpg','assets/images/projects/exterior/IMG-20260602-WA0095.jpg','assets/images/projects/exterior/IMG-20260602-WA0096.jpg','assets/images/projects/exterior/IMG-20260602-WA0097.jpg','assets/images/projects/exterior/IMG-20260602-WA0098.jpg','assets/images/projects/exterior/IMG-20260602-WA0099.jpg','assets/images/projects/exterior/IMG-20260602-WA0100.jpg','assets/images/projects/exterior/IMG-20260602-WA0101.jpg','assets/images/projects/exterior/IMG-20260602-WA0102.jpg'],
      alt: 'Exterior project showcase',
      highlights: ['Modern residence facades','Landscaped outdoor areas','Pergola and balcony details','Stone and timber exterior finishes','Clean exterior presentation']
    },
    'kitchen-showcase': {
      title: 'Kitchen Showcase',
      client: 'Category: Kitchen design',
      location: 'Location: Nairobi',
      scope: 'Scope: Kitchen cabinetry, islands, counters and appliance-ready fittings',
      images: ['assets/images/projects/kitchen/IMG-20260602-WA0024.jpg','assets/images/projects/kitchen/IMG-20260602-WA0025.jpg','assets/images/projects/kitchen/IMG-20260602-WA0027.jpg','assets/images/projects/kitchen/IMG-20260602-WA0033.jpg','assets/images/projects/kitchen/IMG-20260602-WA0035.jpg','assets/images/projects/kitchen/IMG-20260602-WA0040.jpg','assets/images/projects/kitchen/IMG-20260602-WA0041.jpg','assets/images/projects/kitchen/IMG-20260602-WA0057.jpg','assets/images/projects/kitchen/IMG-20260602-WA0058.jpg','assets/images/projects/kitchen/IMG-20260602-WA0059.jpg','assets/images/projects/kitchen/IMG-20260602-WA0060.jpg','assets/images/projects/kitchen/IMG-20260602-WA0061.jpg','assets/images/projects/kitchen/IMG-20260602-WA0063.jpg','assets/images/projects/kitchen/IMG-20260602-WA0064.jpg','assets/images/projects/kitchen/IMG-20260602-WA0067.jpg'],
      alt: 'Kitchen design and fitting showcase',
      highlights: ['Fitted kitchen cabinetry','Kitchen island installation','Integrated counter workspace','Coordinated flooring and finishes','Clean modern kitchen detailing']
    },
    'bathroom-showcase': {
      title: 'Bathroom & Fixtures Showcase',
      client: 'Category: Bathroom and fixtures',
      location: 'Location: Nairobi',
      scope: 'Scope: Premium bathroom fixtures and fitout',
      images: ['assets/images/projects/bathroom&fixtures/IMG-20260602-WA0028.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0029.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0031.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0032.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0036.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0037.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0038.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0077.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0078.jpg','assets/images/projects/bathroom&fixtures/IMG-20260602-WA0083.jpg'],
      alt: 'Bathroom fixtures showcase',
      highlights: ['Illuminated mirror installation','Custom vanity and basin','Stone-look wall finishes','Concealed flush and fixture details','Modern bathroom lighting']
    },
    'furniture-collection': {
      title: 'Custom Furniture Collection',
      client: 'Category: Custom furniture',
      location: 'Location: Nairobi',
      scope: 'Scope: Bespoke furniture, joinery, wardrobes and feature panels',
      images: ['assets/images/projects/furniture/IMG-20260602-WA0042.jpg','assets/images/projects/furniture/IMG-20260602-WA0045.jpg','assets/images/projects/furniture/IMG-20260602-WA0049.jpg','assets/images/projects/furniture/IMG-20260602-WA0068.jpg','assets/images/projects/furniture/IMG-20260602-WA0071.jpg','assets/images/projects/furniture/IMG-20260602-WA0076.jpg','assets/images/projects/furniture/IMG-20260602-WA0079.jpg','assets/images/projects/residences/IMG-20260602-WA0126.jpg'],
      alt: 'Custom furniture and joinery collection',
      highlights: ['Arched upholstered wall panels','Timber-look wall detailing','Built-in wardrobe fittings','Custom proportions and finishes','Bespoke joinery presentation']
    }
  };

  const title = document.getElementById('modalTitle');
  const client = document.getElementById('modalClient');
  const location = document.getElementById('modalLocation');
  const scope = document.getElementById('modalScope');
  const modalGallery = document.getElementById('modalGallery');
  const highlights = document.getElementById('modalHighlights');
  const closeBtn = modal.querySelector('.modal-close');
  let lastFocused = null;
  let activeFilter = 'all';
  let slideTimer = null;
  const slideDelay = 5200;
  const fadeDuration = 1400;

  const prepareCardMedia = (card) => {
    const image = card.querySelector(':scope > img');
    if (!image) return card.querySelector('.project-card-media');
    const media = document.createElement('div');
    media.className = 'project-card-media';
    image.classList.add('project-card-image');
    card.insertBefore(media, image);
    media.appendChild(image);
    const more = document.createElement('button');
    more.className = 'project-more';
    more.type = 'button';
    more.textContent = 'Tap for more';
    more.setAttribute('aria-label', `View more ${data[card.dataset.key]?.title || 'project'} images`);
    media.appendChild(more);
    return media;
  };

  const renderCardPreviews = (card) => {
    const project = data[card.dataset.key];
    if (!project || card.querySelector('.project-card-previews')) return;
    const previews = document.createElement('div');
    previews.className = 'project-card-previews';
    previews.innerHTML = project.images.slice(0, 6).map((src, index) => `<img src="${src}" alt="${project.alt} preview ${index + 1}">`).join('');
    card.appendChild(previews);
  };

  const setCardImage = (card, index, animate = false) => {
    const project = data[card.dataset.key];
    const media = card.querySelector('.project-card-media') || prepareCardMedia(card);
    const image = media?.querySelector('.project-card-image');
    if (!project || !image || !project.images?.length) return;
    const nextIndex = index % project.images.length;
    const nextSrc = project.images[nextIndex];
    const nextAlt = `${project.alt} ${nextIndex + 1}`;
    card.dataset.slideIndex = String(nextIndex);

    if (!animate || image.src.endsWith(nextSrc)) {
      image.src = nextSrc;
      image.alt = nextAlt;
      return;
    }

    const preload = new Image();
    preload.onload = () => {
      const nextImage = document.createElement('img');
      nextImage.className = 'project-card-image project-card-image-next';
      nextImage.src = nextSrc;
      nextImage.alt = nextAlt;
      media.appendChild(nextImage);
      window.requestAnimationFrame(() => nextImage.classList.add('is-visible'));
      window.setTimeout(() => {
        image.src = nextSrc;
        image.alt = nextAlt;
        nextImage.remove();
      }, fadeDuration);
    };
    preload.src = nextSrc;
  };

  const cycleVisibleCards = () => {
    if (activeFilter !== 'all') return;
    cards.forEach((card) => {
      if (card.classList.contains('hidden')) return;
      const project = data[card.dataset.key];
      if (!project || project.images.length < 2) return;
      const currentIndex = Number(card.dataset.slideIndex || 0);
      setCardImage(card, currentIndex + 1, true);
    });
  };

  const startSlides = () => {
    window.clearInterval(slideTimer);
    if (activeFilter === 'all') slideTimer = window.setInterval(cycleVisibleCards, slideDelay);
  };

  const openModal = (key) => {
    const project = data[key];
    if (!project) return;
    lastFocused = document.activeElement;
    title.textContent = project.title;
    modalGallery.innerHTML = project.images.map((src, index) => `<img src="${src}" alt="${project.alt} ${index + 1}">`).join('');
    client.textContent = project.client;
    location.textContent = project.location;
    scope.textContent = project.scope;
    highlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    lastFocused?.focus();
  };

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true' || event.target === modal || event.target.classList.contains('modal-close')) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab') {
      const focusables = modal.querySelectorAll('button, a[href]');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  cards.forEach((card) => {
    setCardImage(card, 0);
    renderCardPreviews(card);
    card.addEventListener('click', () => openModal(card.dataset.key));
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter') openModal(card.dataset.key); });
  });

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      activeFilter = filter;
      grid?.classList.toggle('filter-all', filter === 'all');
      grid?.classList.toggle('filter-detail', filter !== 'all');
      filters.forEach((f) => f.classList.toggle('active', f === button));
      cards.forEach((card) => {
        const categories = card.dataset.category.split(' ');
        const show = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden', !show);
        if (show && filter !== 'all') setCardImage(card, 0);
      });
      startSlides();
    });
  });

  startSlides();
  grid?.classList.add('filter-all');
})();
