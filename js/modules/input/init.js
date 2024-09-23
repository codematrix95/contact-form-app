import { fname } from "./events.js/fname.js";
import { lname } from "./events.js/lname.js";
import { email } from "./events.js/email.js";
import { msg } from "./events.js/msg.js";
import { qtype } from "./events.js/qtype.js";
import { consent } from "./events.js/consent.js";
import { submit } from "./events.js/submit.js";

export const init = () => {
    let inputs = [...document.getElementsByTagName("input")];

    const fnameInput = inputs[0];
    const lnameInput = inputs[1];
    const emailInput = inputs[2];
    const qtypeField = [inputs[3], inputs[4]];
    const msgInput = inputs[5];
    const consentInput = inputs[6];
    const submitInput = inputs[7];

    inputs = [
        fnameInput,
        lnameInput,
        emailInput,
        qtypeField,
        msgInput,
        consentInput,
    ];

    const errMsg = [...document.getElementsByClassName("errMsg")];

    fname(fnameInput, errMsg);
    lname(lnameInput, errMsg);
    email(emailInput, errMsg);
    qtype(qtypeField, errMsg);
    msg(msgInput, errMsg);
    consent(consentInput, errMsg);

    submit(submitInput, inputs, errMsg);
};
