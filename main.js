import dancingButton from "./modules/dancingButton.js";
import tabMenu from "./modules/sidemenu.js";
import modal from "./modules/modal.js";
import toolTip from "./modules/tooltip.js";
import dropdown from "./modules/dropdown.js";
import cronometro from "./modules/cronometro.js";
import menuMobile from "./modules/menu-mobile.js";
import numerosAnim from "./modules/numeros.js";

tabMenu();
modal();
dancingButton();
toolTip();
dropdown();
cronometro();
menuMobile();
numerosAnim();

document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'visible') {
        document.title = 'treino astaton';
    } else {
        document.title = 'o manolo, treinar fi!'
    }
})