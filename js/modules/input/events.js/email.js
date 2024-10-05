import { validateEmail } from "../validation/validateEmail.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";
import { hideError } from "../state/hideError.js";

export const emailEvt = (input, errMsg) => {
    input.onblur = (e) => {
        validateEmail(e.target, errMsg[2]);
        removeWhiteSpace(e.target);
    };

    input.onkeydown = () => {
        if (input.value !== "") {
            hideError(errMsg[2]);
        }
    };
};
