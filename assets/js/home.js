document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('hero-loaded');

  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length) {
    const speed = 200;

    const animateCounter = (counter) => {
      const target = Number(counter.getAttribute('data-target') || 0);
      const increment = target / speed;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        counter.textContent = String(Math.floor(current));
        if (current >= target) {
          counter.textContent = String(target);
          clearInterval(timer);
        }
      }, 10);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  const heroImages = [
    '/assets/images/portfolio/katani_exterior_01_completed_front.jpg',
    '/assets/images/portfolio/ruiru_living_01_parquet_floor_wide.jpg',
    '/assets/images/portfolio/ruai_interior_02_living_room.jpg'
  ];

  const hero = document.querySelector('.home-hero');
  if (!hero) return;

  let heroIndex = 0;
  const setHeroImage = (index) => {
    hero.style.backgroundImage = `
      linear-gradient(135deg, rgba(13, 27, 62, 0.72) 0%, rgba(30, 58, 138, 0.52) 100%),
      url('${heroImages[index]}')
    `;
  };

  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  setHeroImage(heroIndex);

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    setHeroImage(heroIndex);
  }, 6000);
});
