import { validateQtype } from "../../fieldset/validation/validateQtype.js";

export const qtype = (errMsg) => {
    const genquiry = document.getElementById("genquiry");
    const srequest = document.getElementById("srequest");

    const queryType = [genquiry, srequest];

    queryType.forEach((e) => {
        e.onclick = () => {
            validateQtype(queryType, errMsg[3]);
        };
        e.onblur = () => {
            validateQtype(queryType, errMsg[3]);
        };
    });
};
