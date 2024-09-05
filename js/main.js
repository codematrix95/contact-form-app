// const body = document.querySelector("body");
// const form = document.querySelector("form");
// const labels = document.querySelectorAll("label");

const inputCntrs = document.querySelectorAll(".inputCntr");
const errMsg = document.querySelectorAll(".errMsg");

// const fname = document.querySelector("#fname");
// const lname = document.querySelector("#lname");
// const email = document.querySelector("#email");
// const genquiry = document.querySelector("#genquiry");
// const srequest = document.querySelector("#srequest");
// const msg = document.querySelector("#msg");
// const consent = document.querySelector("#consent");

const submit = document.querySelector("#submit");

const isNameValid = (input, i) => {
    input.value = input.value.replace(/\s+/g, "");
    const nameValidation = /[^a-zA-Z]+/g;
    let name = nameValidation.test(input.value);
    if (name === false && input.value !== "") {
        inputSuccess(input, i);
    } else {
        inputError(input, i);
    }
};

const isEmailValid = (input, i) => {
    input.value = input.value.replace(/\s+/g, "");
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    let email = emailValidation.test(input.value);
    if (email === false) {
        inputError(input, i);
    } else {
        inputSuccess(input, i);
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
    if (input.parentNode.id === "qtype") {
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
        } else {
            inputSuccess(input, i);
        }
    }
};

const checkInputOnclick = (input, i) => {
    if (input.parentNode.id === "qtype") {
        isQtypeValid(i);
    }
    if (input.id === "consent") {
        if (input.checked === true) {
            inputSuccess(input, i);
        }
    }
};

const inputEventHanlders = (input, i) => {
    input.onblur = () => {
        checkInputOnblur(input, i);
    };
    input.onclick = () => {
        checkInputOnclick(input, i);
    };
};

const isFormValid = (func) => {
    for (let i = 0; i < inputCntrs.length; i++) {
        for (let x = 0; x < inputCntrs[i].children.length; x++) {
            let input = inputCntrs[i].children[x];
            if (input.tagName === "INPUT") {
                func(input, i);
            }
        }
    }
};

isFormValid(inputEventHanlders);

submit.onclick = (e) => {
    e.preventDefault();
    isFormValid(checkInputOnblur);
};
