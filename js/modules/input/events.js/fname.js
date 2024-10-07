import { validateName } from "../validation/validateName.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";
import { hideError } from "../state/hideError.js";

export const fnameEvt = (input, errMsg) => {
    input.onblur = (e) => {
        removeWhiteSpace(e.target);
        validateName(e.target, errMsg);
    };

    input.onkeydown = () => {
        hideError(errMsg);
    };
};
