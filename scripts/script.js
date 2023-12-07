
const menuBtn = document.querySelector('.mobile-nav__menu');
const menuNav = document.querySelector('.mobile-nav');

function menuDropDown(event) {
    menuNav.classList.toggle('mobile-nav--display');
}
menuBtn.addEventListener('click', menuDropDown);