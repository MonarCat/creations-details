# GitHub Copilot Prompt — Creations & Details Limited Website Restructure
**Repo:** `MonarCat/creations-details`
**Current state:** Single file — `creations and details.html`
**Goal:** Refactor into a complete, multi-page static website with shared assets, pre-filled content, consistent branding, and a clean folder structure ready for deployment on Vercel/Netlify.

---

## 1. CONTEXT

This is the website for **Creations & Details Limited**, a Nairobi-based full-service interior design and construction company. The business:
- Offers end-to-end Design & Build, Consultancy, and Project Management
- Has a full in-house team: designers, carpenters/joiners, electricians, plumbers, tilers, structural workers, landscapers
- Completed notable projects: Ruiru Residence (Justin), Ruai Residence (Frankline), Katani Residence (Lyndah Nyangweso)
- Services: Exterior Works, Interior Design, Kitchen Design, Custom Furniture, Floor & Wall Finishes, Bathroom Fittings & Fixtures, Landscaping, General Renovations

**Brand identity:**
- Primary: Deep Navy `#0A1628` | Electric Blue `#1E5FBF` / `#2B7FFF`
- Accent: Amber/Gold `#E8A020` / `#F5C048`
- Off-white: `#F8F6F2`
- Fonts: `Cormorant Garamond` (display/headings) + `Barlow` (body) + `Barlow Condensed` (UI labels, uppercase)
- Tagline: *"Where vision meets craftsmanship."*
- All fonts loaded via Google Fonts CDN

---

## 2. TARGET FILE STRUCTURE

Restructure the repo from one file into the following layout:

```
creations-details/
│
├── index.html               # Home page
├── about.html               # About Us page
├── services.html            # Services overview page
├── portfolio.html           # Portfolio / Projects gallery page
├── team.html                # Our Team page
├── contact.html             # Contact / Get a Quote page
│
├── assets/
│   ├── css/
│   │   ├── global.css       # CSS variables, reset, typography, nav, footer
│   │   ├── home.css         # Styles specific to index.html
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── portfolio.css
│   │   ├── team.css
│   │   └── contact.css
│   │
│   ├── js/
│   │   ├── global.js        # Nav scroll behavior, WhatsApp button, shared utilities
│   │   ├── home.js          # Hero animations, marquee
│   │   ├── portfolio.js     # Filter tabs, lightbox/modal
│   │   └── contact.js       # Form validation and submission handler
│   │
│   └── images/
│       ├── projects/        # Placeholder folders for project photos
│       │   ├── ruiru/
│       │   ├── ruai/
│       │   ├── katani/
│       │   └── mixed/
│       └── team/            # Placeholder for team headshots
│
├── .gitignore
├── vercel.json              # Vercel deployment config
└── README.md
```

---

## 3. SHARED COMPONENTS (extract into every HTML file)

### 3a. `<head>` boilerplate (identical in every page)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[PAGE-SPECIFIC DESCRIPTION]">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/global.css">
<link rel="stylesheet" href="assets/css/[PAGE].css">
```

### 3b. Navigation (identical in every page, active link highlighted with `class="active"`)
```html
<nav id="main-nav">
  <div class="nav-logo">
    <div class="logo-mark">C&amp;D</div>
    <div class="logo-text">
      <span class="logo-name">Creations &amp; Details</span>
      <span class="logo-sub">Limited · Est. Nairobi</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="team.html">Our Team</a></li>
    <li><a href="contact.html" class="nav-cta">Get a Quote</a></li>
  </ul>
  <button class="nav-hamburger" aria-label="Open menu">&#9776;</button>
</nav>
<div class="nav-mobile-overlay" id="mobileMenu">
  <!-- Mobile nav links mirror desktop -->
</div>
```

Active page link: add `class="active"` to the matching `<a>` on each page. Style `.nav-links a.active` with `color: var(--amber)` and a bottom border.

### 3c. Footer (identical in every page)
```html
<footer>
  <div class="footer-grid">
    <div class="footer-about">
      <!-- Logo + description + social links -->
      <!-- Social: Instagram, Facebook, LinkedIn, TikTok -->
      <!-- Placeholder hrefs: update with real handles -->
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <!-- List all 7 services linking to services.html#[anchor] -->
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <!-- Links to all pages -->
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <!-- Phone: +254 700 000 000 (PLACEHOLDER — replace with real number) -->
      <!-- Email: info@creationsanddetails.co.ke (PLACEHOLDER) -->
      <!-- Address: Nairobi, Kenya -->
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 Creations &amp; Details Limited. All rights reserved.</p>
    <span class="footer-tagline">"Where vision meets craftsmanship."</span>
  </div>
