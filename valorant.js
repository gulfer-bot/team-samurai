window.addEventListener('DOMContentLoaded',()=>{
 const cards=document.querySelectorAll('.glass-card,.player-card,.tournament-card');
 const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0px)';}})
 },{threshold:.15});
 cards.forEach(card=>{card.style.opacity='0';card.style.transform='translateY(50px)';card.style.transition='all .8s ease';observer.observe(card);
 card.addEventListener('mouseenter',()=>card.style.transform='translateY(-12px) scale(1.02)');
 card.addEventListener('mouseleave',()=>card.style.transform='translateY(0px) scale(1)');
 });
});