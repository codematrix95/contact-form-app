import { validateName } from "../validation/validateName.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";

export const fname = (errMsg) => {
    const fname = document.getElementById("fname");

    fname.onblur = (e) => {
        validateName(e.target, errMsg[0]);
        removeWhiteSpace(e.target);
    };

    fname.onkeydown = () => {
        errMsg[0].style.color !== "purple"
            ? (errMsg[0].style.color = "purple")
            : false;
    };
}