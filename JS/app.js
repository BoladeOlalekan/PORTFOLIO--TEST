const open = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const nav = document.querySelector('nav');

open.addEventListener('click', ()=> {
    alert('Menu opened');
    nav.classList.add('show-nav');
});

closeBtn.addEventListener('click', ()=> {
    alert('Menu closed');
    nav.classList.remove('show-nav');
});