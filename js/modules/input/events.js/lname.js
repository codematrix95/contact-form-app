import { validateName } from "../validation/validateName.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";
import { hideError } from "../state/hideError.js";

export const lnameEvt = (input, errMsg) => {
    input.onblur = (e) => {
        validateName(e.target, errMsg[1]);
        removeWhiteSpace(e.target);
    };

    input.onkeydown = () => {
        hideError(errMsg[1])
    };
}