let openMenu = document.getElementById('iconOpen');
let nav_Menu = document.querySelector('#nav-Menu');
let closeMenu = document.getElementById('iconClose'); 

nav_Menu.classList.add('disable');

openMenu.addEventListener('click', () => {
    nav_Menu.classList.add('enable');
    nav_Menu.classList.remove('disable');
    nav_Menu.style.animation = 'openAnimate 1s 1';
});

let disableMenu = () => {
    nav_Menu.classList.remove('enable');
    nav_Menu.classList.add('disable');
};

closeMenu.addEventListener('click', () => {
    nav_Menu.style.animation = 'closeAnimate 1s 1';
    setTimeout(disableMenu, 500);
});
