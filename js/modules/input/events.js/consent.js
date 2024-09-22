import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const consent = (errMsg) => {
    const consent = document.getElementById("consent");

    consent.onclick = (e) => {
        e.target.checked === true
            ? valid(e.target, errMsg[5])
            : error(e.target, errMsg[5]);
    };

    consent.onblur = (e) => {
        e.target.checked === false
            ? error(e.target, errMsg[5])
            : valid(e.target, errMsg[5]);
    };
}