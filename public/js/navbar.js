// Navbar Menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#navbar-links');

burgerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active');
});