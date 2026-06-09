const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mousemove',(e)=>{

const x = e.offsetX;
const y = e.offsetY;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,0.15),
rgba(255,255,255,0.02))`;

});

card.addEventListener('mouseleave',()=>{

card.style.background='transparent';

});

});