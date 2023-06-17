// responsive menu 
const links = document.querySelector('.nav-links');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', function () {
  links.style.display = 'flex';
  links.style.top = '0';
});

closeMenu.addEventListener('click', function () {
  links.style.top = '-100%';
});