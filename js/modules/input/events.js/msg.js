import { hideError } from "../state/hideError.js";
import { validateMsg } from "../validation/validateMsg.js";

export const msgEvt = (input, errMsg) => {
    input.onblur = (e) => {
        validateMsg(e.target, errMsg)
    };

    input.onkeydown = () => {
        hideError(errMsg)
    };
};