</footer>

<!-- WhatsApp floating button — appears on every page -->
<a class="whatsapp-btn" href="https://wa.me/254700000000" target="_blank" title="Chat on WhatsApp">
  <!-- WhatsApp SVG icon -->
</a>

<script src="assets/js/global.js"></script>
<script src="assets/js/[PAGE].js"></script>
```

---

## 4. PAGE-BY-PAGE SPECIFICATIONS

---

### PAGE 1: `index.html` — Home

**Meta title:** `Creations & Details Limited | Interior Design & Construction Nairobi`
**Meta description:** `Full-service interior design and construction company in Nairobi. Design, Build, Renovate. Expert team for kitchens, interiors, exteriors & custom furniture.`

**Sections (in order):**

#### Hero
- Split two-column layout (left: text, right: visual)
- Eyebrow: "Nairobi · Kenya · Est. In Excellence"
- H1: "We Design. / We *Build.* / We Transform." (`<em>` word in amber italic)
- Subtitle: "Full-service interior design and construction firm delivering end-to-end project excellence — from concept and consultancy to the final detail."
- Two CTAs: `btn-primary` → `portfolio.html` ("View Our Work"), `btn-outline` → `contact.html` ("Start a Project")
- Right column: two stat cards — "150+" / "Projects Completed" and "10+" / "Years of Excellence"
- Animated entrance: eyebrow, h1, subtitle, CTAs stagger with `animation-delay`

#### Marquee strip (amber background, navy text)
Scrolling ticker: `Design & Build · Interior Architecture · Space Planning · Kitchen Design · Project Management · Consultancy · Walling & Structures · Landscaping · Floor Finishes · Custom Furniture · General Renovations`
— duplicate items for seamless CSS-only loop

#### About Teaser
- Light background (`#F8F6F2`)
- Left: heading "Your Vision, *Our Craft.*", two paragraphs of intro copy (see Section 5), four pillar cards (Design & Build / Consultancy / Project Management / Renovation), link → `about.html`
- Right: decorative block with "100% In-House Specialists" badge

#### Services Teaser (3-column grid, 3 cards only)
- Dark navy background
- Show only: Exterior Works, Interior Design, Kitchen Design
- "See All Services →" link → `services.html`

#### Portfolio Teaser
- Light gray background
- Show 3 featured project cards only (Ruiru, Ruai, Katani)
- "View Full Portfolio →" link → `portfolio.html`

#### Testimonials (3 cards)
- Dark navy background
- Pre-filled testimonials (see Section 5)

#### CTA Strip
- Blue background
- Heading: "Let's Create Something Extraordinary."
- Single large CTA button → `contact.html`

---

### PAGE 2: `about.html` — About Us

**Meta title:** `About Us | Creations & Details Limited`
**Meta description:** `Learn about Creations & Details Limited — a Nairobi-based design and construction firm with an expert in-house team delivering excellence since inception.`

**Sections:**

#### Page Hero (inner page style — narrower, no split)
- Dark navy background, centered
- Eyebrow: "Our Story"
- H1: "Built on Craft. *Driven by Detail.*"
- Subtitle: "We are Nairobi's premier full-service interior design and construction company — one team, every capability, uncompromising quality."
- Breadcrumb: `Home > About`

#### Mission & Vision
- Two-column split, light background
- Left — **Mission:** "To deliver transformative spaces through honest craftsmanship, creative design, and meticulous project execution — treating every client's vision as our own."
- Right — **Vision:** "To be the most trusted design and construction firm in East Africa, known for delivering projects that endure in both quality and beauty."

#### Our Story (timeline)
Five timeline entries, left-right alternating on desktop, stacked on mobile:
1. **Founded** — "Creations & Details Limited was established in Nairobi by a team of passionate designers and builders with a shared mission: deliver the entire design-to-build journey without fragmentation."
2. **First Major Projects** — "Early projects in Ruiru and Ruai demonstrated our ability to manage complex residential builds from bare slab to polished handover — earning us referrals that define our portfolio today."
3. **Full In-House Team** — "We invested in building a complete roster of certified specialists — electricians, plumbers, carpenters, tilers — so clients never need a second company."
4. **Design Excellence** — "Our design consultancy arm grew, attracting clients who want expert guidance on space planning, material selection, kitchen architecture, and interior finishes before a single brick is laid."
5. **Today** — "With 150+ projects completed across Nairobi and surrounds, we continue to grow — guided by the belief that every space deserves precision, and every client deserves accountability."

