import { validateQtype } from "../../fieldset/validation/validateQtype.js";

export const qtypeEvt = (input, errMsg) => {
    input.forEach((e) => {
        let inputTrue = false;
        e.onclick = (e) => {
            e.target.parentNode.classList.add("qtypeChecked");
            if (inputTrue === false) {
                validateQtype(input, errMsg);
            }
            inputTrue = true;
            for (let i = 0; i < input.length; i++) {
                if (input[i].checked === false) {
                    input[i].parentNode.classList.remove("qtypeChecked");
                }
            }
        };

        e.onblur = () => {
            if (inputTrue === false) {
                validateQtype(input, errMsg);
            }
        };
    });
};
