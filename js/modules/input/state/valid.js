export const valid = (input, errMsg) => {
    input.setAttribute("aria-invalid", "false");
    errMsg.style.color = "pink";
};