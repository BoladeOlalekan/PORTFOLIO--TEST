const open = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const navList = document.getElementById('nav-list');
const body = document.querySelector('body');

open.addEventListener('click', () => {
    alert('Menu opened');
    navList.classList.add('show-nav');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('show-nav');
});