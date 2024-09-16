export const isQtypeValid = (fieldInputs, i) => {
    const errMsg = [...document.querySelectorAll(".errMsg")];

    let inputTrue = fieldInputs.filter((e) => {
        return e.checked === true;
    });
    if (inputTrue.length === 0) {
        fieldInputs.forEach((e) => {
            e.setAttribute("aria-invalid", "true");
        });
        errMsg[i].style.color = "blue";
    } else {
        fieldInputs.forEach((e) => {
            e.setAttribute("aria-invalid", "false");
        });
        errMsg[i].style.color = "pink";
    }
};
