// ===============================
// ORG SAMURAI - PREMIUM NEWSROOM
// ===============================

window.addEventListener(
  "DOMContentLoaded",
  ()=>{

    revealNews();
    premiumMouseGlow();
    smoothParallax();

  }
);

// ===============================
// REVEAL ON SCROLL
// ===============================

function revealNews(){

  const rows =
  document.querySelectorAll(
    ".news-row"
  );

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

  rows.forEach(
    (row,index)=>{

      row.style.opacity =
      "0";

      row.style.transform =
      "translateY(70px)";

      row.style.transition =
      `all .95s ease ${index * .08}s`;

      observer.observe(row);

    }
  );

}

// ===============================
// PREMIUM GLOW EFFECT
// ===============================

function premiumMouseGlow(){

  const images =
  document.querySelectorAll(
    ".news-image"
  );

  images.forEach(image=>{

    image.addEventListener(
      "mousemove",
      (e)=>{

        const rect =
        image.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        image.style.background =
        `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(140,167,123,.12),
          rgba(255,255,255,.03)
        )
        `;
      }
    );

    image.addEventListener(
      "mouseleave",
      ()=>{

        image.style.background =
        "transparent";
      }
    );

  });

}

// ===============================
// SUBTLE PARALLAX
// ===============================

function smoothParallax(){

  const images =
  document.querySelectorAll(
    ".news-image"
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

      images.forEach(image=>{

        if(image.matches(":hover"))
          return;

        image.style.transform =
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
