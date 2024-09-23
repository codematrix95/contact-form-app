import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const validateMsg = (input, errMsg) => {
    input.value === ""
            ? error(input, errMsg)
            : valid(input, errMsg);
}