export const validateQtype = (fieldInputs, errMsg) => {
    let inputTrue = fieldInputs.filter((e) => {
        return e.checked === true;
    });
    if (inputTrue.length === 0) {
        fieldInputs.forEach((e) => {
            e.setAttribute("aria-invalid", "true");
        });
        errMsg.style.color = "blue";
    } else {
        fieldInputs.forEach((e) => {
            e.setAttribute("aria-invalid", "false");
        });
        errMsg.style.color = "pink";
    }
};
