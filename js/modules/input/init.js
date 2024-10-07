import { fnameEvt } from "./events.js/fname.js";
import { lnameEvt } from "./events.js/lname.js";
import { emailEvt } from "./events.js/email.js";
import { msgEvt } from "./events.js/msg.js";
import { qtypeEvt } from "./events.js/qtype.js";
import { consentEvt } from "./events.js/consent.js";
import { submitEvt } from "./events.js/submit.js";

export const init = () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const genquiry = document.getElementById("genquiry");
    const srequest = document.getElementById("srequest");
    const msg = document.getElementById("msg");
    const consent = document.getElementById("consent");
    const submit = document.getElementById("submit");

    const qtypeField = [genquiry, srequest];

    const inputs = [fname, lname, email, qtypeField, msg, consent];

    const errMsg = document.getElementsByClassName("errMsg");

    fnameEvt(fname, errMsg[0]);
    lnameEvt(lname, errMsg[1]);
    emailEvt(email, errMsg[2]);
    qtypeEvt(qtypeField, errMsg[3]);
    msgEvt(msg, errMsg[4]);
    consentEvt(consent, errMsg[5]);

    submitEvt(submit, inputs, errMsg);
};
