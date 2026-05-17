// =============================
// ABOUT PAGE MOTION SYSTEM
// =============================

window.addEventListener('DOMContentLoaded', () => {
  revealAnimation();
  parallaxCards();
  luxuryHover();
});

// =============================
// REVEAL ON SCROLL
// =============================
function revealAnimation() {
  const cards = document.querySelectorAll(
    '.glass-card, .journey-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0px)';
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all .9s ease';

    observer.observe(card);
  });
}

// =============================
// PARALLAX MOVEMENT
// =============================
function parallaxCards() {
  const cards = document.querySelectorAll('.journey-card');

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
      const strength = index % 2 === 0 ? 8 : -8;

      card.style.transform = `translateY(${y * strength}px)`;
    });
  });
}

// =============================
// LUXURY HOVER EFFECT
// =============================
function luxuryHover() {
  const cards = document.querySelectorAll(
    '.journey-card, .glass-card'
  );

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.02)';
      card.style.boxShadow =
        '0 0 40px rgba(137,166,125,.20)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0px) scale(1)';
      card.style.boxShadow =
        '0 20px 80px rgba(0,0,0,.35)';
    });
  });
}