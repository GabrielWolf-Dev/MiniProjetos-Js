let abrir = document.getElementById('iconOpen');
let nav_Menu = document.getElementById('nav-Menu');
let fechar = document.getElementById('iconClose'); 

abrir.addEventListener('click', () => {
    nav_Menu.style.display = 'block';
})

iconClose.addEventListener('click', () => {
    nav_Menu.style.display = 'none';
});
