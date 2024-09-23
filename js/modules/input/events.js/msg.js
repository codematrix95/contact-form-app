import { hideError } from "../state/hideError.js";
import { validateMsg } from "../validation/validateMsg.js";

export const msg = (input, errMsg) => {
    input.onblur = (e) => {
        validateMsg(e.target, errMsg[4])
    };

    input.onkeydown = () => {
        hideError(errMsg[4])
    };
};
