(() => {
  // ── Project data ──────────────────────────────────────────────────────────
  const PROJECTS = [
    {
      key: 'bara',
      title: 'Bara Swahili Dishes',
      location: 'Runda Mall, Nairobi',
      category: 'residential interior',
      categoryLabel: 'Restaurant Interior',
      scope: 'Full interior fitout including seating, feature walls and lighting design.',
      highlights: ['Feature wall design', 'Custom seating', 'Ambient lighting', 'Branded finish'],
      cover: 'assets/images/projects/residences/IMG-20260602-WA0103.jpg',
      images: [
        'assets/images/projects/residences/IMG-20260602-WA0103.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0015.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0016.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0017.jpg',
      ]
    },
    {
      key: 'runda',
      title: 'Runda Residence',
      location: 'Runda, Nairobi',
      category: 'residential exterior interior',
      categoryLabel: 'Residential',
      scope: 'Full residential project — exterior, interior, landscaping and finishes.',
      highlights: ['Exterior facade', 'Landscaped garden', 'Full interior', 'Custom furniture'],
      cover: 'assets/images/projects/residences/IMG-20260602-WA0106.jpg',
      images: [
        'assets/images/projects/residences/IMG-20260602-WA0106.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0084.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0085.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0086.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0018.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0019.jpg',
      ]
    },
    {
      key: 'interior-showcase',
      title: 'Interior Fitting Showcase',
      location: 'Nairobi',
      category: 'interior furniture',
      categoryLabel: 'Interior & Furniture',
      scope: 'Feature walls, upholstered panels, built-in wardrobes and decorative finishes.',
      highlights: ['Feature walls', 'Upholstered panels', 'Built-in wardrobes', 'Decorative finishes'],
      cover: 'assets/images/projects/furniture/IMG-20260602-WA0042.jpg',
      images: [
        'assets/images/projects/furniture/IMG-20260602-WA0042.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0045.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0049.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0068.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0071.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0076.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0079.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0020.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0021.jpg',
      ]
    },
    {
      key: 'exterior-showcase',
      title: 'Exterior Works Showcase',
      location: 'Nairobi & Environs',
      category: 'exterior residential',
      categoryLabel: 'Exterior',
      scope: 'A collection of exterior works — facades, boundary walls, gates, paving and landscaping.',
      highlights: ['Stone cladding', 'Bespoke gates', 'Paving & lawns', 'Exterior lighting'],
      cover: 'assets/images/projects/exterior/IMG-20260602-WA0084.jpg',
      images: [
        'assets/images/projects/exterior/IMG-20260602-WA0084.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0085.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0086.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0087.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0088.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0089.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0090.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0091.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0092.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0093.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0094.jpg',
        'assets/images/projects/exterior/IMG-20260602-WA0095.jpg',
      ]
    },
    {
      key: 'kitchen-showcase',
      title: 'Kitchen Design Showcase',
      location: 'Nairobi',
      category: 'kitchen interior',
      categoryLabel: 'Kitchen',
      scope: 'Fitted kitchens — cabinetry, islands, countertops and appliance integration.',
      highlights: ['Custom cabinetry', 'Island design', 'Countertops', 'Appliance integration'],
      cover: 'assets/images/projects/kitchen/IMG-20260602-WA0057.jpg',
      images: [
        'assets/images/projects/kitchen/IMG-20260602-WA0057.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0058.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0059.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0060.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0061.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0062.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0063.jpg',
        'assets/images/projects/kitchen/IMG-20260602-WA0064.jpg',
      ]
    },
    {
      key: 'bathroom-showcase',
      title: 'Bathroom & Fixtures Showcase',
      location: 'Nairobi',
      category: 'bathroom interior',
      categoryLabel: 'Bathroom',
      scope: 'Premium bathroom fitouts — vanities, showers, tiling and illuminated mirrors.',
      highlights: ['Premium sanitary ware', 'Shower installations', 'Tiling & finishes', 'Illuminated mirrors'],
      cover: 'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0029.jpg',
      images: [
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0028.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0029.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0031.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0032.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0036.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0037.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0038.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0077.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0078.jpg',
        'assets/images/projects/bathroom&fixtures/IMG-20260602-WA0083.jpg',
      ]
    },
    {
      key: 'furniture-collection',
      title: 'Custom Furniture Collection',
      location: 'Nairobi',
      category: 'furniture interior',
      categoryLabel: 'Custom Furniture',
      scope: 'Bespoke joinery, built-in wardrobes, TV units, beds and decorative shelving.',
      highlights: ['Built-in wardrobes', 'TV units', 'Bespoke beds', 'Shelving & joinery'],
      cover: 'assets/images/projects/furniture/IMG-20260602-WA0079.jpg',
      images: [
        'assets/images/projects/furniture/IMG-20260602-WA0079.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0076.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0071.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0068.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0049.jpg',
        'assets/images/projects/furniture/IMG-20260602-WA0045.jpg',
      ]
    },
    {
      key: 'interior-details',
      title: 'Interior Details Collection',
      location: 'Nairobi',
      category: 'interior',
      categoryLabel: 'Interior Design',
      scope: 'Living spaces, bedrooms, ceiling designs and decorative wall finishes.',
      highlights: ['Ceiling design', 'Feature walls', 'Living spaces', 'Bedroom design'],
      cover: 'assets/images/projects/interior/IMG-20260602-WA0043.jpg',
      images: [
        'assets/images/projects/interior/IMG-20260602-WA0043.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0044.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0046.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0047.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0048.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0022.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0023.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0026.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0030.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0034.jpg',
        'assets/images/projects/interior/IMG-20260602-WA0039.jpg',
      ]
    },
  ];

  // ── Build cards ──────────────────────────────────────────────────────────
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card" tabindex="0" data-key="${p.key}" data-category="${p.category}" aria-label="${p.title}">
      <div class="project-card-media">
        <img src="${p.cover}" alt="${p.title}" loading="lazy">
        ${p.images.length > 1 ? `<img class="project-card-image-next" src="${p.images[1]}" alt="" aria-hidden="true" loading="lazy">` : ''}
        <span class="card-category-badge">${p.categoryLabel}</span>
        <span class="card-count-badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          ${p.images.length}
        </span>
        <div class="project-card-overlay">
          <div class="overlay-title">${p.title}</div>
          <div class="overlay-sub">${p.location}</div>
          <span class="overlay-cta">View Project →</span>
        </div>
      </div>
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
      </div>
    </article>
  `).join('');

  // ── Slideshow on hover ───────────────────────────────────────────────────
  grid.querySelectorAll('.project-card').forEach(card => {
    const next = card.querySelector('.project-card-image-next');
    if (!next) return;
    const key = card.dataset.key;
    const proj = PROJECTS.find(p => p.key === key);
    if (!proj || proj.images.length < 2) return;
    let idx = 1, timer;
    card.addEventListener('mouseenter', () => {
      timer = setInterval(() => {
        idx = (idx + 1) % proj.images.length;
        next.src = proj.images[idx];
        next.classList.add('is-visible');
        setTimeout(() => next.classList.remove('is-visible'), 1400);
      }, 2200);
    });
    card.addEventListener('mouseleave', () => { clearInterval(timer); next.classList.remove('is-visible'); idx = 1; });
  });

  // ── Filter ───────────────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll('.project-card').forEach(card => {
        const cats = card.dataset.category || '';
        const show = filter === 'all' || cats.split(' ').includes(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });

  // ── Modal ────────────────────────────────────────────────────────────────
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalGallery = document.getElementById('modalGallery');
  const modalMeta = document.getElementById('modalMeta');
  const modalHighlights = document.getElementById('modalHighlights');
  const backdrop = modal?.querySelector('.modal-backdrop');
  const closeBtn = modal?.querySelector('.modal-close');

  let currentImages = [];

  const openModal = (key) => {
    const p = PROJECTS.find(pr => pr.key === key);
    if (!p || !modal) return;
    currentImages = p.images;
    modalTitle.textContent = p.title;
    modalMeta.innerHTML = `
      <span class="modal-meta-pill"><strong>Location:</strong> ${p.location}</span>
      <span class="modal-meta-pill"><strong>Category:</strong> ${p.categoryLabel}</span>
      <span class="modal-meta-pill"><strong>Photos:</strong> ${p.images.length}</span>
    `;
    modalGallery.innerHTML = p.images.map((src, i) =>
      `<img src="${src}" alt="${p.title} — photo ${i+1}" loading="lazy" data-index="${i}">`
    ).join('');
    modalHighlights.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');

    // Lightbox on gallery click
    modalGallery.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => openLightbox(+img.dataset.index, currentImages));
    });
  };

  const closeModal = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  grid.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openModal(card.dataset.key);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.project-card');
      if (card) { e.preventDefault(); openModal(card.dataset.key); }
    }
  });
  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── Lightbox ─────────────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');
  let lbImages = [], lbIndex = 0;

  const openLightbox = (index, images) => {
    lbImages = images; lbIndex = index;
    lbImg.src = lbImages[lbIndex];
    lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    lightbox.classList.add('open');
  };
  const closeLightbox = () => lightbox.classList.remove('open');
  const lbNext = () => { lbIndex = (lbIndex + 1) % lbImages.length; lbImg.src = lbImages[lbIndex]; lbCounter.textContent = `${lbIndex+1} / ${lbImages.length}`; };
  const lbPrev = () => { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; lbImg.src = lbImages[lbIndex]; lbCounter.textContent = `${lbIndex+1} / ${lbImages.length}`; };

  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lbNext')?.addEventListener('click', lbNext);
  document.getElementById('lbPrev')?.addEventListener('click', lbPrev);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft') lbPrev();
    if (e.key === 'Escape') closeLightbox();
  });
})();
