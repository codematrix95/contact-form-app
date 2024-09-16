import { isNameValid } from "../validation/isNameValid.js";
import { isEmailValid } from "../validation/isEmailValid.js";
import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";
import { isFieldsetValid } from "../../fieldset/events/isFieldsetValid.js";

import { error } from "../state/error.js"
import { valid } from "../state/valid.js";

export const blur = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];

    inputCntrs[i].addEventListener(
        "blur",
        (e) => {
            let input = e.target;
            if (input.id === "fname" || input.id === "lname") {
                isNameValid(input, i);
            }

            if (input.id === "email") {
                isEmailValid(input, i);
            }

            if (inputCntrs[i].id === "qtypeFieldset") {
                isFieldsetValid(e, i, isQtypeValid);
            }

            if (input.id === "msg") {
                if (input.value === "") {
                    error(input, i);
                } else {
                    valid(input, i);
                }
            }
            if (input.id === "consent") {
                if (input.checked === false) {
                    error(input, i);
                } else {
                    valid(input, i);
                }
            }

            if (input.type === "text" || input.id === "email") {
                input.value = input.value.replace(/\s+/g, "");
            }
        },
        true
    );
};
