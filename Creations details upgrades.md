# Creations & Details Limited — Full Site Upgrade Prompt
**Repo:** `https://github.com/MonarCat/creations-details`  
**Live site:** `https://creations-details.vercel.app/`  
**Stack:** Static HTML/CSS/JS · Vercel  
**Date:** June 2026

> This prompt covers all three upgrade tiers. Implement in order: Tier 1 → Tier 2 → Tier 3.  
> All image assets are in `/assets/images/portfolio/` (upload the extracted images there first — see Image Asset Map below).

---

## IMAGE ASSET MAP

Upload all 59 extracted images to `/assets/images/portfolio/` in the repo. The filenames are already final:

### Ruiru Residence (Client: Justin)
**Exterior:**
- `ruiru_exterior_01_frontgate.jpg` — Hero: completed front facade with gate
- `ruiru_exterior_02_pergola_closeup.jpg` — Pergola structure detail
- `ruiru_exterior_03_side_view.jpg` — Side elevation
- `ruiru_exterior_04_rear_corner.jpg` — Rear corner with landscaping
- `ruiru_exterior_05_foundation_progress.jpg` — Construction progress
- `ruiru_exterior_06_canopy_finish.jpg` — Canopy/shade finish

**Living & Floors:**
- `ruiru_living_01_parquet_floor_wide.jpg` — Wide parquet herringbone floor (HERO CANDIDATE)
- `ruiru_living_02_parquet_floor_detail.jpg` — Parquet detail closeup
- `ruiru_living_03_dining_table_left.jpg` — Live-edge dining table angle 1
- `ruiru_living_04_dining_table_right.jpg` — Live-edge dining table angle 2

**Kitchen & Interior:**
- `ruiru_kitchen_01_wide_overhead.jpg` — Kitchen overhead with cove lighting (HERO CANDIDATE)
- `ruiru_kitchen_02_island_sink.jpg` — Kitchen island with sink
- `ruiru_kitchen_03_cabinets_progress.jpg` — Cabinet installation progress
- `ruiru_kitchen_04_grey_cabinets.jpg` — Grey cabinet set with appliances
- `ruiru_kitchen_05_wardrobe_open.jpg` — Open wardrobe unit
- `ruiru_kitchen_06_corridor_doors.jpg` — Corridor with matching doors
- `ruiru_interior_01_kitchen_garden.jpg` — Vertical kitchen garden (unique feature)
- `ruiru_interior_02_hallway.jpg` — Hallway finish
- `ruiru_interior_03_feature_wall.jpg` — Feature wall with moulding

**Bathrooms:**
- `ruiru_bathroom_01_vanity_mirror.jpg` — Vanity with mirror
- `ruiru_bathroom_02_cabinet_medicine.jpg` — Medicine cabinet
- `ruiru_bathroom_03_double_basin.jpg` — Double basin vanity (HERO CANDIDATE)
- `ruiru_bathroom_04_shower_rail.jpg` — Shower rail fitting
- `ruiru_bathroom_05_rain_shower.jpg` — Rain shower head
- `ruiru_bathroom_06_jacuzzi_bath.jpg` — Jacuzzi/bath fitting

### Ruai Residence (Client: Frankline)
**Exterior:**
- `ruai_exterior_01_completed_frontview.jpg` — Completed front (HERO CANDIDATE)
- `ruai_exterior_02_construction_phase1.jpg` — Construction phase 1
- `ruai_exterior_03_construction_phase2.jpg` — Construction phase 2
- `ruai_exterior_04_gate_construction.jpg` — Gate construction
- `ruai_exterior_05_completed_angle.jpg` — Completed side angle

**Interiors:**
- `ruai_interior_01_staircase.jpg` — Timber staircase with steel balustrade
- `ruai_interior_02_living_room.jpg` — Full living room with Christmas tree (HERO CANDIDATE)
- `ruai_kitchen_01_island_wide.jpg` — Kitchen island wide view
- `ruai_kitchen_02_island_angle1.jpg` — Kitchen island angle 1
- `ruai_kitchen_03_island_angle2.jpg` — Kitchen island angle 2

