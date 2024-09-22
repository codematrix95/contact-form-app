import { error } from "../state/error.js";
import { valid } from "../state/valid.js";

export const msg = (errMsg) => {
    const msg = document.getElementById("msg");

    msg.onblur = (e) => {
        e.target.value === ""
            ? error(e.target, errMsg[4])
            : valid(e.target, errMsg[4]);
    };

    msg.onkeydown = () => {
        errMsg[4].style.color !== "purple"
            ? (errMsg[4].style.color = "purple")
            : false;
    };
};