#### Core Values (4-card grid, navy background)
1. **Craftsmanship** — "We hold every nail, tile, joint, and finish to the same high standard. Quality is not a feature — it is our baseline."
2. **Accountability** — "One point of contact. One team. We own the result from first concept to final handover."
3. **Innovation** — "We blend classic design principles with contemporary techniques, materials, and spatial thinking to create spaces that feel both timeless and current."
4. **Integrity** — "Transparent quotations, honest timelines, no surprises. We say what we mean and build what we promise."

#### Why Choose Us (comparison style — Us vs. typical contractor)
- Table or icon-list comparing: In-house team / Single point of contact / Design + Build under one roof / Transparent pricing / Dedicated PM / Post-handover support
- Mark our column with amber checkmarks, competitor with grey crosses

#### CTA strip → `contact.html`

---

### PAGE 3: `services.html` — Services

**Meta title:** `Our Services | Creations & Details Limited`
**Meta description:** `Full-service interior design, exterior construction, kitchen design, custom furniture, bathroom fittings and renovations in Nairobi. One company, all capabilities.`

**Sections:**

#### Page Hero
- Eyebrow: "What We Offer"
- H1: "Every Service. *One Team.*"
- Subtitle: "From architectural exteriors to the final light fitting — we handle every discipline in-house."

#### Services Detail (6 full sections, each with: anchor ID, icon, title, 2–3 paragraphs, bulleted capability list, and a "Request This Service →" link to `contact.html`)

**1. Exterior Works** `id="exterior"`
- Icon: 🏠
- Description: "Your home's exterior is its first statement. We design and build complete exterior environments — from structural walling and façade finishes to bespoke gate designs, landscaping, and outdoor shade structures. Whether you need a contemporary stone-clad finish, a pergola over your driveway, or a fully landscaped compound, our team delivers exteriors that set the tone for what lies inside."
- Capabilities: Walling & masonry structures · Stone cladding & façade finishes · Bespoke gate and boundary designs · Outdoor pergolas, shades & canopies · Landscaping & garden design · Paving, driveways & outdoor tiles · External lighting

**2. Interior Design** `id="interior"`
- Icon: 🛋️
- Description: "Great interiors do not happen by accident — they are the result of deliberate space planning, material curation, and design discipline. Our interior design team works closely with you to understand how you live, then translates that into a spatial plan that is both beautiful and functional. We handle everything from concept mood boards and 3D planning to the selection of every finish, fixture, and fitting."
- Capabilities: Space planning & room layout · Wall finishes (paint, texture, panelling) · Ceiling design & cove lighting · Curtaining & soft furnishing guidance · Living & dining room design · Bedroom design & wardrobing · Decorative accessories & styling

**3. Kitchen Design** `id="kitchen"`
- Icon: 🍳
- Description: "The kitchen is the heart of the home, and we design it that way. Our kitchen specialists combine functional ergonomics with premium aesthetics — crafting fitted kitchens that work as hard as they look good. From the first sketch to the final handle fitting, our in-house joiners, tilers, and plumbers execute every element without subcontracting."
- Capabilities: Full fitted kitchen design & installation · Custom cabinetry & joinery · Stone, quartz & marble countertops · Kitchen island design · Appliance integration & ventilation · Sink, tap & waste installation · Splashback tiling

**4. Custom Furniture** `id="furniture"`
- Icon: 🪵
- Description: "When off-the-shelf simply does not fit your space or your standard, our master craftsmen build it from scratch. Every piece — from a live-edge dining table to a built-in wardrobe system — is designed to your exact dimensions, material preferences, and finish specifications. We fabricate in hardwood, engineered wood, and upholstered frames, combining carpentry and joinery excellence with considered design."
- Capabilities: Bespoke dining tables & chairs · Sofas & sectional upholstery · Built-in wardrobes & dressing rooms · TV units & entertainment walls · Beds & headboards · Office furniture & shelving · Decorative mirrors & frames

