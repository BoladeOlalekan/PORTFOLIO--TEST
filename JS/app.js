const openBtn = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const navBar = document.querySelector('nav');
const home = document.querySelector('.top-li');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const certification = document.querySelector('.certification');
const connect = document.querySelector('.connect');

openBtn.addEventListener('click' , () => {
    navBar.style.transform = "translateX(0%)";
})

closeBtn.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

home.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

skills.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

experience.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

education.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

certification.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})

connect.addEventListener('click' , () => {
    navBar.style.transform = 'translateX(100%)';
})