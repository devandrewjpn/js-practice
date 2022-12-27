import dancingButton from "./modules/dancingButton.js";
import tabMenu from "./modules/sidemenu.js";
import modal from "./modules/modal.js";
import toolTip from "./modules/tooltip.js";

tabMenu();
modal();
dancingButton();
toolTip();

document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'visible') {
        document.title = 'treino astaton';
    } else {
        document.title = 'o manolo, treinar fi!'
    }
})