**5. Floor & Wall Finishes** `id="finishes"`
- Icon: 🪟
- Description: "The surfaces you walk on and live beside are experienced more intimately than any other part of your home. We install and finish floors and walls to a standard that stands the test of time — from the rich warmth of hardwood parquet to the cool precision of large-format porcelain. Our tiling team handles wet areas, feature walls, and entire floor plans with precision."
- Capabilities: Hardwood parquet flooring · Marble, porcelain & ceramic tiling · Large-format floor tiles · Decorative wall tiles & feature walls · Bathroom wall & floor tiling · Grout finishing & sealing · Floor screed & levelling

**6. Fittings & Fixtures** `id="fittings"`
- Icon: 🔧
- Description: "The final layer of a finished space is its fittings — the shower head, the sanitary ware, the switch plate, the pendant light. These details define how a space feels to live in every day. Our in-house plumbers and electricians install all fixtures and fittings with the same precision as every other stage, ensuring every connection is safe, code-compliant, and beautifully finished."
- Capabilities: Bathroom design & full fitout · Sanitary ware & vanity installation · Jacuzzi, bath & shower enclosures · Mirror cabinets & bathroom accessories · Electrical wiring & DB installation · Lighting design & fitting · Smart switches & home automation

**+ Consultancy & Project Management section** `id="consultancy"`
- Description: "Not every client needs us to build — some need us to think. Our consultancy service gives you access to our full design and technical expertise for advisory purposes: reviewing existing plans, recommending materials, troubleshooting contractor issues, or simply helping you understand what your project really requires. For those who need oversight without execution, our Project Management service places a dedicated Creations & Details PM on your site — coordinating your contractors, enforcing your timeline, and protecting your budget."

---

### PAGE 4: `portfolio.html` — Portfolio

**Meta title:** `Portfolio | Creations & Details Limited Projects`
**Meta description:** `Browse our portfolio of completed residential interior design and construction projects across Nairobi — Ruiru, Ruai, Katani and more.`

**Sections:**

#### Page Hero
- Eyebrow: "Our Work"
- H1: "Projects That *Speak.*"
- Subtitle: "A selection of completed projects — each one a testament to what happens when design meets disciplined execution."

#### Filter Bar (JS-powered)
Buttons: `All` · `Residential` · `Interior` · `Exterior` · `Kitchen` · `Furniture`
Each project card carries `data-category` attributes for JS filtering.

#### Project Cards Grid (3-column, masonry-style, pre-filled)

**Project 1 — Ruiru Residence**
- Category tags: `residential`, `exterior`, `interior`
- Client: Justin
- Location: Ruiru, Kiambu County
- Scope: Full exterior redesign + complete interior fitout
- Highlights: Contemporary stone-clad façade · Glass pergola shade structure · Hardwood parquet floors (herringbone pattern) · Custom live-edge dining table · Premium kitchen installation · Full bathroom fitout with jacuzzi · Custom furniture throughout
- Status: Completed

**Project 2 — Ruai Residence**
- Category tags: `residential`, `exterior`, `interior`
- Client: Frankline
- Location: Ruai, Nairobi
- Scope: Full construction from slab to handover
- Highlights: Structural build & masonry · External landscaping & gates · Modern living room with feature wall · Luxury kitchen with island · Hardwood staircase with steel balustrade · Full electrical & plumbing
- Status: Completed

**Project 3 — Katani Residence**
- Category tags: `residential`, `exterior`, `kitchen`, `interior`
- Client: Lyndah Nyangweso
- Location: Katani, Machakos County
- Scope: Full build + bespoke interior design
- Highlights: Two-storey exterior with stone-clad columns · Rustic-modern kitchen with solid wood cabinetry & marble island · Exposed beam ceiling with warm pendant lighting · Custom joinery throughout · Landscaped compound
- Status: Completed

**Project 4 — Interior Fitting Showcase**
- Category tags: `interior`, `kitchen`
- Client: Multiple
- Location: Nairobi
- Scope: Kitchen design & fitting works
- Highlights: Handleless grey fitted kitchens · Quartz countertops · Glass splashbacks · Integrated appliances · Custom pull-out storage
- Status: Completed

