export const keydown = (i) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];
    const errMsg = [...document.querySelectorAll(".errMsg")];

    inputCntrs[i].addEventListener("keydown", (e) => {
        let input = e.target;
        if (input.type === "text" || input.id === "email") {
            errMsg[i].style.color !== "purple" ? errMsg[i].style.color = "purple" : false
        }
    });
};