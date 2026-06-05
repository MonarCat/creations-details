(() => {
  // ── Hero slideshow ──────────────────────────────────────────────
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0, timer;

  const goTo = (n) => {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  };

  const startAuto = () => { timer = setInterval(() => goTo(current + 1), 5000); };
  const stopAuto = () => clearInterval(timer);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto(); goTo(+dot.dataset.slide); startAuto();
    });
  });

  startAuto();

  // ── Hero text reveal ────────────────────────────────────────────
  const hero = document.querySelector('.home-hero');
  if (hero) {
    setTimeout(() => hero.classList.add('hero-loaded'), 200);
  }

  // ── Counter animation ───────────────────────────────────────────
  const counters = document.querySelectorAll('.count-up');
  if (counters.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.target.dataset.done) return;
        entry.target.dataset.done = '1';
        const target = +entry.target.dataset.target;
        const step = Math.ceil(target / 55);
        let n = 0;
        const t = setInterval(() => {
          n = Math.min(n + step, target);
          entry.target.textContent = n;
          if (n >= target) clearInterval(t);
        }, 22);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }
})();