**Project 5 — Bathroom & Fixtures Showcase**
- Category tags: `interior`
- Client: Multiple
- Location: Nairobi
- Scope: Premium bathroom design & fitout
- Highlights: Double-basin vanities with marble tops · Corner jacuzzi installation · Frameless glass shower enclosures · Rain shower heads · Mirror cabinets
- Status: Completed

**Project 6 — Custom Furniture Collection**
- Category tags: `furniture`
- Client: Multiple
- Location: Nairobi
- Scope: Bespoke furniture design & fabrication
- Highlights: Live-edge dining tables · L-shaped sectional sofas · Built-in wardrobes · TV entertainment units · Accent chairs · Bar stools
- Status: Completed

#### Project Modal/Lightbox
When a project card is clicked, open a modal with:
- Project title & client
- Location & scope
- Highlights list
- "Discuss a Similar Project →" CTA linking to `contact.html`
- Close button (×)

#### CTA strip → `contact.html`

---

### PAGE 5: `team.html` — Our Team

**Meta title:** `Our Team | Creations & Details Limited`
**Meta description:** `Meet the in-house specialists at Creations & Details — interior designers, carpenters, electricians, plumbers, tilers, project managers and more.`

**Sections:**

#### Page Hero
- Eyebrow: "The People Behind the Work"
- H1: "One Team. *All Disciplines.*"
- Subtitle: "Unlike firms that subcontract, we maintain a complete in-house roster of certified specialists. Every trade, one company, zero compromises."

#### Leadership Introduction
- Nick (Principal Designer / Founder) — "With years of experience in residential and commercial interior design and construction, Nick founded Creations & Details on a simple belief: great spaces require a single, accountable team — not a fragmented network of subcontractors. His design sensibility blends contemporary aesthetics with functional living, and his technical knowledge ensures every concept is buildable to the highest standard."
*(Note: Update name, photo, and bio with actual details)*

#### Specialist Disciplines (8-card grid, same as single-page version but expanded)

Each card includes: number, discipline title, short role description, example responsibilities

1. **Interior Designers** — Space planning, 3D concept development, material and finish selection, client briefing and design development.
2. **Carpenters & Joiners** — Bespoke furniture fabrication, cabinetry, built-in wardrobes, parquet floor installation, timber feature works.
3. **Electricians** — Full electrical installation, DB board wiring, lighting design and fitting, smart home integrations, compliance certification.
4. **Plumbers** — Water supply and drainage installation, kitchen and bathroom plumbing, jacuzzi and shower fitting, pressure testing.
5. **Tilers & Finishers** — Floor and wall tiling, wet area waterproofing, large-format tile installation, marble and mosaic finishing.
6. **Structural & Masonry** — Walling, blockwork, reinforced concrete, foundations, external structures and boundary works.
7. **Project Managers** — Site coordination, subcontractor management, timeline and budget oversight, client communication and progress reporting.
8. **Landscapers** — Garden design, soil preparation, planting, paving and patio works, irrigation, outdoor lighting and boundary landscaping.

#### Why In-House Matters (3-point explainer)
1. **Quality Control** — "When every specialist is on our team, we set the standard. No finger-pointing, no handoff delays, no quality gaps between trades."
2. **Single Accountability** — "One contract, one team, one number to call. If something needs fixing, we fix it — no chasing external contractors."
3. **Seamless Coordination** — "Our PM coordinates all trades in real time. Electricians, plumbers and carpenters work in sequence, not conflict."

#### CTA → `contact.html`

---

### PAGE 6: `contact.html` — Contact & Get a Quote

**Meta title:** `Contact Us | Get a Quote — Creations & Details Limited`
**Meta description:** `Get in touch with Creations & Details Limited. Request a project quote, book a design consultation, or visit us in Nairobi. We respond within 24 hours.`

**Sections:**

#### Page Hero
- Eyebrow: "Let's Talk"
- H1: "Start Your *Project.*"
- Subtitle: "Tell us about your space and what you're envisioning. We'll respond within 24 hours."

#### Contact Split Layout (two columns)

**Left column — Contact Information:**
- Phone: `+254 700 000 000` *(PLACEHOLDER — replace with real)*
- Email: `info@creationsanddetails.co.ke` *(PLACEHOLDER — replace with real)*
- WhatsApp: `+254 700 000 000` with direct link `https://wa.me/254700000000`
- Office: Nairobi, Kenya *(update with actual address)*
- Hours: Monday–Saturday, 8:00 AM – 6:00 PM
- Response time badge: "We respond within 24 hours"

