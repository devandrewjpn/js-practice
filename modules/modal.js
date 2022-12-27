

export default function initModal() {
    const openButton = document.querySelector('[data-modal="open"]');
    const closeButton = document.querySelector('[data-modal="close"]');
    const modalBox = document.querySelector('[data-modal="box"]');


    function toggleModal(event) {
        event.preventDefault();
        modalBox.classList.toggle('ativo');
    }

    function outsideClose(event) {
        if (event.target == this) {
            toggleModal(event);
        }
    }

    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    modalBox.addEventListener('click', outsideClose);
}

