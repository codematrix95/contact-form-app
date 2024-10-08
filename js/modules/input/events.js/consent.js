import { validateConsent } from "../validation/validateConsent.js";

export const consentEvt = (input, errMsg) => {
    input.onclick = (e) => {
        e.target.style.opacity === ""
            ? (e.target.style.opacity = "0")
            : (e.target.style.opacity = "");

        validateConsent(e.target, errMsg);
    };

    input.onblur = (e) => {
        validateConsent(e.target, errMsg);
    };
};
