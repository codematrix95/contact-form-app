import { isNameValid } from "./modules/input/validation/isNameValid.js";
import { isEmailValid } from "./modules/input/validation/isEmailValid.js";
import { isQtypeValid } from "./modules/fieldset/validation/isQtypeValid.js";

import { error } from "./modules/input/state/error.js";
import { valid } from "./modules/input/state/valid.js";

const removeWhiteSpace = (input) => {
    input.value = input.value.replace(/\s+/g, "");
};

const init = () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const genquiry = document.getElementById("genquiry");
    const srequest = document.getElementById("srequest");
    const msg = document.getElementById("msg");
    const consent = document.getElementById("consent");

    const queryType = [genquiry, srequest];
    const errMsg = [...document.querySelectorAll(".errMsg")];

    fname.onblur = (e) => {
        isNameValid(e.target, errMsg[0]);
        removeWhiteSpace(e.target);
    };

    lname.onblur = (e) => {
        isNameValid(e.target, errMsg[1]);
        removeWhiteSpace(e.target);
    };

    email.onblur = (e) => {
        isEmailValid(e.target, errMsg[2]);
        removeWhiteSpace(e.target);
    };

    queryType.forEach((e) => {
        e.onclick = () => {
            isQtypeValid(queryType, errMsg[3]);
        };
        e.onblur = () => {
            isQtypeValid(queryType, errMsg[3]);
        };
    });

    msg.onblur = (e) => {
        e.target.value === ""
            ? error(e.target, errMsg[4])
            : valid(e.target, errMsg[4]);
    };

    consent.onclick = (e) => {
        e.target.checked === true
            ? valid(e.target, errMsg[5])
            : error(e.target, errMsg[5]);
    };
    consent.onblur = (e) => {
        e.target.checked === false
            ? error(e.target, errMsg[5])
            : valid(e.target, errMsg[5]);
    };
};

init();

// import { eventListeners } from "./modules/input/eventListeners.js";
// eventListeners();
