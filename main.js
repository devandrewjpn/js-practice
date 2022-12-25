

const sections = document.querySelectorAll('.scr-anim');
const windowHafSize = window.innerHeight * 0.60;

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHafSize;
        if (sectionTop < 0) {
            section.classList.add('anim');
        }
    })
}

animaScroll();


window.addEventListener('scroll', animaScroll);


function scrollHREF() {
    const links = document.querySelectorAll('li a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    links.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}


function faqAccordion() {
    const asks = document.querySelectorAll('.faq h4');
    asks[0].classList.add('show');
    asks[0].nextElementSibling.classList.add('show');

    function activeAccordion() {
        this.classList.toggle('show');
        this.nextElementSibling.classList.toggle('show');
    }

    asks.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
}


function tabMenu() {
    const tabMenu = document.querySelectorAll('.tab-menu li');
    const tabContent = document.querySelectorAll('.tab-content section');

    function activeTab(index) {
        tabContent.forEach((content) => {
            content.classList.remove('content');
            content.classList.remove('show');
        });
        tabContent[index].classList.add('show');
        tabMenu[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}


function movingButton() {
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
}

