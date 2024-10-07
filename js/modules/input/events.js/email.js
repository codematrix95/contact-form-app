import { validateEmail } from "../validation/validateEmail.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";
import { hideError } from "../state/hideError.js";

export const emailEvt = (input, errMsg) => {
    input.onblur = (e) => {
        removeWhiteSpace(e.target);
        validateEmail(e.target, errMsg);
    };

    input.onkeydown = () => {
        if (input.value !== "") {
            hideError(errMsg);
        }
    };
};
