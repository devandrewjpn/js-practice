export default function cronometro() {
    const pause = document.querySelector('[data-cronometro="pause"]');
    const start = document.querySelector('[data-cronometro="start"]');
    const reset = document.querySelector('[data-cronometro="reset"]');
    const tempo = document.querySelector('[data-cronometro="time"]');

    let i = 0;
    let timer;

    function startTime() {
        timer = setInterval(() => {
            tempo.innerText = i++;
        }, 500);
        start.setAttribute('disabled', '');
    }

    function pauseTime() {
        clearInterval(timer);
        start.removeAttribute('disabled');
    }

    function resetTime() {
        tempo.innerText = 0;
        i = 0;
    }

    start.addEventListener('click', startTime);
    pause.addEventListener('click', pauseTime);
    reset.addEventListener('click', resetTime);
}