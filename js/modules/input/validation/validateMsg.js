import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const validateMsg = (input, errMsg) => {
    const errMsgText = "This field is required"
    input.value === ""
            ? error(input, errMsg, errMsgText)
            : valid(input, errMsg);
}