**Social links:** Instagram · Facebook · LinkedIn · TikTok

**Right column — Enquiry Form:**
Fields:
- First Name (required)
- Last Name
- Phone / WhatsApp (required)
- Email Address
- Service Required (dropdown — all 7 services + "Other")
- Project Location (text input)
- Approximate Budget (dropdown: "Under KES 500K / KES 500K–1M / KES 1M–3M / KES 3M–5M / Above KES 5M / Prefer not to say")
- Project Timeline (dropdown: "Immediately / Within 3 months / Within 6 months / Planning stage")
- Project Description (textarea — "Tell us about your space, vision, and any specific requirements...")
- How did you hear about us? (dropdown: "Referral / Social Media / Google / Previous Client / Other")
- Submit button: "Send Enquiry →"

**Form behaviour (`contact.js`):**
- Validate required fields on submit
- Show inline error messages beneath invalid fields
- On success: replace form with a success card — "Thank you, [Name]! We've received your enquiry and will be in touch within 24 hours."
- Log form data to `console` (placeholder until backend/email service is wired)

#### FAQ Section (accordion, JS-powered open/close)
1. **How long does a typical project take?** — "Timeline varies significantly by scope. A kitchen fitout might take 3–6 weeks. A full residential build can take 6–18 months. We provide a detailed timeline in our project proposal, broken down by phase."
2. **Do you work outside Nairobi?** — "Yes. We have completed projects in Kiambu, Machakos, and other counties. Travel and logistics are factored into project quotations for sites beyond Nairobi."
3. **Do you provide 3D designs before construction?** — "Yes. Our design process includes concept mood boards and 3D space plans for client approval before any construction work begins."
4. **Can I supply my own materials?** — "In some cases, yes. We're happy to discuss hybrid arrangements. However, for our full design-and-build projects, we source and quality-control all materials to ensure consistent results."
5. **What is your payment structure?** — "We typically work on a milestone-based payment schedule — a deposit to commence, phased payments aligned to construction milestones, and a final payment on handover. Full details are provided in your quotation."
6. **Do you offer post-project support?** — "Yes. We stand behind our work. Any snags identified post-handover are addressed at no additional cost within our agreed defects liability period."

---

## 5. COPY BLOCKS (Pre-filled text for About and Home)

### About Us — Intro paragraphs
> *"Creations & Details Limited is a premier full-service design and construction firm based in Nairobi. Led by seasoned professionals with deep roots in both interior design and construction, we bring together architecture, design, and hands-on building expertise under one roof — eliminating the complexity of managing multiple contractors and the quality gaps that come with fragmented teams."*

> *"From the first conversation to the day we hand over your keys, our in-house team of specialists handles every discipline with precision. We do not subcontract our core trades. Our electricians, plumbers, carpenters, tilers, and designers are all on our team — which means tighter quality control, faster problem-solving, and a single point of accountability for your entire project."*

> *"Whether you are building a dream family home from slab to finish, renovating a tired interior into something extraordinary, or seeking expert consultancy before you commit to a design direction — Creations & Details delivers results that endure."*

### Testimonials (pre-filled)
**Justin M. — Ruiru Residence:**
> *"The team at Creations & Details transformed our house into something we couldn't have imagined. Every detail was executed flawlessly — the parquet flooring, the kitchen, the exterior. Pure excellence."*

**Frankline K. — Ruai Residence:**
> *"What impressed me most was that they managed everything — I didn't have to chase a single contractor. One call, one team, and they delivered my family home on time and within budget."*

**Lyndah Nyangweso — Katani Residence:**
> *"The kitchen they designed for me is the envy of every guest. The rustic wood cabinets, marble island, and pendant lighting — it looks like something from an architecture magazine. Highly recommended."*

---

## 6. CSS — `global.css` Requirements

Extract and consolidate all shared styles:

```css
/* Required CSS custom properties (all pages inherit these) */
:root {
  --navy: #0A1628;
  --navy-mid: #0F2040;
  --navy-light: #162B52;
  --blue: #1E5FBF;
  --blue-bright: #2B7FFF;
  --blue-glow: #4B9FFF;
  --amber: #E8A020;
  --amber-light: #F5C048;
  --off-white: #F8F6F2;
  --gray-100: #F0EDE8;
  --gray-300: #C8C4BC;
  --gray-500: #888076;
  --gray-700: #3C3830;
  --text-dark: #0A0A0A;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Barlow', sans-serif;
  --font-ui: 'Barlow Condensed', sans-serif;
}
```

