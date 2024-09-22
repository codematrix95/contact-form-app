export const error = (input, errMsg) => {
    input.setAttribute("aria-invalid", "true");
    errMsg.style.color = "blue";
};
