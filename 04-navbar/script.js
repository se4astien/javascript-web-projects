const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  menu.classList.toggle('show-links');
});
