import { isNameValid } from "./isNameValid.js";
import { isEmailValid } from "./isEmailValid.js";
import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";

import { error } from "../state/error.js";

export const isFormValid = () => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];
    const submit = document.querySelector("#submit");

    submit.onclick = (e) => {
        e.preventDefault();
        let inputs = [];
        let qtype = [...document.querySelectorAll("#qtypeFieldset input")];

        for (let i = 0; i < inputCntrs.length; i++) {
            let input = inputCntrs[i].querySelector("input");
            inputs.push(input);
        }

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].id === "fname" || inputs[i].id === "lname") {
                isNameValid(inputs[i], i);
            }
            if (inputs[i].id === "email") {
                isEmailValid(inputs[i], i);
            }
            if (inputs[i].id === "genquiry") {
                isQtypeValid(qtype, i);
            }
            if (inputs[i].id === "msg" && inputs[i].value === "") {
                error(inputs[i], i);
            }
            if (inputs[i].id === "consent" && inputs[i].checked === false) {
                error(inputs[i], i);
            }
        }
    };
};