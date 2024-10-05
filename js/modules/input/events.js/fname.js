import { validateName } from "../validation/validateName.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";
import { hideError } from "../state/hideError.js";

export const fnameEvt = (input, errMsg) => {
    input.onblur = (e) => {
        validateName(e.target, errMsg[0]);
        removeWhiteSpace(e.target);
    };

    input.onkeydown = () => {
        hideError(errMsg[0]);
    };
};
