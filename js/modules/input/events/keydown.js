export const keydown = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];
    const errMsg = [...document.querySelectorAll(".errMsg")];

    inputCntrs[i].addEventListener("keydown", (e) => {
        let input = e.target;
        if (input.type === "text" || input.id === "email") {
            if (errMsg[i].style.color !== "green") {
                errMsg[i].style.color = "green";
            }
        }
    });
};