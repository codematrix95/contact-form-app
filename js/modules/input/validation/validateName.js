import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const validateName = (input, errMsg) => {
    const nameValidation = /[^a-zA-Z]+/g;
    let name = nameValidation.test(input.value);
    (name === false && input.value !== "") ? valid(input, errMsg) : error(input, errMsg)
};
