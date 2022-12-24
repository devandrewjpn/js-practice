

var botao = document.querySelector('.botao');
var btn_verificar = document.querySelector('.btn-verificar');
var position;

btn_verificar.addEventListener('click', function () {
    if (btn_verificar.innerHTML == 'clique para verificar') {
        btn_verificar.innerHTML = 'verificado';
        btn_verificar.setAttribute('class', 'active');
    } else {
        btn_verificar.innerHTML = 'clique para verificar';
        btn_verificar.removeAttribute('class', 'active');
    }
});

botao.addEventListener('mouseover', function () {
    if (btn_verificar.innerHTML == 'clique para verificar') {
        position ? (position = 0) : (position = 150);
        botao.style.transform = `translate(${position}px,0px)`;
        botao.style.transition = 'all 0.3s ease';
    }

});

