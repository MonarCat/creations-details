(() => {
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  if (!cards.length) return;

  const data = {
    ruiru: { title: 'Ruiru Residence', client: 'Client: Justin', location: 'Location: Ruiru, Kiambu County', scope: 'Scope: Full exterior redesign + complete interior fitout', highlights: ['Contemporary stone-clad façade','Glass pergola shade structure','Hardwood parquet floors (herringbone)','Custom live-edge dining table','Premium kitchen installation','Bathroom fitout with jacuzzi'] },
    ruai: { title: 'Ruai Residence', client: 'Client: Frankline', location: 'Location: Ruai, Nairobi', scope: 'Scope: Full construction from slab to handover', highlights: ['Structural build & masonry','External landscaping & gates','Modern living room with feature wall','Luxury kitchen with island','Hardwood staircase with steel balustrade','Full electrical & plumbing'] },
    katani: { title: 'Katani Residence', client: 'Client: Lyndah Nyangweso', location: 'Location: Katani, Machakos County', scope: 'Scope: Full build + bespoke interior design', highlights: ['Stone-clad columns','Rustic-modern kitchen','Exposed beam ceiling','Custom joinery throughout','Landscaped compound'] },
    'interior-showcase': { title: 'Interior Fitting Showcase', client: 'Client: Multiple', location: 'Location: Nairobi', scope: 'Scope: Kitchen design & fitting works', highlights: ['Handleless fitted kitchens','Quartz countertops','Glass splashbacks','Integrated appliances','Custom pull-out storage'] },
    'bathroom-showcase': { title: 'Bathroom & Fixtures Showcase', client: 'Client: Multiple', location: 'Location: Nairobi', scope: 'Scope: Premium bathroom design & fitout', highlights: ['Double-basin vanities','Corner jacuzzi installation','Frameless shower enclosures','Rain shower heads','Mirror cabinets'] },
    'furniture-collection': { title: 'Custom Furniture Collection', client: 'Client: Multiple', location: 'Location: Nairobi', scope: 'Scope: Bespoke furniture design & fabrication', highlights: ['Live-edge dining tables','Sectional sofas','Built-in wardrobes','TV entertainment units','Accent chairs'] }
  };

  const title = document.getElementById('modalTitle');
  const client = document.getElementById('modalClient');
  const location = document.getElementById('modalLocation');
  const scope = document.getElementById('modalScope');
  const highlights = document.getElementById('modalHighlights');
  const closeBtn = modal.querySelector('.modal-close');
  let lastFocused = null;

  const openModal = (key) => {
    const project = data[key];
    if (!project) return;
    lastFocused = document.activeElement;
    title.textContent = project.title;
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
    card.addEventListener('click', () => openModal(card.dataset.key));
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter') openModal(card.dataset.key); });
  });

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach((f) => f.classList.toggle('active', f === button));
      cards.forEach((card) => {
        const categories = card.dataset.category.split(' ');
        const show = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });
})();
