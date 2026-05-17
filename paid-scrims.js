// =======================================
// ORG SAMURAI / QbitU GAMING
// PAID SCRIMS PAGE
// PREMIUM INTERACTION SYSTEM
// =======================================

window.addEventListener(
  "DOMContentLoaded",
  ()=>{

    revealAnimation();
    hoverEffects();
    floatingOrbs();
    premiumParallax();
    formSubmission();

  }
);

// =======================================
// FORM TOGGLE
// =======================================

function showForm(game){

  const bgmiForm =
  document.getElementById(
    "bgmi-form"
  );

  const valoForm =
  document.getElementById(
    "valorant-form"
  );

  const buttons =
  document.querySelectorAll(
    ".game-btn"
  );

  buttons.forEach(btn=>{
    btn.classList.remove(
      "active"
    );
  });

  if(game === "bgmi"){

    bgmiForm.classList.add(
      "active-form"
    );

    valoForm.classList.remove(
      "active-form"
    );

    buttons[0].classList.add(
      "active"
    );

  } else {

    valoForm.classList.add(
      "active-form"
    );

    bgmiForm.classList.remove(
      "active-form"
    );

    buttons[1].classList.add(
      "active"
    );

  }

}

// =======================================
// PREMIUM REVEAL
// =======================================

function revealAnimation(){

  const elements =
  document.querySelectorAll(`
    .glass-card,
    .player-box,
    .hero-box
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
      threshold:.15
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

      observer.observe(
        element
      );

    }
  );

}

// =======================================
// HOVER EFFECTS
// =======================================

function hoverEffects(){

  const cards =
  document.querySelectorAll(`
    .player-box,
    .hero-box
  `);

  cards.forEach(card=>{

    card.addEventListener(
      "mouseenter",
      ()=>{

        card.style.transform =
        `
        translateY(-10px)
        scale(1.02)
        `;

        card.style.boxShadow =
        `
        0 0 35px
        rgba(140,167,123,.16)
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
        none
        `;
      }
    );

  });

}

// =======================================
// PREMIUM PARALLAX
// =======================================

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

        if(!card.matches(
          ":hover"
        )){

          const moveX =
          x * 6;

          const moveY =
          y * 6;

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

// =======================================
// FLOATING ORBS
// =======================================

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
      ${Math.sin(position)
      * 20}px
    )
    `;

    orb2.style.transform =
    `
    translateY(
      ${Math.cos(position)
      * 20}px
    )
    `;

    requestAnimationFrame(
      animate
    );

  }

  animate();

}

// =======================================
// FORM SUBMIT
// =======================================

function formSubmission(){

  const forms =
  document.querySelectorAll(
    ".scrim-form"
  );

  forms.forEach(form=>{

    form.addEventListener(
      "submit",
      (e)=>{

        e.preventDefault();

        alert(
          "Registration submitted successfully. QbitU Gaming will contact your team shortly."
        );

        form.reset();

      }
    );

  });

}