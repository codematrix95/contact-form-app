export const valid = (input, errMsg) => {
    input.setAttribute("aria-invalid", "false");
    input.classList.remove("inputErr")

    errMsg.innerHTML = ""
};