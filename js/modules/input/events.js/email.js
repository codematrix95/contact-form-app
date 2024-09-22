import { validateEmail } from "../validation/validateEmail.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";

export const email = (errMsg) => {
    const email = document.getElementById("email");

    email.onblur = (e) => {
        validateEmail(e.target, errMsg[2]);
        removeWhiteSpace(e.target);
    };

    email.onkeydown = () => {
        errMsg[2].style.color !== "purple"
            ? (errMsg[2].style.color = "purple")
            : false;
    };
}