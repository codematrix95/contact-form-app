import { error } from "../state/error.js";
import { valid } from "../state/valid.js";
import { validateConsent } from "../validation/validateConsent.js";

export const consent = (input, errMsg) => {
    input.onclick = (e) => {
        validateConsent(e.target, errMsg[5]);
    };

    input.onblur = (e) => {
        e.target.checked === false
            ? error(e.target, errMsg[5])
            : valid(e.target, errMsg[5]);
    };
}