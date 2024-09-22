import { fname } from "./events.js/fname.js";
import { lname } from "./events.js/lname.js";
import { email } from "./events.js/email.js";
import { msg } from "./events.js/msg.js";
import { qtype } from "./events.js/qtype.js";
import { consent } from "./events.js/consent.js";

export const init = () => {
    const errMsg = [...document.querySelectorAll(".errMsg")];

    fname(errMsg);
    lname(errMsg);
    email(errMsg);
    qtype(errMsg);
    msg(errMsg)
    consent(errMsg)
};
