(() => {
  const portfolioData = [
    {
      id: 'ruiru',
      title: 'Ruiru Residence',
      client: 'Justin',
      location: 'Ruiru, Kiambu County',
      categories: ['residential', 'exterior', 'interior', 'kitchen', 'furniture'],
      heroImage: '/assets/images/portfolio/ruiru_exterior_01_frontgate.jpg',
      description: 'Full exterior redesign and complete interior fitout — from parquet herringbone floors to bespoke kitchen cabinetry, live-edge furniture, and a custom jacuzzi bathroom.',
      testimonial: '"The team transformed our house into something we couldn\'t have imagined. Every detail was executed flawlessly." — Justin M.',
      images: [
        { src: '/assets/images/portfolio/ruiru_exterior_01_frontgate.jpg', caption: 'Completed front facade' },
        { src: '/assets/images/portfolio/ruiru_exterior_02_pergola_closeup.jpg', caption: 'Pergola detail' },
        { src: '/assets/images/portfolio/ruiru_exterior_03_side_view.jpg', caption: 'Side elevation' },
        { src: '/assets/images/portfolio/ruiru_exterior_04_rear_corner.jpg', caption: 'Rear with landscaping' },
        { src: '/assets/images/portfolio/ruiru_living_01_parquet_floor_wide.jpg', caption: 'Herringbone parquet flooring' },
        { src: '/assets/images/portfolio/ruiru_kitchen_01_wide_overhead.jpg', caption: 'Kitchen with cove lighting' },
        { src: '/assets/images/portfolio/ruiru_bathroom_03_double_basin.jpg', caption: 'Double basin bathroom vanity' },
        { src: '/assets/images/portfolio/ruiru_bathroom_06_jacuzzi_bath.jpg', caption: 'Jacuzzi installation' },
        { src: '/assets/images/portfolio/ruiru_living_03_dining_table_left.jpg', caption: 'Custom live-edge dining table' }
      ]
    },
    {
      id: 'ruai',
      title: 'Ruai Residence',
      client: 'Frankline',
      location: 'Ruai, Nairobi',
      categories: ['residential', 'exterior', 'interior', 'kitchen'],
      heroImage: '/assets/images/portfolio/ruai_exterior_01_completed_frontview.jpg',
      description: 'Full construction from slab to polished handover — including structural build, roofing, gate, landscaping, timber staircase with steel balustrade, full kitchen fitout, and living room interior.',
      testimonial: '"They managed everything — I didn\'t have to chase a single contractor. One call, one team, delivered on time and within budget." — Frankline K.',
      images: [
        { src: '/assets/images/portfolio/ruai_exterior_01_completed_frontview.jpg', caption: 'Completed front' },
        { src: '/assets/images/portfolio/ruai_exterior_02_construction_phase1.jpg', caption: 'Construction phase 1' },
        { src: '/assets/images/portfolio/ruai_exterior_03_construction_phase2.jpg', caption: 'Construction phase 2' },
        { src: '/assets/images/portfolio/ruai_exterior_05_completed_angle.jpg', caption: 'Completed side angle' },
        { src: '/assets/images/portfolio/ruai_interior_02_living_room.jpg', caption: 'Living room — completed interior' },
        { src: '/assets/images/portfolio/ruai_interior_01_staircase.jpg', caption: 'Timber staircase with steel balustrade' },
        { src: '/assets/images/portfolio/ruai_kitchen_01_island_wide.jpg', caption: 'Kitchen island — wide view' },
        { src: '/assets/images/portfolio/ruai_kitchen_02_island_angle1.jpg', caption: 'Kitchen island detail' }
      ]
    },
    {
      id: 'katani',
      title: 'Katani Residence',
      client: 'Lyndah Nyangweso',
      location: 'Katani, Machakos County',
      categories: ['residential', 'exterior', 'kitchen', 'interior'],
      heroImage: '/assets/images/portfolio/katani_exterior_01_completed_front.jpg',
      description: 'Complete residential build with bespoke interior design — featuring a statement kitchen with warm-lit timber cabinetry, marble island, and a striking contemporary exterior.',
      testimonial: '"The kitchen they designed for me is the envy of every guest. Highly recommended." — Lyndah Nyangweso',
      images: [
        { src: '/assets/images/portfolio/katani_exterior_01_completed_front.jpg', caption: 'Completed front elevation' },
        { src: '/assets/images/portfolio/katani_exterior_05_completed_sunset.jpg', caption: 'Evening angle' },
        { src: '/assets/images/portfolio/katani_exterior_02_construction_early.jpg', caption: 'Early construction' },
        { src: '/assets/images/portfolio/katani_exterior_03_construction_midway.jpg', caption: 'Midway progress' },
        { src: '/assets/images/portfolio/katani_kitchen_01_island_warmlight.jpg', caption: 'Bespoke kitchen — warm lighting' },
        { src: '/assets/images/portfolio/katani_kitchen_02_cabinetry_detail.jpg', caption: 'Timber cabinetry with marble splash' }
      ]
    },
    {
      id: 'interiors-showcase',
      title: 'Interior Fitting Showcase',
      client: 'Multiple',
      location: 'Nairobi & environs',
      categories: ['interior', 'kitchen'],
      heroImage: '/assets/images/portfolio/mixed_05_kitchen_island_classic.jpg',
      description: 'A selection of fitted kitchens, wardrobes, corridors, and interior finishes from various residential projects across Nairobi.',
      testimonial: null,
      images: [
        { src: '/assets/images/portfolio/mixed_03_kitchen_blackwhite_cabinets.jpg', caption: 'Black & white kitchen' },
        { src: '/assets/images/portfolio/mixed_05_kitchen_island_classic.jpg', caption: 'Classic shaker kitchen island' },
        { src: '/assets/images/portfolio/mixed_04_wardrobe_charcoal.jpg', caption: 'Floor-to-ceiling charcoal wardrobe' },
        { src: '/assets/images/portfolio/mixed_06_wardrobe_grey_sliding.jpg', caption: 'Grey sliding wardrobe' },
        { src: '/assets/images/portfolio/mixed_07_entrance_door_timber.jpg', caption: 'Grand timber pivot entrance door' },
        { src: '/assets/images/portfolio/mixed_08_tv_unit_marble_feature.jpg', caption: 'TV unit with marble feature wall' },
        { src: '/assets/images/portfolio/ruiru_interior_01_kitchen_garden.jpg', caption: 'Vertical kitchen garden' }
      ]
    },
    {
      id: 'bathrooms-showcase',
      title: 'Bathroom & Fixtures',
      client: 'Multiple',
      location: 'Nairobi & environs',
      categories: ['interior'],
      heroImage: '/assets/images/portfolio/ruiru_bathroom_03_double_basin.jpg',
      description: 'Premium bathroom fitouts including double vanities, jacuzzi installations, rain showers, and full wet-area tiling.',
      testimonial: null,
      images: [
        { src: '/assets/images/portfolio/ruiru_bathroom_03_double_basin.jpg', caption: 'Double basin vanity' },
        { src: '/assets/images/portfolio/ruiru_bathroom_06_jacuzzi_bath.jpg', caption: 'Jacuzzi bath' },
        { src: '/assets/images/portfolio/ruiru_bathroom_01_vanity_mirror.jpg', caption: 'Vanity with mirror' },
        { src: '/assets/images/portfolio/ruiru_bathroom_02_cabinet_medicine.jpg', caption: 'Medicine cabinet' },
        { src: '/assets/images/portfolio/ruiru_bathroom_05_rain_shower.jpg', caption: 'Rain shower head' }
      ]
    },
    {
      id: 'furniture-showcase',
      title: 'Custom Furniture Collection',
      client: 'Multiple',
      location: 'Nairobi',
      categories: ['furniture'],
      heroImage: '/assets/images/portfolio/furniture_04_sofa_cognac_set.jpg',
      description: 'Bespoke furniture crafted in-house — live-edge dining tables, sofas, accent chairs, slatted display cabinets, and custom upholstery.',
      testimonial: null,
      images: [
        { src: '/assets/images/portfolio/furniture_01_dining_liveedge_table.jpg', caption: 'Live-edge dining table' },
        { src: '/assets/images/portfolio/furniture_02_sofa_navy_corner.jpg', caption: 'Navy corner sofa' },
        { src: '/assets/images/portfolio/furniture_04_sofa_cognac_set.jpg', caption: 'Cognac leather sofa set' },
        { src: '/assets/images/portfolio/furniture_06_cabinet_slatted.jpg', caption: 'Slatted display cabinet' },
        { src: '/assets/images/portfolio/furniture_07_chair_teak.jpg', caption: 'Teak accent chair' },
        { src: '/assets/images/portfolio/furniture_08_barstool_liveedge.jpg', caption: 'Live-edge barstool' },
        { src: '/assets/images/portfolio/furniture_03_round_mirror_feature.jpg', caption: 'Round decorative mirror' }
      ]
    }
  ];

  const grid = document.getElementById('projectsGrid');
  const filters = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('projectModal');

  if (!grid || !modal) return;

  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const modalTestimonial = modal.querySelector('.modal-testimonial');
  const modalMainImage = modal.querySelector('.modal-main-img');
  const modalMainCaption = modal.querySelector('.modal-main-caption');
  const modalThumbs = modal.querySelector('.modal-thumbnails');
  const modalMeta = modal.querySelector('.modal-meta');
  const closeButton = modal.querySelector('.modal-close');

  const openLightbox = (project) => {
    let currentImageIndex = 0;

    const updateMainImage = (index) => {
      const selected = project.images[index];
      modalMainImage.src = selected.src;
      modalMainImage.alt = selected.caption;
      modalMainCaption.textContent = selected.caption;
      modalThumbs.querySelectorAll('img').forEach((img, imgIndex) => {
        img.classList.toggle('active', imgIndex === index);
      });
    };

    modalTitle.textContent = `${project.title} — ${project.client}`;
    modalDescription.textContent = project.description;
    modalMeta.textContent = project.location;

    if (project.testimonial) {
      modalTestimonial.textContent = project.testimonial;
      modalTestimonial.style.display = 'block';
    } else {
      modalTestimonial.style.display = 'none';
    }

    modalThumbs.innerHTML = '';
    project.images.forEach((img, index) => {
      const thumb = document.createElement('img');
      thumb.src = img.src;
      thumb.alt = img.caption;
      thumb.loading = 'lazy';
      thumb.decoding = 'async';
      thumb.addEventListener('click', () => {
        currentImageIndex = index;
        updateMainImage(currentImageIndex);
      });
      modalThumbs.appendChild(thumb);
    });

    updateMainImage(currentImageIndex);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  const closeLightbox = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const renderPortfolioCards = (filter = 'all') => {
    grid.innerHTML = '';

    const filtered = filter === 'all'
      ? portfolioData
      : portfolioData.filter((project) => project.categories.includes(filter));

    filtered.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'portfolio-card';
      card.setAttribute('data-id', project.id);
      card.innerHTML = `
        <div class="portfolio-card-img" style="background-image: url('${project.heroImage}')">
          <div class="portfolio-card-overlay">
            <span class="portfolio-card-view">View Project</span>
          </div>
        </div>
        <div class="portfolio-card-info">
          <h3>${project.title}</h3>
          <p>${project.client} · ${project.location}</p>
        </div>
      `;
      card.addEventListener('click', () => openLightbox(project));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') openLightbox(project);
      });
      card.tabIndex = 0;
      grid.appendChild(card);
    });
  };

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filters.forEach((item) => item.classList.toggle('active', item === button));
      renderPortfolioCards(filter);
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  modal.querySelector('.modal-backdrop')?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });

  renderPortfolioCards();
})();