### Katani Residence (Client: Lyndah Nyangweso)
**Exterior:**
- `katani_exterior_01_completed_front.jpg` — Completed front elevation (BEST HERO)
- `katani_exterior_02_construction_early.jpg` — Early construction
- `katani_exterior_03_construction_midway.jpg` — Midway construction
- `katani_exterior_04_construction_structure.jpg` — Structure phase
- `katani_exterior_05_completed_sunset.jpg` — Completed at dusk/sunset angle

**Kitchen:**
- `katani_kitchen_01_island_warmlight.jpg` — Warm-lit island with timber cabinetry (BEST KITCHEN HERO)
- `katani_kitchen_02_cabinetry_detail.jpg` — Timber cabinetry detail with marble splash

### Mixed Projects
- `mixed_01_exterior_modern_bungalow.jpg` — Modern bungalow with patterned paving
- `mixed_02_exterior_flatroof_frontdrive.jpg` — Flat-roof contemporary exterior
- `mixed_03_kitchen_blackwhite_cabinets.jpg` — Black & white kitchen cabinets
- `mixed_04_wardrobe_charcoal.jpg` — Charcoal floor-to-ceiling wardrobe
- `mixed_05_kitchen_island_classic.jpg` — Classic shaker kitchen island
- `mixed_06_wardrobe_grey_sliding.jpg` — Grey sliding wardrobe
- `mixed_07_entrance_door_timber.jpg` — Grand timber pivot entrance door
- `mixed_08_tv_unit_marble_feature.jpg` — TV unit with marble feature wall

### Custom Furniture
- `furniture_01_dining_liveedge_table.jpg` — Live-edge dining table with track lighting
- `furniture_02_sofa_navy_corner.jpg` — Navy corner sofa with timber base
- `furniture_03_round_mirror_feature.jpg` — Round decorative mirror
- `furniture_04_sofa_cognac_set.jpg` — Cognac leather sofa set (BEST FURNITURE HERO)
- `furniture_05_side_table_dark.jpg` — Dark side/end table
- `furniture_06_cabinet_slatted.jpg` — Slatted display cabinet
- `furniture_07_chair_teak.jpg` — Teak accent chair
- `furniture_08_barstool_liveedge.jpg` — Live-edge barstool
- `furniture_09_sofa_cognac_side.jpg` — Cognac sofa delivery side view

---

## TIER 1 — CRITICAL FIXES (Quick Wins)

### T1.1 — Wire Contact Form to Web3Forms

**File:** `contact.html`

Replace the existing `<form>` element's action/method with Web3Forms. No backend needed — free tier handles up to 250 submissions/month.

```html
<!-- Replace existing form tag with: -->
<form action="https://api.web3forms.com/submit" method="POST" id="quoteForm">
  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
  <input type="hidden" name="subject" value="New Project Enquiry — Creations & Details">
  <input type="hidden" name="from_name" value="Creations & Details Website">
  <input type="checkbox" name="botcheck" style="display:none">
  <!-- existing form fields remain unchanged -->
</form>
```

After the closing `</form>`, add a success/error state div:
```html
<div id="formResult" style="display:none; margin-top:1rem; padding:1rem; border-radius:8px;"></div>
```

Add this JS at bottom of `contact.html` (before `</body>`):
```javascript
<script>
document.getElementById('quoteForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const result = document.getElementById('formResult');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = new FormData(this);
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  });
  const data = await response.json();

  if (data.success) {
    result.style.display = 'block';
    result.style.background = '#d4edda';
    result.style.color = '#155724';
    result.innerHTML = '✓ Thank you! We\'ll be in touch within 24 hours.';
    this.reset();
  } else {
    result.style.display = 'block';
    result.style.background = '#f8d7da';
    result.style.color = '#721c24';
    result.innerHTML = '✗ Something went wrong. Please WhatsApp us directly.';
  }
  btn.textContent = 'Send Enquiry →';
  btn.disabled = false;
});
</script>
```

> **Action:** Register at web3forms.com (free), get access key, replace `YOUR_WEB3FORMS_ACCESS_KEY`.

---

### T1.2 — Hero Background Image

**File:** `index.html` (and the `.hero` CSS rule in `styles.css` or inline `<style>`)

