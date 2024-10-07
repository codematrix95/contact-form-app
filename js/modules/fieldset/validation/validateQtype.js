export const validateQtype = (fieldInputs, errMsg) => {
    const errMsgText = "Please select a query type"

    let inputTrue = fieldInputs.filter((e) => {
        return e.checked === true;
    });

    if (inputTrue.length === 0) {
        fieldInputs.forEach((e) => {
            e.classList.add("inputErr")
            e.setAttribute("aria-invalid", "true");
        });

        errMsg.innerHTML = errMsgText
        errMsg.classList.add("text-red");
    } else {
        fieldInputs.forEach((e) => {
            e.classList.remove("inputErr")
            e.setAttribute("aria-invalid", "false");
        });
        
        errMsg.innerHTML = ""
        errMsg.classList.remove("text-red");
    }
};