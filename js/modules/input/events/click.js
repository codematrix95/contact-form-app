import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";
import { isFieldsetValid } from "../../fieldset/events/isFieldsetValid.js";

import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const click = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];

    inputCntrs[i].addEventListener("click", (e) => {
        let input = e.target;
        if (inputCntrs[i].id === "qtypeFieldset") {
            isFieldsetValid(e, i, isQtypeValid);
        }
        if (input.id === "consent") {
            if (input.checked === true) {
                valid(input, i);
            } else {
                error(input, i);
            }
        }
    });
};
