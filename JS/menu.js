// Javascript for working of Hamburger toggle
let menuToggle = document.querySelector('.menuToggle');
let nav = document.querySelector('nav');
menuToggle.onclick = function () {
    nav.classList.toggle('active');
}