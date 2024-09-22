import { validateName } from "../validation/validateName.js";
import { removeWhiteSpace } from "../state/removeWhiteSpace.js";

export const lname = (errMsg) => {
    const lname = document.getElementById("lname");

    lname.onblur = (e) => {
        validateName(e.target, errMsg[1]);
        removeWhiteSpace(e.target);
    };

    lname.onkeydown = () => {
        errMsg[1].style.color !== "purple"
            ? (errMsg[1].style.color = "purple")
            : false;
    };
}