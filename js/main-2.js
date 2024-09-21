import { isQtypeValid } from "./modules/fieldset/validation/isQtypeValid";
import { isEmailValid } from "./modules/input/validation/isEmailValid";
import { isNameValid } from "./modules/input/validation/isNameValid";

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const genquiry = document.getElementById("genquiry");
const srequest = document.getElementById("srequest");
const msg = document.getElementById("msg");
const consent = document.getElementById("consent");

fname.onblur = isNameValid;
lname.onblur = isNameValid;
email.onblur = isEmailValid;
genquiry.onblur = isQtypeValid;
srequest.onblur = isQtypeValid;
msg.onblur = isMessageValid;
consent.onblur = isConsentValid;

