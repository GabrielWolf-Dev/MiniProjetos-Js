function calculoIMC() {

    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultadoIMC');

    let imc = peso / (altura * altura);

    if(imc < 18.5) {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está abaixo do peso. </p>`;
    }else if (imc >= 18.6 && imc <= 24.9) {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está no <span>peso ideal</span>. </p>`;
    }else if(imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está <span>levemente acima do peso</span>. </p>`;
    }else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 1.</span></p>`;
    }else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 2.</span></p>`;
    }else {
        resultado.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 3.</span></p>`;
    }

};