export default function tabMenu() {
    const sideMenu = document.querySelectorAll('.sidemenu ul li');
    const sideContent = document.querySelectorAll('.main-content section');

    function activeTab(index) {
        sideContent.forEach((content) => {
            content.classList.remove('show');
        });
        sideContent[index].classList.add('show');
    }

    sideMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index);
        })
    })
}