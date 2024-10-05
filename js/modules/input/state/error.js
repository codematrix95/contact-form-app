export const error = (input, errMsg) => {
    input.setAttribute("aria-invalid", "true");
    input.classList.add("inputErr")
    errMsg.classList.add("text-red")
};
