export const error = (input, errMsg, errMsgText) => {
    input.setAttribute("aria-invalid", "true");
    input.classList.add("inputErr")

    errMsg.innerHTML = errMsgText
};
