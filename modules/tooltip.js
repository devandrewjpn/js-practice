export default function onHoverTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
    const tooltipBox = createTooltip(this);

    function mouseLeave() {
        tooltipBox.remove();
    }

    function mouseMove(event) {
        tooltipBox.style.top = event.pageY + 20 + 'px';
        tooltipBox.style.left = event.pageX + 20 + 'px';
    }

    this.addEventListener('mouseleave', mouseLeave);
    this.addEventListener('mousemove', mouseMove);

}

function createTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}