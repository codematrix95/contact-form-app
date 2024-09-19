import { isFormValid } from "./validation/isFormValid.js";
import { blur } from "./events/blur.js";
import { click } from "./events/click.js";
import { keydown } from "./events/keydown.js";

export const eventListeners = () => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];
    for (let i = 0; i < inputCntrs.length; i++) {
        blur(i);
        click(i);
        keydown(i);
    }
    isFormValid();
};