Add a real hero background. Best candidate: `katani_exterior_01_completed_front.jpg` or `ruiru_living_01_parquet_floor_wide.jpg`.

In CSS, update the `.hero` section rule:
```css
.hero {
  background-image: 
    linear-gradient(135deg, rgba(13, 27, 62, 0.75) 0%, rgba(30, 58, 138, 0.55) 100%),
    url('/assets/images/portfolio/katani_exterior_01_completed_front.jpg');
  background-size: cover;
  background-position: center 40%;
  background-attachment: fixed; /* parallax feel */
}
```

---

### T1.3 — Scroll-Triggered Counter Animation

**File:** `index.html` (stats section) + `assets/js/main.js` (or create if absent)

The existing stats (`150+ Projects`, `10+ Years`) should count up when scrolled into view.

Locate the stats section in `index.html`. Add `data-target` attributes:
```html
<div class="stat-number" data-target="150">0</div>
<span>+</span> Projects Completed

<div class="stat-number" data-target="10">0</div>
<span>+</span> Years of Excellence
```

Add to `assets/js/main.js`:
```javascript
// Counter animation on scroll
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const increment = target / speed;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    counter.textContent = Math.floor(current);
    if (current >= target) {
      counter.textContent = target;
      clearInterval(timer);
    }
  }, 10);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
```

---

### T1.4 — Fix Placeholder Phone & Social Links

**Files:** All HTML files (global find-replace), `index.html`, `contact.html`

- Replace all `+254 700 000 000` with the real phone number (update before deploy)
- Replace social link `href="#"` with actual URLs:

```html
<!-- In nav, footer, contact — replace # with real URLs -->
<a href="https://www.instagram.com/creationsanddetails" target="_blank" rel="noopener">IG</a>
<a href="https://www.facebook.com/creationsanddetails" target="_blank" rel="noopener">FB</a>
<a href="https://www.linkedin.com/company/creations-and-details" target="_blank" rel="noopener">LI</a>
<a href="https://www.tiktok.com/@creationsanddetails" target="_blank" rel="noopener">TT</a>
```

> **Action:** Confirm actual social handles with client before replacing.

---

### T1.5 — Meta Tags & Basic SEO

**Files:** All `*.html` files

Add to `<head>` of every page:
```html
<!-- Open Graph (for WhatsApp/Facebook link previews) -->
<meta property="og:title" content="Creations & Details Limited | Interior Design Nairobi">
<meta property="og:description" content="Full-service design & construction firm in Nairobi. We design, build and transform spaces — one accountable in-house team.">
<meta property="og:image" content="https://creations-details.vercel.app/assets/images/portfolio/katani_exterior_01_completed_front.jpg">
<meta property="og:url" content="https://creations-details.vercel.app">
<meta property="og:type" content="website">

<!-- Twitter card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Creations & Details Limited">
<meta name="twitter:image" content="https://creations-details.vercel.app/assets/images/portfolio/katani_exterior_01_completed_front.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://creationsanddetails.co.ke">
```

Add LocalBusiness JSON-LD schema to `index.html` `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Creations & Details Limited",
  "description": "Full-service interior design and construction firm in Nairobi, Kenya.",
  "url": "https://creationsanddetails.co.ke",
  "telephone": "+254700000000",
  "email": "info@creationsanddetails.co.ke",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.286389,
    "longitude": 36.817223
  },
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "KES 500K–5M+",
  "image": "https://creationsanddetails.co.ke/assets/images/portfolio/katani_exterior_01_completed_front.jpg",
  "sameAs": [
    "https://www.instagram.com/creationsanddetails",
    "https://www.facebook.com/creationsanddetails"
  ]
}
</script>
```

---

## TIER 2 — CORE UX UPGRADES

### T2.1 — Portfolio Page: Real Images + Lightbox

**File:** `portfolio.html`

The portfolio filter and modal structure already exists. Wire in the real images.

**Project card data** — replace the 6 empty cards with this full data set. Each card needs: `data-category`, a background image, title, subtitle, and tags.

