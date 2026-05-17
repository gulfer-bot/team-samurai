// ======================================
// ORG SAMURAI HIGHLIGHTS PAGE
// PREMIUM MOTION SYSTEM
// ======================================

window.addEventListener(
  "DOMContentLoaded",
  () => {

    revealAnimation();
    hoverEffects();
    floatingOrbs();
    premiumParallax();

  }
);

// ======================================
// REVEAL ANIMATION
// ======================================

function revealAnimation(){

  const elements =
  document.querySelectorAll(`
    .glass-card,
    .clip-card,
    .stat-box,
    .journey-section
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

  elements.forEach(
    (element,index)=>{

      element.style.opacity =
      "0";

      element.style.transform =
      "translateY(60px)";

      element.style.transition =
      `all .9s ease ${index * .06}s`;

      observer.observe(element);

    }
  );

}

// ======================================
// PREMIUM HOVER EFFECTS
// ======================================

function hoverEffects(){

  const cards =
  document.querySelectorAll(`
    .clip-card,
    .stat-box
  `);

  cards.forEach(card=>{

    card.addEventListener(
      "mouseenter",
      ()=>{

        card.style.transform =
        `
        translateY(-15px)
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

// ======================================
// PREMIUM PARALLAX
// ======================================

function premiumParallax(){

  const cards =
  document.querySelectorAll(
    ".glass-card"
  );

  document.addEventListener(
    "mousemove",
    (e)=>{

      const x =
      (
        e.clientX /
        window.innerWidth
        - .5
      );

      const y =
      (
        e.clientY /
        window.innerHeight
        - .5
      );

      cards.forEach(card=>{

        if(!card.matches(":hover")){

          const moveX =
          x * 8;

          const moveY =
          y * 8;

          card.style.transform =
          `
          translate(
            ${moveX}px,
            ${moveY}px
          )
          `;
        }

      });

    }
  );

}

// ======================================
// FLOATING ORBS
// ======================================

function floatingOrbs(){

  const orb1 =
  document.querySelector(
    ".orb-1"
  );

  const orb2 =
  document.querySelector(
    ".orb-2"
  );

  let position = 0;

  function animate(){

    position += 0.004;

    orb1.style.transform =
    `
    translateY(
      ${Math.sin(position) * 20}px
    )
    `;

    orb2.style.transform =
    `
    translateY(
      ${Math.cos(position) * 20}px
    )
    `;

    requestAnimationFrame(
      animate
    );
  }

  animate();

}