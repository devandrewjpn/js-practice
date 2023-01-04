export default async function apiPlayground() {

    const cepResult = document.querySelector('[data-cep="response"]');
    const cepBusca = document.querySelector('[data-cep="search"]');
    const input = document.getElementById('cep');

    function handleClick(event) {
        event.preventDefault();
        const cep = input.value;
        buscaCEP(cep);
    }

    function buscaCEP(cep) {
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.text())
            .then(body => {
                console.log(body);
                cepResult.innerText = body;
            })
    }

    cepBusca.addEventListener('click', handleClick);

    // const bitValue = document.querySelector('[data-bit]');

    // function getBitCValue() {
    //     fetch(`http://blockchain.info/ticker`)
    //         .then(response => response.json())
    //         .then(btc => {
    //             bitValue.innerText = ('R$' + btc.BRL.buy).replace('.', ',');
    //         })
    // }

    // setInterval(getBitCValue, 500);

    // getBitCValue();


    // const questionsList = document.querySelector('[data-plan="questions"]');

    // let response = await fetch('https://sirius.bplink.com.br/api/category').then((response) => { return response.json() }).then((body) => body.data);

    // var questions;


    // response.forEach((category) => {
    //     questions = category.questions;
    // })

    // questions.forEach(ask => {
    //     const question = document.createElement('li');
    //     question.innerText = ask.name;
    //     questionsList.appendChild(question);
    // });
}
