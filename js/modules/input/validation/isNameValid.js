import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const isNameValid = (input, errMsg) => {
    // input.value = input.value.replace(/\s+/g, "");
    const nameValidation = /[^a-zA-Z]+/g;
    let name = nameValidation.test(input.value);
    (name === false && input.value !== "") ? valid(input, errMsg) : error(input, errMsg)
};
