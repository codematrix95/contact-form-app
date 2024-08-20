const body = document.querySelector("body");

const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const inputCntrs = document.querySelectorAll(".inputCntr");
const errors = document.querySelectorAll("p");
const submit = document.querySelector("#submit");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");

const genquiry = document.querySelector("#genquiry");

const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

console.log(inputCntrs);
console.log(errors);

submit.onclick = (e) => {
    // let errorArr = [];
    // let successArr = [];

    // let textArr = [];
    // let qtypeArr = [];
    // let checkboxArr = [];

    const errorFunc = (i, x) => {
        errors[i].style.color = "blue";
        inputCntrs[i].children[x].setAttribute("aria-invalid", "true");
    };

    const successFunc = (i, x) => {
        errors[i].style.color = "red";
        inputCntrs[i].children[x].setAttribute("aria-invalid", "false");
    };

    let inputsArr = [];
    // let qtypeArr = [];
    let qtypeChecked = [];
    let qtypeUnchecked = [];

    const qtypeCheck = (i, x, qtypeChecked) => {
        let qtypeCntr = inputCntrs[i].children[x].parentElement.children;
        for (let i = 0; i < qtypeCntr.length; i++) {
            if (
                qtypeCntr[i].type === "radio" &&
                qtypeCntr[i].checked === true
            ) {
                qtypeChecked.push(qtypeCntr[i]);
                console.log(qtypeChecked);
            } else {
                if (
                    qtypeCntr[i].type === "radio" &&
                    qtypeCntr[i].checked === false
                ) {
                    if (qtypeChecked.length < 1) {
                        qtypeChecked.push(qtypeCntr[i]);
                        console.log(qtypeChecked);
                    }
                }
            }
        }
    };

    e.preventDefault();
    for (let i = 0; i < inputCntrs.length; i++) {
        // console.log(inputCntrs.length)
        for (let x = 0; x < inputCntrs[i].children.length; x++) {
            if (inputCntrs[i].children[x].tagName === "INPUT") {
                if (inputCntrs[i].children[x].value === "") {
                    errorFunc(i, x, inputsArr);
                    inputsArr.push(inputCntrs[i].children[x]);
                } else {
                    if (inputCntrs[i].children[x].id === "email") {
                        let isValidEmail = emailValidation.test(
                            inputCntrs[i].children[x].value
                        );
                        if (isValidEmail === false) {
                            console.log("invalid email");
                            errorFunc(i, x, inputsArr);
                            inputsArr.push(inputCntrs[i].children[x]);
                        } else {
                            successFunc(i, x);
                        }
                    } else {
                        if (
                            inputCntrs[i].children[x].value === "on" &&
                            inputCntrs[i].children[x].checked === false
                        ) {
                            if (inputCntrs[i].children[x].type === "radio") {
                                // qtypeArr.push(inputCntrs[i].children[x]);
                                // console.log(inputCntrs[i].children[x].parentElement.children.length)
                                if (qtypeChecked.length === 0) {
                                    qtypeCheck(i, x, qtypeChecked);
                                    inputsArr.push(qtypeChecked[0]);
                                }
                            } else {
                                inputsArr.push(inputCntrs[i].children[x]);
                            }

                            errorFunc(i, x);
                        } else {
                            successFunc(i, x);
                        }
                    }
                }
            }
        }
    }

    // Boooooooobbbbbsssss

    // console.log(qtypeArr);
    console.log(inputsArr);

    // for (let i = 0; i < textArr.length; i++) {
    //     if (textArr[i].type === "text" && textArr[i].value === "") {
    //             errorArr.push(textArr[i]);
    //     } else {
    //         if (textArr[i].type !== "email") {
    //             successArr.push(textArr[i]);
    //         }
    //     }

    //     if (textArr[i].type === "email") {
    //         let isValidEmail = emailValidation.test(textArr[i].value);
    //         if (isValidEmail === false) {
    //             console.log("invalid email");
    //             errorArr.push(textArr[i]);
    //         } else {
    //             console.log("email valid");
    //             successArr.push(textArr[i]);
    //         }
    //     }
    // }

    // console.log(successArr);
    // console.log(errorArr);

    // console.log(textArr);
    // console.log(qtypeArr);
    // console.log(checkboxArr);

    if (document.activeElement) {
        document.activeElement.blur();
    }

    // errorArr[0].focus();

    // console.log(inputsArr);
    // console.log(radioArr);
};

// for (let x = 0; x < inputCntrs[i].children.length; x++) {
//     if (inputCntrs[i].children[x].tagName === "INPUT") {
//         let input = inputCntrs[i].children[x];
//         if (input.type === "text" || input.type === "email") {
//             textArr.push(input);
//         } else {
//             if (input.type === "radio") {
//                 qtypeArr.push(input);
//             } else {
//                 if (input.type === "checkbox") {
//                     checkboxArr.push(input);
//                 }
//             }
//         }
//     }
// }

// for (let i = 0; i < qtypeArr.length; i++) {
//     if (qtypeArr[i].checked === true) {
//         successArr.push(qtypeArr[i]);
//         qtypeArr = [];
//         console.log("checked");
//     }
// }

// if (qtypeArr.length > 0) {
//     errorArr.push(qtypeArr[0]);
// }

// if (checkboxArr[0].checked === true) {
//     successArr.push(checkboxArr[0]);
// } else {
//     errorArr.push(checkboxArr[0]);
// }

// for (let i = 0; i < errorArr.length; i++) {
//     let e = errorArr[i];
//     errors[i].style.color = "blue";
//     e.setAttribute("aria-invalid", "true");
// }
