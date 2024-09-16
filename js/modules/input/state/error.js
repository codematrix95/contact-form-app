export const error = (input, i) => {
    const errMsg = document.querySelectorAll(".errMsg");
    input.setAttribute("aria-invalid", "true");
    errMsg[i].style.color = "blue";
};
