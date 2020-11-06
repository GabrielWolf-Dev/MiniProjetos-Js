let totalSlides = document.querySelectorAll('.slider-item').length;
let slideAtual = 0;

document.querySelector('.sliderWidth').style.width = `calc(100vw * ${totalSlides})`;

function proximo() {
    slideAtual++;
    if(slideAtual > (totalSlides - 1)) {
        slideAtual= 0;
    }
    atualizarSlide();
}

function anterior() {
    slideAtual--;
    if(slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }
    atualizarSlide();
}

function atualizarSlide() {
    let sliderW = document.querySelector('.slider-item').clientWidth;
    let novaMargin = (slideAtual * sliderW); // Ou insira - document.body.clientWidth
    document.querySelector('.sliderWidth').style.marginLeft = `-${novaMargin}px`;
}

setInterval(proximo, 4000);