```javascript
// portfolioData array — add to portfolio.html before </body> or in assets/js/portfolio.js
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
      { src: '/assets/images/portfolio/ruiru_living_03_dining_table_left.jpg', caption: 'Custom live-edge dining table' },
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
      { src: '/assets/images/portfolio/ruai_kitchen_02_island_angle1.jpg', caption: 'Kitchen island detail' },
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
      { src: '/assets/images/portfolio/katani_kitchen_02_cabinetry_detail.jpg', caption: 'Timber cabinetry with marble splash' },
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
      { src: '/assets/images/portfolio/ruiru_interior_01_kitchen_garden.jpg', caption: 'Vertical kitchen garden' },
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
      { src: '/assets/images/portfolio/ruiru_bathroom_05_rain_shower.jpg', caption: 'Rain shower head' },
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
      { src: '/assets/images/portfolio/furniture_03_round_mirror_feature.jpg', caption: 'Round decorative mirror' },
    ]
  }
];
```

**Portfolio card HTML template** — replace the existing static cards with dynamically generated cards using `portfolioData`:

```javascript
// Generate cards from portfolioData
function renderPortfolioCards(filter = 'all') {
  const grid = document.querySelector('.portfolio-grid'); // adjust selector to match existing
  grid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.categories.includes(filter));

  filtered.forEach(project => {
    const card = document.createElement('div');
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
    grid.appendChild(card);
  });
}

// Lightbox open
function openLightbox(project) {
  let currentImg = 0;
  const modal = document.querySelector('.portfolio-modal'); // adjust selector
  const modalTitle = modal.querySelector('.modal-title');
  const modalDesc = modal.querySelector('.modal-description');
  const modalTestimonial = modal.querySelector('.modal-testimonial');
  const modalImg = modal.querySelector('.modal-main-img');
  const modalThumbs = modal.querySelector('.modal-thumbnails');

  modalTitle.textContent = project.title + ' — ' + project.client;
  modalDesc.textContent = project.description;
  modalTestimonial.textContent = project.testimonial || '';
  modalTestimonial.style.display = project.testimonial ? 'block' : 'none';

  // Render thumbnails
  modalThumbs.innerHTML = '';
  project.images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.caption;
    thumb.className = i === 0 ? 'active' : '';
    thumb.addEventListener('click', () => {
      currentImg = i;
      modalImg.src = img.src;
      modalThumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
    modalThumbs.appendChild(thumb);
  });

  // Set first image
  modalImg.src = project.images[0].src;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
```

**CSS additions for portfolio cards** (add to `styles.css`):

```css
.portfolio-card {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.portfolio-card:hover { 
  transform: translateY(-4px); 
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
}
.portfolio-card-img {
  height: 260px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.portfolio-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13,27,62,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.portfolio-card:hover .portfolio-card-overlay { opacity: 1; }
.portfolio-card-view {
  color: #fff;
  font-weight: 600;
  border: 2px solid #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
}
.portfolio-card-info { padding: 1rem 1.25rem; }
.portfolio-card-info h3 { margin: 0 0 0.25rem; font-size: 1rem; }
.portfolio-card-info p { margin: 0; color: #666; font-size: 0.875rem; }

/* Lightbox thumbnails */
.modal-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  margin-top: 1rem;
}
.modal-thumbnails img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  flex-shrink: 0;
}
.modal-thumbnails img.active, .modal-thumbnails img:hover {
  border-color: #1e3a8a;
}
.modal-testimonial {
  background: #f8f9fa;
  border-left: 3px solid #f59e0b;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.9rem;
  color: #444;
  border-radius: 0 4px 4px 0;
}
```

---

### T2.2 — Services Page: Process Timeline

**File:** `services.html`

Add a "How It Works" process section between the services list and the footer CTA. Insert this HTML block:

