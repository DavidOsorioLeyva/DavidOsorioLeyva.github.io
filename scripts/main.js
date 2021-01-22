const ipad = window.matchMedia('screen and (max-width: 916px)');
ipad.addEventListener('change', validation);

const menu = document.querySelector('.menu-container');
const burgerButton = document.querySelector('.burger-button');

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', showHide);
    } else {
        burgerButton.removeEventListener('click', showHide);
    }
}

validation(ipad);

function showHide() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}
