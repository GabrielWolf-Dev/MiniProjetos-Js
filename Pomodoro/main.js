let timer = document.getElementById('timer');
let restTimer = document.getElementById('restTimer');
let intervalTimer = document.querySelector('.intervalTimer');
let coutdown;
let coutdownIterval;
let minutes = 25;
let seconds = 0;
let alarm = document.getElementById('alarm');

let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let playMusic = document.getElementById('playMusic');

pauseBtn.classList.add('disable');

playBtn.addEventListener('click', () => {

    pauseBtn.classList.add('active');
    pauseBtn.classList.remove('disable');
    playBtn.classList.add('disable');

    let timerFake = document.getElementById('timerFake');
    setTimeout(() => {
        timerFake.classList.add('removeFake');
    }, 1000);

    start();

});

pauseBtn.addEventListener('click', () => {

    pauseBtn.classList.remove('active');
    pauseBtn.classList.add('disable');
    playBtn.classList.remove('disable');

    clearInterval(coutdown);
});

resetBtn.addEventListener('click', () => {

    minutes = 25;
    seconds = 0;

    timer.innerHTML = `${minutes}:${seconds}`;
});

function start() {

    clearInterval(coutdown);
    clearInterval(coutdownIterval);
    
    coutdown = setInterval(() => {

        seconds--;
            if(seconds <= 0) {
                if(minutes > 0) {
                    minutes--;
                    seconds = 59;
                }else {
                    clearInterval(coutdown);

                    intervalTimer.classList.add('active');
                    alarm.play();

                    alarm.onended = () => {
                        startInterval();
                   }

                }
            }
    
        timer.innerHTML = `${minutes}:${seconds}`;

    }, 1000);
    
}

function startInterval() {

    let minutesInterval = 5;
    let secondsInterval = 0;

    coutdownIterval = setInterval(() => {

        secondsInterval--;
            if(secondsInterval <= 0) {
                if(minutesInterval > 0) {
                    minutesInterval--;
                    secondsInterval = 59;
                }else {
                    clearInterval(coutdownIterval);
                    let message = confirm('Tempo de descanso finalizado, deseja recomeçar?');
                    if(message == true){
                        intervalTimer.classList.remove('active');
                        start();
                    }else {
                        document.location.reload();
                    }
                }
            }
    
        restTimer.innerHTML = `${minutesInterval}:${secondsInterval}`;

    }, 1000);

}