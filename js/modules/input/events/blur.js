import { isNameValid } from "../validation/isNameValid.js";
import { isEmailValid } from "../validation/isEmailValid.js";
import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";
import { isFieldsetValid } from "../../fieldset/events/isFieldsetValid.js";

import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const blur = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];

    inputCntrs[i].addEventListener(
        "blur",
        (e) => {
            let input = e.target;
            input.id === "fname" || input.id === "lname"
                ? isNameValid(input, i)
                : false;
            input.id === "email" ? isEmailValid(input, i) : false;
            inputCntrs[i].id === "qtypeFieldset"
                ? isFieldsetValid(e, i, isQtypeValid)
                : false;

            if (input.id === "msg") {
                // check to see if input has letters
                input.value === "" ? error(input, i) : valid(input, i)
            }
            if (input.id === "consent") {
                input.checked === false ? error(input, i) : valid(input, i)
            }

            input.type === "text" || input.id === "email"
                ? (input.value = input.value.replace(/\s+/g, ""))
                : false;
        },
        true
    );
};

// fname.onclick = function
