import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const validateEmail = (input, errMsg) => {
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    let email = emailValidation.test(input.value);
    email === false ? error(input, errMsg) : valid(input, errMsg);
};
