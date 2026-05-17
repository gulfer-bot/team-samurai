// =============================
// ORG SAMURAI HOME JS
// Premium Motion + Cinematic Effects
// =============================

window.addEventListener('DOMContentLoaded', () => {
  initializeQuotes();
  initializeRevealAnimations();
  initializeParallax();
  initializeLuxuryHover();
  initializeMouseGlow();
});

// =============================
// QUOTE ROTATION SYSTEM
// =============================
function initializeQuotes() {
  const quotes = document.querySelectorAll('.quote');

  let current = 0;

  if (!quotes.length) return;

  setInterval(() => {
    quotes[current].classList.remove('active');

    current++;

    if (current >= quotes.length) {
      current = 0;
    }

    quotes[current].classList.add('active');
  }, 3500);
}

// =============================
// REVEAL ANIMATION SYSTEM
// =============================
function initializeRevealAnimations() {
  const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-fade, .reveal-up-delay, .reveal-up-delay-2'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

// =============================
// PARALLAX EFFECT
// =============================
function initializeParallax() {
  const heroLogo = document.querySelector('.hero-logo');
  const ownerCards = document.querySelectorAll('.owner-card');

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (heroLogo) {
      heroLogo.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    }

    ownerCards.forEach((card, index) => {
      const intensity = index % 2 === 0 ? 12 : -12;

      card.style.transform = `translateY(${y * intensity}px) rotate(${x * 2}deg)`;
    });
  });
}

// =============================
// LUXURY CARD HOVER EFFECTS
// =============================
function initializeLuxuryHover() {
  const cards = document.querySelectorAll('.luxury-card, .glass-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all .35s ease';
      card.style.transform = 'translateY(-12px) scale(1.02)';
      card.style.boxShadow =
        '0 0 45px rgba(140,167,123,.22)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0px) scale(1)';
      card.style.boxShadow =
        '0 20px 80px rgba(0,0,0,.35)';
    });
  });
}

// =============================
// FOLLOW CURSOR GLOW EFFECT
// =============================
function initializeMouseGlow() {
  const glow = document.createElement('div');

  glow.classList.add('cursor-glow');

  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

// =============================
// SMOOTH PAGE LOADER
// =============================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// =============================
// BUTTON MICRO INTERACTION
// =============================
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = '.25s ease';
    link.style.transform = 'translateY(-2px)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0px)';
  });
});