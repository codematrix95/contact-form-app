import { validateName } from "../validation/validateName.js";
import { validateEmail } from "../validation/validateEmail.js";
import { validateQtype } from "../../fieldset/validation/validateQtype.js";
import { validateMsg } from "../validation/validateMsg.js";
import { validateConsent } from "../validation/validateConsent.js";
import { validateForm } from "../validation/validateForm.js";

export const submit = (input, inputs, errMsg) => {
    const validate = [
        validateName,
        validateName,
        validateEmail,
        validateQtype,
        validateMsg,
        validateConsent,
    ];

    input.onclick = (e) => {
        e.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            validateForm(inputs[i], errMsg[i], validate[i]);
        }

        let inputErr = document.querySelectorAll(".inputErr")
        inputErr[0].focus()
    };
}
