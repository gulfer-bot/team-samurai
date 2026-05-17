// =====================================
// ORG SAMURAI - NEWS PAGE
// PREMIUM NEWS EXPERIENCE
// =====================================

window.addEventListener(
  "DOMContentLoaded",
  ()=>{

    revealNewsCards();
    hoverEffects();
    smoothParallax();
    newsGlowEffect();

  }
);

// =====================================
// REVEAL ANIMATION
// =====================================

function revealNewsCards(){

  const cards =
  document.querySelectorAll(`
    .news-card,
    .featured-news,
    .glass-card
  `);

  const observer =
  new IntersectionObserver(
    (entries)=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting){

          entry.target.style.opacity =
          "1";

          entry.target.style.transform =
          "translateY(0px)";
        }

      });

    },
    {
      threshold:0.15
    }
  );

  cards.forEach(
    (card,index)=>{

      card.style.opacity =
      "0";

      card.style.transform =
      "translateY(60px)";

      card.style.transition =
      `all .9s ease ${index * .06}s`;

      observer.observe(
        card
      );

    }
  );

}

// =====================================
// HOVER EFFECTS
// =====================================

function hoverEffects(){

  const cards =
  document.querySelectorAll(
    ".news-card"
  );

  cards.forEach(card=>{

    card.addEventListener(
      "mouseenter",
      ()=>{

        card.style.transform =
        `
        translateY(-12px)
        scale(1.02)
        `;

        card.style.boxShadow =
        `
        0 0 45px
        rgba(140,167,123,.18)
        `;
      }
    );

    card.addEventListener(
      "mouseleave",
      ()=>{

        card.style.transform =
        `
        translateY(0px)
        scale(1)
        `;

        card.style.boxShadow =
        `
        0 20px 80px
        rgba(0,0,0,.35)
        `;
      }
    );

  });

}

// =====================================
// PARALLAX EFFECT
// =====================================

function smoothParallax(){

  const cards =
  document.querySelectorAll(
    ".news-card"
  );

  window.addEventListener(
    "mousemove",
    (e)=>{

      const x =
      (
        e.clientX /
        window.innerWidth
        - .5
      ) * 6;

      const y =
      (
        e.clientY /
        window.innerHeight
        - .5
      ) * 6;

      cards.forEach(card=>{

        // Don't override hover
        if(card.matches(":hover"))
          return;

        card.style.transform =
        `
        translate3d(
          ${x}px,
          ${y}px,
          0
        )
        `;
      });

    }
  );

}

// =====================================
// PREMIUM GLOW
// =====================================

function newsGlowEffect(){

  const cards =
  document.querySelectorAll(
    ".news-card"
  );

  cards.forEach(card=>{

    card.addEventListener(
      "mousemove",
      (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(140,167,123,.12),
          rgba(255,255,255,.03)
        )
        `;
      }
    );

    card.addEventListener(
      "mouseleave",
      ()=>{

        card.style.background =
        `
        rgba(245,238,224,.06)
        `;
      }
    );

  });

}