export const valid = (input, errMsg) => {
    input.setAttribute("aria-invalid", "false");
    input.className = ""
    errMsg.style.color = "pink";
};