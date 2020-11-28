function calculation() {

    let weight = Number(document.querySelector('#weight').value);
    let height = Number(document.querySelector('#height').value);
    let result = document.querySelector('#resultIMC');

    if(weight === 0 || height === 0) {

        alert("Por favor, insira os dados de acordo com o que é solicitado.");

    }else {

        let imc = weight / (height * height);

        if(imc < 18.5) {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está abaixo do peso. </p>`;
        }else if (imc >= 18.6 && imc <= 24.9) {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está no <span>peso ideal</span>. </p>`;
        }else if(imc >= 25 && imc <= 29.9) {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está <span>levemente acima do peso</span>. </p>`;
        }else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 1.</span></p>`;
        }else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 2.</span></p>`;
        }else {
            result.innerHTML = `<p> O seu IMC é ${imc.toFixed(2)}. </p> <p> Sua classificação: Você está na <span>Obesidade grau 3.</span></p>`;
        }

    }
   
};