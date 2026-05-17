document.addEventListener(
'DOMContentLoaded',
() => {

 const reveal =
 document.querySelectorAll(
 '.detail-card,.stat-card,.clips-card,.social-card'
 );

 const observer =
 new IntersectionObserver(

 entries => {

  entries.forEach(
   entry => {

    if(
      entry.isIntersecting
    ){

      entry.target.style.opacity='1';

      entry.target.style.transform=
      'translateY(0px)';
    }

   }
  );

 },

 {
  threshold:.15
 });

 reveal.forEach(el => {

  el.style.opacity='0';

  el.style.transform=
  'translateY(40px)';

  el.style.transition=
  '.8s ease';

  observer.observe(el);

 });

 const image =
 document.querySelector(
 '.main-player-image'
 );

 if(image){

  image.addEventListener(
   'mousemove',
   () => {

    image.style.transform=
    'scale(1.02)';
   }
  );

  image.addEventListener(
   'mouseleave',
   () => {

    image.style.transform=
    'scale(1)';
   }
  );

 }

});