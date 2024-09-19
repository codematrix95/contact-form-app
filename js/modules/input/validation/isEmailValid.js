import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const isEmailValid = (input, i) => {
    // input.value = input.value.replace(/\s+/g, "");
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    let email = emailValidation.test(input.value);
    email === false ? error(input, i) : valid(input, i);
};
