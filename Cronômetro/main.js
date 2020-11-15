let min = document.getElementById('min');
let sec = document.getElementById('sec');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let contador = document.querySelector('.contador');


btn.addEventListener('click', () => {

    let minAtual = Number(min.value);
    let secAtual = Number(sec.value);

    if(minAtual === 0 && secAtual === 0) {
        alert('Por favor, insira um tempo para começar a contagem');
    }else {

        let  interval = setInterval( () => {

            secAtual--;
            if(secAtual <= 0) {
                if(minAtual > 0) {
                    minAtual--;
                    secAtual = 59;
                }else {
                    clearInterval(interval);
                    document.querySelector('.sound').play();
                    result.innerHTML = `<p style="color: blue; font-weight: bold;">Acabou o tempo!</p>`;
                }
            }

            contador.innerHTML = `<p style="color:red;">${minAtual}:${secAtual}</p>`;
        }, 1000);

    }

});