function calculoIMC() {

    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultadoIMC');

    let imc = peso / (altura * altura);

    resultado.innerHTML = ` <p> O seu IMC é ${imc.toFixed(2)} </p> `;

};