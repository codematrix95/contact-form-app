import { validateQtype } from "../../fieldset/validation/validateQtype.js";

export const qtype = (input, errMsg) => {
    input.forEach((e) => {
        e.onclick = () => {
            validateQtype(input, errMsg[3]);
        };
        e.onblur = () => {
            validateQtype(input, errMsg[3]);
        };
    });
};
