import { error } from "../state/error.js";
import { valid } from "../state/valid.js";
import { validateConsent } from "../validation/validateConsent.js";

export const consentEvt = (input, errMsg) => {
    input.onclick = (e) => {
        e.target.style.opacity === ""
            ? (e.target.style.opacity = "0")
            : (e.target.style.opacity = "");

        validateConsent(e.target, errMsg[5]);
    };

    input.onblur = (e) => {
        e.target.checked === false
            ? error(e.target, errMsg[5])
            : valid(e.target, errMsg[5]);
    };
};
