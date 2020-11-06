let proximo = document.getElementById('proximo');
let imgs = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3')
];

proximo.addEventListener('click', () => {

    imgs.reduce((valorAcumulador, array) => {
        let teste = -100;
        valorAcumulador += array.style.transform += `translateX(${teste}%)`, array.style.transition = '0.5s';
    }, 0);

});