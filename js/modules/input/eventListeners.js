import { isFormValid } from "./validation/isFormValid.js";

export const eventListeners = (evtA, evtB, evtC) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];
    for (let i = 0; i < inputCntrs.length; i++) {
        evtA(i);
        evtB(i);
        evtC(i);
    }
    isFormValid();
};