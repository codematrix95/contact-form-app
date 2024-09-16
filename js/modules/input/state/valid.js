export const valid = (input, i) => {
    const errMsg = document.querySelectorAll(".errMsg");
    input.setAttribute("aria-invalid", "false");
    errMsg[i].style.color = "pink";
};