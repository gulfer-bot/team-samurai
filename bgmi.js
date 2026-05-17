// =============================
// ORG SAMURAI BGMI JS
// Premium Motion System V2
// =============================

window.addEventListener(
  'DOMContentLoaded',
  () => {

    revealAnimation();
    premiumHover();
    premiumParallax();
    clickFeedback();
    floatingOrbs();

  }
);

// =============================
// REVEAL ON SCROLL
// =============================

function revealAnimation() {

  const elements =
  document.querySelectorAll(
    '.glass-card, .player-card, .manager-card'
  );

  const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.style.opacity =
            '1';

            entry.target.style.transform =
            'translateY(0px)';

            observer.unobserve(
              entry.target
            );
          }

        }
      );

    },

    {
      threshold:0.12
    }

  );

  elements.forEach(
    (element,index) => {

      element.style.opacity =
      '0';

      element.style.transform =
      'translateY(60px)';

      element.style.transition =
      `all .9s cubic-bezier(.16,1,.3,1) ${index * 0.08}s`;

      observer.observe(
        element
      );

    }
  );

}

// =============================
// PREMIUM CARD HOVER
// =============================

function premiumHover() {

  const cards =
  document.querySelectorAll(
    '.player-card'
  );

  cards.forEach(
    (card) => {

      card.addEventListener(
        'mouseenter',
        () => {

          card.style.transition =
          'transform .45s ease, box-shadow .45s ease';

          card.style.transform =
          'translateY(-12px) scale(1.02)';

          card.style.boxShadow =
          '0 30px 80px rgba(140,167,123,.18)';

        }
      );

      card.addEventListener(
        'mouseleave',
        () => {

          card.style.transform =
          'translateY(0px) scale(1)';

          card.style.boxShadow =
          '0 25px 80px rgba(65,85,64,.10)';

        }
      );

    }
  );

}

// =============================
// PREMIUM PARALLAX
// (subtle, smooth)
// =============================

function premiumParallax() {

  const cards =
  document.querySelectorAll(
    '.player-card'
  );

  document.addEventListener(
    'mousemove',
    (e) => {

      const x =
      (e.clientX / window.innerWidth - 0.5) * 8;

      const y =
      (e.clientY / window.innerHeight - 0.5) * 8;

      cards.forEach(
        (card) => {

          if (
            !card.matches(':hover')
          ) {

            card.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;
          }

        }
      );

    }
  );

}

// =============================
// PREMIUM CLICK FEEDBACK
// =============================

function clickFeedback() {

  const clickable =
  document.querySelectorAll(
    '.player-card, .manager-card'
  );

  clickable.forEach(
    (card) => {

      card.addEventListener(
        'click',
        () => {

          card.style.transform =
          'scale(.97)';

          setTimeout(
            () => {

              card.style.transform =
              'scale(1)';

            },
            120
          );

        }
      );

    }
  );

}

// =============================
// FLOATING ORBS
// =============================

function floatingOrbs() {

  const orbs =
  document.querySelectorAll(
    '.orb'
  );

  window.addEventListener(
    'mousemove',
    (e) => {

      const moveX =
      (e.clientX / window.innerWidth - 0.5) * 25;

      const moveY =
      (e.clientY / window.innerHeight - 0.5) * 25;

      orbs.forEach(
        (orb,index) => {

          const speed =
          (index + 1) * 0.25;

          orb.style.transform =
          `translate(
            ${moveX * speed}px,
            ${moveY * speed}px
          )`;

        }
      );

    }
  );

}

// =============================
// SILKY SCROLL SHADOW
// =============================

window.addEventListener(
  'scroll',
  () => {

    const scrollY =
    window.scrollY;

    const hero =
    document.querySelector(
      '.bgmi-hero'
    );

    if(hero){

      hero.style.transform =
      `translateY(${scrollY * -0.03}px)`;

    }

  }
);