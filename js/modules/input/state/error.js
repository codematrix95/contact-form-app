export const error = (input, errMsg) => {
    input.setAttribute("aria-invalid", "true");
    input.className = "inputErr"
    errMsg.style.color = "red";
};
