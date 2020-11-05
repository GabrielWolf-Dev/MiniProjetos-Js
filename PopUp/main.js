let boxPopup = document.getElementById('boxPopup');
let btnPopup = document.getElementById('btnPop-up');
let body = document.getElementById('body');

function abrirPopUp() {

    boxPopup.style.display = 'block';
    btnPopup.style.display = 'none';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

}

function fecharPopUp() {

    btnPopup.style.display = 'block';
    boxPopup.style.display = 'none';
    body.style.backgroundColor = 'white';

}
