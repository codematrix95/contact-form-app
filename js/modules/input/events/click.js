import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";
import { isFieldsetValid } from "../../fieldset/events/isFieldsetValid.js";

import { valid } from "../state/valid.js";
import { error } from "../state/error.js";

export const click = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];

    inputCntrs[i].addEventListener("click", (e) => {
        let input = e.target;
        inputCntrs[i].id === "qtypeFieldset"
            ? isFieldsetValid(e, i, isQtypeValid)
            : false;
        if (input.id === "consent") {
            input.checked === true ? valid(input, i) : error(input, i);
        }
    });
};