Include in `global.css`: CSS reset, typography base, nav styles (desktop + mobile), footer styles, WhatsApp button, `.btn-primary`, `.btn-outline`, `.section-label`, `.eyebrow-line`, `.eyebrow-text`, page hero inner styles, scrollbar styling.

---

## 7. JS — `global.js` Requirements

```js
// 1. Nav scroll: darken background after 80px scroll
// 2. Mobile hamburger: toggle .open class on #mobileMenu and body
// 3. Active nav link: compare current page filename to nav href, add .active class
// 4. Smooth scroll: intercept all same-page anchor links
// 5. WhatsApp button: already in HTML, no JS needed
```

---

## 8. `portfolio.js` Requirements

```js
// 1. Filter tabs: on click, filter project cards by data-category attribute
//    - 'All' shows all cards
//    - animate cards in/out with opacity transition
// 2. Project modal: on card click, populate modal with project data
//    - data stored as JS objects (no external API)
//    - open modal, trap focus, close on × or backdrop click or Escape key
```

---

## 9. RESPONSIVE BREAKPOINTS

Apply throughout all pages:

| Breakpoint | Behaviour |
|------------|-----------|
| `> 1024px` | Full desktop layout (as specified above) |
| `768px–1024px` | Tablet: single-column hero, 2-col grids, nav stays horizontal |
| `< 768px` | Mobile: hamburger nav, all grids → single column, hero text smaller, marquee still runs |

Mobile nav: hamburger button (☰) reveals full-screen overlay with nav links vertically stacked, close button (×), amber background, navy text.

---

## 10. DEPLOYMENT CONFIG

### `vercel.json`
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### `.gitignore`
```
.DS_Store
Thumbs.db
*.log
node_modules/
.env
```

### `README.md`
Include:
- Project name and description
- Folder structure overview
- How to run locally (just open `index.html` in browser — no build step required)
- How to deploy to Vercel (drag-and-drop or `vercel --prod`)
- Placeholder replacement checklist (phone, email, social handles, real photos)
- Brand colour reference

---

## 11. IMPLEMENTATION ORDER FOR COPILOT

Execute in this sequence to avoid dependency issues:

1. Create `/assets/css/global.css` — extract all shared CSS from the existing single HTML file
2. Create `/assets/js/global.js` — extract nav, scroll, and shared JS
3. Create `index.html` — rebuild the home page linking to global assets, keeping all home-specific sections
4. Create `/assets/css/home.css` and `/assets/js/home.js` — move home-specific styles and JS
5. Create `about.html` + `assets/css/about.css` — full about page with all sections
6. Create `services.html` + `assets/css/services.css` — all 7 service detail sections with anchors
7. Create `portfolio.html` + `assets/css/portfolio.css` + `assets/js/portfolio.js` — with filter and modal
8. Create `team.html` + `assets/css/team.css` — team page
9. Create `contact.html` + `assets/css/contact.css` + `assets/js/contact.js` — full form + FAQ accordion
10. Create `vercel.json`, `.gitignore`, `README.md`
11. Delete the original `creations and details.html` (contents are now distributed across pages)
12. Create `/assets/images/projects/` placeholder folders with a `README.md` inside each: "Place [project name] photos here. Recommended: 1200×800px JPG, under 400KB."

---

## 12. QUALITY CHECKLIST (verify before committing)

- [ ] Every page has correct `<title>` and `<meta name="description">`
- [ ] Nav active state correct on each page
- [ ] All internal links point to correct filenames (no broken hrefs)
- [ ] All `PLACEHOLDER` items are flagged with a `<!-- PLACEHOLDER: [instruction] -->` HTML comment
- [ ] WhatsApp button and footer appear on every page
- [ ] Forms have `required` attributes on mandatory fields
- [ ] Mobile hamburger menu works on all pages
- [ ] No hardcoded inline styles that duplicate `global.css` variables
- [ ] `vercel.json` and `.gitignore` present at root
- [ ] `README.md` has the placeholder replacement checklist

---

*End of Copilot Prompt — `COPILOT_PROMPT_creations-details.md`*
*Repo: `MonarCat/creations-details` | Brand: Creations & Details Limited | Nairobi, Kenya*
