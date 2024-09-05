const body = document.querySelector("body");

const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const inputCntrs = document.querySelectorAll(".inputCntr");
const errMsg = document.querySelectorAll(".errMsg");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const genquiry = document.querySelector("#genquiry");
const srequest = document.querySelector("#srequest");
const msg = document.querySelector("#msg");
const consent = document.querySelector("#consent");
const submit = document.querySelector("#submit");

const stuff = (inputsArr) => {
    console.log(inputsArr);
};

const isNameValid = (input, i) => {
    input.value = input.value.replace(/\s+/g, "");
    const nameValidation = /[^a-zA-Z]+/g;
    let name = nameValidation.test(input.value);
    if (name === false && input.value !== "") {
        errMsg[i].style.color = "red";
        input.setAttribute("aria-invalid", "false");
    } else {
        errMsg[i].style.color = "blue";
        input.setAttribute("aria-invalid", "true");
    }
};

const isEmailValid = (input, i) => {
    input.value = input.value.replace(/\s+/g, "");
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    let email = emailValidation.test(input.value);
    if (email === false) {
        errMsg[i].style.color = "blue";
        input.setAttribute("aria-invalid", "true");
    } else {
        errMsg[i].style.color = "red";
        input.setAttribute("aria-invalid", "false");
    }
};

const inputSuccess = (input, i) => {
    input.setAttribute("aria-invalid", "false");
    errMsg[i].style.color = "red";
};

const inputError = (input, i) => {
    input.setAttribute("aria-invalid", "true");
    errMsg[i].style.color = "blue";
};

const isQtypeValid = (i) => {
    let fieldArr = [...inputCntrs[i].children];
    let buttons = fieldArr.filter((e) => {
        return e.type === "radio";
    });
    let buttonChecked = fieldArr.filter((e) => {
        return e.checked === true;
    });

    if (buttonChecked.length === 0) {
        buttons.forEach((e) => {
            e.setAttribute("aria-invalid", "true");
        });
        errMsg[i].style.color = "blue";
    } else {
        buttons.forEach((e) => {
            e.setAttribute("aria-invalid", "false");
        });
        errMsg[i].style.color = "red";
    }
};

const checkInputOnblur = (input, i) => {
    if (input.id === "fname" || input.id === "lname") {
        isNameValid(input, i);
    }
    if (input.id === "email") {
        isEmailValid(input, i);
    }
    if (input.parentNode.type === "fieldset") {
        isQtypeValid(i);
    }
    if (input.id === "msg") {
        if (input.value === "") {
            inputError(input, i);
        } else {
            inputSuccess(input, i);
        }
    }
    if (input.id === "consent") {
        if (input.checked === false) {
            inputError(input, i);
        }
    }
};

const checkInputOnclick = (input, i) => {
    if (input.parentNode.type === "fieldset") {
        filterFieldset(i);
    }
    if (input.id === "consent") {
        inputSuccess(input, i);
    }
};

for (let i = 0; i < inputCntrs.length; i++) {
    for (let x = 0; x < inputCntrs[i].children.length; x++) {
        let input = inputCntrs[i].children[x];
        if (input.tagName === "INPUT") {
            input.onblur = () => {
                checkInputOnblur(input, i);
            };
            input.onclick = () => {
                checkInputOnclick(input, i);
            };
        }
    }
}

submit.onclick = (e) => {
    let inputsArr = [];

    e.preventDefault();
    for (let i = 0; i < inputCntrs.length; i++) {
        if (inputCntrs[i].className === "inputCntr") {
            inputVerification(i, inputsArr);
        } else if (inputCntrs[i].className === "inputCntr fieldset") {
            qtypeVerification(i, inputsArr);
        }
    }

    if (document.activeElement) {
        console.log(document.activeElement);
        document.activeElement.blur();
    }

    if (inputsArr.length !== 0) {
        // inputsArr[0].focus();
        // array = [];
        // array = inputsArr.slice(0);
        // console.log("#" + inputsArr[0].id)
        stuff(inputsArr);
    }

    // console.log(array);
    // console.log(inputsArr);
};

const inputVerification = (i, inputsArr) => {
    for (let x = 0; x < inputCntrs[i].children.length; x++) {
        let input = inputCntrs[i].children[x];
        if (input.tagName === "INPUT") {
            if (input.value === "") {
                inputError(i, x, inputsArr);
            } else {
                if (input.id === "email") {
                    emailVerification(i, x, inputsArr);
                } else {
                    if (input.value === "on" && input.checked === false) {
                        inputError(i, x, inputsArr);
                    } else {
                        inputSuccess(i, x);
                    }
                }
            }
        }
    }
};

const qtypeVerification = (i, inputsArr) => {
    let fieldsetTrueArr = [];
    let fieldsetFalseArr = [];
    let checked = false;

    for (let x = 0; x < inputCntrs[i].children.length; x++) {
        let input = inputCntrs[i].children[x];
        if (input.type === "radio") {
            fieldsetTrueArr.push(input);
            if (input.checked === false) {
                if (checked === false) {
                    fieldsetFalseArr.push(input);
                }
            } else {
                if (input.checked === true) {
                    checked = true;
                    fieldsetFalseArr = [];
                }
            }
        }
    }

    if (fieldsetFalseArr.length !== 0) {
        inputsArr.push(fieldsetFalseArr[0]);
        fieldsetFalseArr.forEach((e) => {
            e.setAttribute("aria-invalid", "true");
        });
        errMsg[i].style.color = "blue";
        // errorArr.push(errMsg[i]);
    } else {
        fieldsetTrueArr.forEach((e) => {
            e.setAttribute("aria-invalid", "false");
        });
        errMsg[i].style.color = "red";
    }
};

const emailVerification = (i, x, inputsArr) => {
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

    let input = inputCntrs[i].children[x];
    let isValidEmail = emailValidation.test(input.value);
    if (isValidEmail === false) {
        console.log(input);
        inputError(i, x, inputsArr);
    } else {
        inputSuccess(i, x);
    }
};

// const inputError = (i, x, inputsArr) => {
//     let input = inputCntrs[i].children[x];
//     errMsg[i].style.color = "blue";
//     input.setAttribute("aria-invalid", "true");
//     inputsArr.push(input);
//     // errorArr.push(errMsg[i]);
//     // console.log(errorArr);
// };

// const inputSuccess = (i, x) => {
//     let input = inputCntrs[i].children[x];
//     errMsg[i].style.color = "red";
//     input.setAttribute("aria-invalid", "false");
// };
