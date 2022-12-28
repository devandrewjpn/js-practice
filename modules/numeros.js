export default function numerosAnim() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start = start + incremento;
            numero.innerText = start;
            if (start > total) {
                numero.innerHTML = total;
                clearInterval(timer)
            }
        }, 25)
    })
}