```html
<!-- INSERT after last service section, before footer CTA -->
<section class="process-section" id="process">
  <div class="container">
    <p class="section-label">Our Process</p>
    <h2>From First Call to <em>Final Handover.</em></h2>
    <p class="section-subtitle">Every project follows a disciplined 5-step journey designed to protect your budget, your timeline, and your vision.</p>

    <div class="process-timeline">
      <div class="process-step">
        <div class="process-icon">01</div>
        <div class="process-content">
          <h3>Consultation</h3>
          <p>We visit your site, listen to your brief, and assess the scope. No charge, no obligation — just an honest conversation about what's possible.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="process-icon">02</div>
        <div class="process-content">
          <h3>Design & Quotation</h3>
          <p>Our designers produce mood boards, 3D concepts, and a detailed itemised quotation. You review, refine, and approve before anything begins.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="process-icon">03</div>
        <div class="process-content">
          <h3>Material Sourcing</h3>
          <p>We source all materials to specification — quality-controlled by our in-house team. No substitutions without your approval.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="process-icon">04</div>
        <div class="process-content">
          <h3>Build & Execute</h3>
          <p>Our craftsmen, electricians, plumbers and finishers work to a detailed programme. Progress updates every step of the way.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="process-icon">05</div>
        <div class="process-content">
          <h3>Handover & Snag</h3>
          <p>We walk you through every finish, address any snags within the agreed defects liability period, and hand over your transformed space.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS for process timeline** (add to `styles.css`):
```css
.process-section { padding: 5rem 0; background: #f8f9fa; }
.process-timeline { 
  display: flex; 
  flex-direction: column; 
  gap: 0; 
  margin-top: 3rem; 
  position: relative; 
}
.process-timeline::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #1e3a8a, #f59e0b);
}
.process-step {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 1.5rem 0 1.5rem 0;
  position: relative;
}
.process-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #1e3a8a;
  color: #f59e0b;
  font-weight: 800;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(30,58,138,0.2);
}
.process-content { padding-top: 0.75rem; }
.process-content h3 { margin: 0 0 0.5rem; font-size: 1.1rem; color: #0d1b3e; }
.process-content p { margin: 0; color: #555; line-height: 1.6; }

@media (min-width: 768px) {
  .process-timeline { flex-direction: row; flex-wrap: wrap; gap: 2rem; }
  .process-timeline::before { display: none; }
  .process-step { flex-direction: column; flex: 1; min-width: 180px; align-items: center; text-align: center; }
  .process-icon { margin-bottom: 1rem; }
}
```

---

### T2.3 — Scroll-Reveal Animations

**File:** `assets/js/main.js` + all HTML pages

Add fade-up-on-scroll animations to service cards, portfolio cards, team cards, and any section with `.card` or `.section-block` classes.

```javascript
// Scroll reveal — add to main.js
const revealElements = document.querySelectorAll(
  '.service-card, .portfolio-card, .team-card, .testimonial-card, .process-step, .stat-box'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay based on element position in its row
      const delay = (Array.from(entry.target.parentElement.children).indexOf(entry.target) % 3) * 100;
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
```

Add to `styles.css`:
```css
.service-card, .portfolio-card, .team-card, .testimonial-card, .process-step, .stat-box {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.service-card.revealed, .portfolio-card.revealed, .team-card.revealed,
.testimonial-card.revealed, .process-step.revealed, .stat-box.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

### T2.4 — Hero Section Image Carousel (index.html)

Replace the static hero background with a slow-panning carousel of 3 hero images.

```javascript
// Hero carousel — add to main.js
const heroImages = [
  '/assets/images/portfolio/katani_exterior_01_completed_front.jpg',
  '/assets/images/portfolio/ruiru_living_01_parquet_floor_wide.jpg',
  '/assets/images/portfolio/ruai_interior_02_living_room.jpg',
];

let heroIndex = 0;
const hero = document.querySelector('.hero');

function cycleHero() {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `
    linear-gradient(135deg, rgba(13, 27, 62, 0.72) 0%, rgba(30, 58, 138, 0.52) 100%),
    url('${heroImages[heroIndex]}')
  `;
}

// Preload images
heroImages.forEach(src => { const img = new Image(); img.src = src; });

// Initial set
hero.style.backgroundImage = `
  linear-gradient(135deg, rgba(13, 27, 62, 0.72) 0%, rgba(30, 58, 138, 0.52) 100%),
  url('${heroImages[0]}')
`;
hero.style.transition = 'background-image 1.5s ease-in-out';

setInterval(cycleHero, 6000);
```

---

## TIER 3 — CONVERSION & ADVANCED

### T3.1 — New Page: `process.html`

Create a dedicated "How We Work" page. This is one of the highest-converting pages for a premium construction firm.

**Full page structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- same head as other pages -->
  <title>How We Work | Creations & Details Limited</title>
  <meta name="description" content="Discover how Creations & Details delivers projects — from consultation to handover. One accountable team, five disciplined steps.">
</head>
<body>
  <!-- same nav as other pages -->

  <!-- Hero -->
  <section class="page-hero" style="background-image: linear-gradient(135deg, rgba(13,27,62,0.8) 0%, rgba(30,58,138,0.6) 100%), url('/assets/images/portfolio/ruiru_kitchen_01_wide_overhead.jpg')">
    <div class="container">
      <p class="section-label">Our Process</p>
      <h1>One Team. Five Steps. <em>Zero Guesswork.</em></h1>
      <p>From the moment you contact us to the day we hand over your keys — here's exactly how we work.</p>
    </div>
  </section>

  <!-- Full process detail — 5 steps with image per step -->
  <section class="process-detail">
    <div class="container">

      <div class="process-detail-step">
        <div class="process-detail-img" style="background-image: url('/assets/images/portfolio/katani_exterior_01_completed_front.jpg')"></div>
        <div class="process-detail-content">
          <span class="step-number">Step 01</span>
          <h2>Consultation</h2>
          <p>We start with a site visit and honest conversation. We listen carefully to your vision, assess your space, and give you a realistic picture of what's achievable within your budget. There's no charge and no obligation at this stage.</p>
          <ul>
            <li>Site visit at your convenience</li>
            <li>Scope and feasibility assessment</li>
            <li>Realistic budget guidance</li>
            <li>Timeline expectations</li>
          </ul>
        </div>
      </div>

      <div class="process-detail-step reverse">
        <div class="process-detail-img" style="background-image: url('/assets/images/portfolio/katani_kitchen_01_island_warmlight.jpg')"></div>
        <div class="process-detail-content">
          <span class="step-number">Step 02</span>
          <h2>Design & Quotation</h2>
          <p>Our designers produce mood boards, material selections, and 3D space concepts. We then provide a detailed itemised quotation — no surprises, no hidden charges. You review, refine, and approve before a single brick is moved.</p>
          <ul>
            <li>Mood boards and concept direction</li>
            <li>3D space planning visuals</li>
            <li>Itemised, transparent quotation</li>
            <li>Revision rounds until you're satisfied</li>
          </ul>
        </div>
      </div>

      <div class="process-detail-step">
        <div class="process-detail-img" style="background-image: url('/assets/images/portfolio/ruiru_kitchen_03_cabinets_progress.jpg')"></div>
        <div class="process-detail-content">
          <span class="step-number">Step 03</span>
          <h2>Material Sourcing</h2>
          <p>We source every material — tiles, timber, cabinetry hardware, sanitary ware, electrical fittings — to our specification and yours. Our in-house team quality-controls every delivery. No substitutions are made without your approval.</p>
          <ul>
            <li>Supplier relationships for quality pricing</li>
            <li>Quality inspection on all deliveries</li>
            <li>Sample approvals before bulk orders</li>
            <li>No surprise material swaps</li>
          </ul>
        </div>
      </div>

      <div class="process-detail-step reverse">
        <div class="process-detail-img" style="background-image: url('/assets/images/portfolio/ruai_exterior_02_construction_phase1.jpg')"></div>
        <div class="process-detail-content">
          <span class="step-number">Step 04</span>
          <h2>Build & Execute</h2>
          <p>Our craftsmen, electricians, plumbers, tilers, and finishers work to a detailed programme. Because every discipline is in-house, there's no waiting on external subcontractors — and our site supervisor keeps everything coordinated and moving.</p>
          <ul>
            <li>In-house tradespeople across all disciplines</li>
            <li>Dedicated site supervisor on every project</li>
            <li>Regular progress updates with photos</li>
            <li>Milestone-based payment structure</li>
          </ul>
        </div>
      </div>

      <div class="process-detail-step">
        <div class="process-detail-img" style="background-image: url('/assets/images/portfolio/katani_exterior_05_completed_sunset.jpg')"></div>
        <div class="process-detail-content">
          <span class="step-number">Step 05</span>
          <h2>Handover & Snag</h2>
          <p>We walk you through every finish, room by room. Any snags identified are addressed promptly within our agreed defects liability period. Your home should be exactly as you envisioned — and we don't leave until it is.</p>
          <ul>
            <li>Full walkthrough with client</li>
            <li>Snag list addressed before final payment</li>
            <li>Defects liability period included</li>
            <li>Post-project support available</li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <h2>Ready to Start Your Project?</h2>
      <p>The first step is a conversation. No pressure, no obligation.</p>
      <a href="/contact.html" class="btn btn-primary">Book a Free Consultation</a>
      <a href="https://wa.me/254700000000" class="btn btn-whatsapp" target="_blank">Chat on WhatsApp</a>
    </div>
  </section>

  <!-- same footer as other pages -->
</body>
</html>
```

**CSS for process detail page** (add to `styles.css`):
```css
.process-detail-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid #eee;
}
.process-detail-step.reverse { direction: rtl; }
.process-detail-step.reverse > * { direction: ltr; }
.process-detail-img {
  height: 380px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.step-number {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #f59e0b;
  margin-bottom: 0.5rem;
}
.process-detail-content h2 { font-size: 2rem; margin: 0.25rem 0 1rem; color: #0d1b3e; }
.process-detail-content ul { margin-top: 1rem; padding-left: 1.25rem; color: #555; }
.process-detail-content ul li { margin-bottom: 0.4rem; }

@media (max-width: 768px) {
  .process-detail-step, .process-detail-step.reverse { 
    grid-template-columns: 1fr; 
    direction: ltr;
    gap: 2rem;
    padding: 2rem 0;
  }
  .process-detail-img { height: 240px; }
}
```

Add `process.html` to the nav in all pages:
```html
<li><a href="process.html">How We Work</a></li>
```

---

### T3.2 — Google Maps Embed on Contact Page

**File:** `contact.html`

Add a Google Maps embed after the contact information block:

```html
<!-- Add after contact info block -->
<div class="map-container" style="margin-top: 2rem; border-radius: 12px; overflow: hidden;">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743164!2d36.68258682343754!3d-1.3031931999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1234567890"
    width="100%"
    height="300"
    style="border:0; display:block;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

> **Action:** Replace the embed src with a pin for the actual office location once confirmed.

---

### T3.3 — Image Lazy Loading & WebP Conversion

**File:** All HTML files with `<img>` tags

Add `loading="lazy"` and `decoding="async"` to all non-hero images:
```html
<img src="/assets/images/portfolio/ruiru_exterior_01_frontgate.jpg" 
     alt="Ruiru Residence front facade — Creations & Details" 
     loading="lazy" 
     decoding="async">
```

For hero images (above fold), use `loading="eager"` instead.

**Vercel config for image caching** — add/update `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

### T3.4 — Analytics Setup

1. **Google Analytics 4** — Add to `<head>` of all pages:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
> Replace `G-XXXXXXXXXX` with actual GA4 measurement ID.

2. **Google Search Console** — Verify via DNS TXT record on Cloudflare (if domain is live at creationsanddetails.co.ke), or via HTML tag method for the Vercel domain.

3. **Track quote form submissions** — Add to the Web3Forms success handler (T1.1):
```javascript
if (data.success) {
  // Track conversion
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'Lead',
      event_label: 'Quote Form'
    });
  }
  // ... rest of success handler
}
```

---

## SUMMARY CHECKLIST

### Tier 1 (Fix before showing to any client)
- [ ] T1.1 — Wire form to Web3Forms (get access key at web3forms.com)
- [ ] T1.2 — Add hero background image (`katani_exterior_01_completed_front.jpg`)
- [ ] T1.3 — Counter animation for stats section
- [ ] T1.4 — Replace placeholder phone and social links with real ones
- [ ] T1.5 — Add OG meta tags + LocalBusiness JSON-LD schema

### Tier 2 (Core UX)
- [ ] T2.1 — Portfolio cards wired with real images + lightbox with thumbnails + testimonials
- [ ] T2.2 — Services page process timeline (vertical mobile, horizontal desktop)
- [ ] T2.3 — Scroll-reveal fade-up animations across all pages
- [ ] T2.4 — Hero image carousel (3 rotating hero images)

### Tier 3 (Conversion & Advanced)
- [ ] T3.1 — Create `process.html` — "How We Work" page with 5 steps + real images
- [ ] T3.2 — Google Maps embed on contact page
- [ ] T3.3 — Lazy loading + Vercel cache headers for images
- [ ] T3.4 — GA4 + Search Console setup + form conversion tracking

---

## IMAGE FOLDER STRUCTURE (for repo)

```
/assets/images/portfolio/
├── ruiru_exterior_01_frontgate.jpg
├── ruiru_exterior_02_pergola_closeup.jpg
├── ruiru_exterior_03_side_view.jpg
├── ruiru_exterior_04_rear_corner.jpg
├── ruiru_exterior_05_foundation_progress.jpg
├── ruiru_exterior_06_canopy_finish.jpg
├── ruiru_living_01_parquet_floor_wide.jpg
├── ruiru_living_02_parquet_floor_detail.jpg
├── ruiru_living_03_dining_table_left.jpg
├── ruiru_living_04_dining_table_right.jpg
├── ruiru_kitchen_01_wide_overhead.jpg
├── ruiru_kitchen_02_island_sink.jpg
├── ruiru_kitchen_03_cabinets_progress.jpg
├── ruiru_kitchen_04_grey_cabinets.jpg
├── ruiru_kitchen_05_wardrobe_open.jpg
├── ruiru_kitchen_06_corridor_doors.jpg
├── ruiru_interior_01_kitchen_garden.jpg
├── ruiru_interior_02_hallway.jpg
├── ruiru_interior_03_feature_wall.jpg
├── ruiru_bathroom_01_vanity_mirror.jpg
├── ruiru_bathroom_02_cabinet_medicine.jpg
├── ruiru_bathroom_03_double_basin.jpg
├── ruiru_bathroom_04_shower_rail.jpg
├── ruiru_bathroom_05_rain_shower.jpg
├── ruiru_bathroom_06_jacuzzi_bath.jpg
├── ruai_exterior_01_completed_frontview.jpg
├── ruai_exterior_02_construction_phase1.jpg
├── ruai_exterior_03_construction_phase2.jpg
├── ruai_exterior_04_gate_construction.jpg
├── ruai_exterior_05_completed_angle.jpg
├── ruai_interior_01_staircase.jpg
├── ruai_interior_02_living_room.jpg
├── ruai_kitchen_01_island_wide.jpg
├── ruai_kitchen_02_island_angle1.jpg
├── ruai_kitchen_03_island_angle2.jpg
├── katani_exterior_01_completed_front.jpg
├── katani_exterior_02_construction_early.jpg
├── katani_exterior_03_construction_midway.jpg
├── katani_exterior_04_construction_structure.jpg
├── katani_exterior_05_completed_sunset.jpg
├── katani_kitchen_01_island_warmlight.jpg
├── katani_kitchen_02_cabinetry_detail.jpg
├── mixed_01_exterior_modern_bungalow.jpg
├── mixed_02_exterior_flatroof_frontdrive.jpg
├── mixed_03_kitchen_blackwhite_cabinets.jpg
├── mixed_04_wardrobe_charcoal.jpg
├── mixed_05_kitchen_island_classic.jpg
├── mixed_06_wardrobe_grey_sliding.jpg
├── mixed_07_entrance_door_timber.jpg
├── mixed_08_tv_unit_marble_feature.jpg
├── furniture_01_dining_liveedge_table.jpg
├── furniture_02_sofa_navy_corner.jpg
├── furniture_03_round_mirror_feature.jpg
├── furniture_04_sofa_cognac_set.jpg
├── furniture_05_side_table_dark.jpg
├── furniture_06_cabinet_slatted.jpg
├── furniture_07_chair_teak.jpg
├── furniture_08_barstool_liveedge.jpg
└── furniture_09_sofa_cognac_side.jpg
```
