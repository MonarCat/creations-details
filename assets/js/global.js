(() => {
  const nav = document.getElementById('main-nav');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuButton = document.querySelector('.nav-hamburger');
  const closeButton = document.querySelector('.mobile-close');

  const setScrolled = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 80);
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled);

  const toggleMenu = (open) => {
    if (!mobileMenu) return;
    const shouldOpen = typeof open === 'boolean' ? open : !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', shouldOpen);
    document.body.classList.toggle('menu-open', shouldOpen);
  };

  menuButton?.addEventListener('click', () => toggleMenu(true));
  closeButton?.addEventListener('click', () => toggleMenu(false));
  mobileMenu?.addEventListener('click', (event) => {
    if (event.target === mobileMenu) toggleMenu(false);
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const navAnchors = document.querySelectorAll('.nav-links a, .mobile-links a');
  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute('href')?.toLowerCase();
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const file = href.split('#')[0] || 'index.html';
    if (file === currentPage) anchor.classList.add('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href');
      if (!target || target === '#') return;
      const element = document.querySelector(target);
      if (!element) return;
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
