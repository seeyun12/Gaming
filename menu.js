const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu');


hamburger.addEventListener('click', () =>{
    menu.classList.toggle("open");
});
