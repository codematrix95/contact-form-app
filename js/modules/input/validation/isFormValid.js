import { isNameValid } from "./isNameValid.js";
import { isEmailValid } from "./isEmailValid.js";
import { isQtypeValid } from "../../fieldset/validation/isQtypeValid.js";

import { error } from "../state/error.js";

export const isFormValid = () => {
    const submit = document.querySelector("#submit");

    submit.onclick = (e) => {
        e.preventDefault();

        const inputCntrs = [...document.querySelectorAll(".inputCntr")];
        let inputs = [];
        for (let i = 0; i < inputCntrs.length; i++) {
            let input = inputCntrs[i].querySelector("input");
            inputs.push(input);
        }

        let qtype = [...document.querySelectorAll("#qtypeFieldset input")];
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].id === "fname" || inputs[i].id === "lname"
                ? isNameValid(inputs[i], i)
                : false;
            inputs[i].id === "email" ? isEmailValid(inputs[i], i) : false;
            inputs[i].id === "genquiry" ? isQtypeValid(qtype, i) : false;
            inputs[i].id === "msg" && inputs[i].value === ""
                ? error(inputs[i], i)
                : false;
            inputs[i].id === "consent" && inputs[i].checked === false
                ? error(inputs[i], i)
                : false;
        }

        const errMsg = [...document.querySelectorAll(".errMsg")];
        for (let i = 0; i < errMsg.length; i++) {
            if (errMsg[i].style.color === "blue") {
                let input = inputCntrs[i].querySelector("input");
                return input.focus();
            }
        }
    };
};
