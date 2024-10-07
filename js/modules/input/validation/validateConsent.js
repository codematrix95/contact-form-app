import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const validateConsent = (input, errMsg) => {
    input.checked === false ? error(input, errMsg) : valid(input, errMsg);
};
