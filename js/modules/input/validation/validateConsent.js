import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const validateConsent = (input, errMsg) => {
    const errMsgText = "To submit this form, please consent to being contacted";
    input.checked === false ? error(input, errMsg, errMsgText) : valid(input, errMsg);
};
