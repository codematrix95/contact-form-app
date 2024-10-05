export const hideError = (errMsg) => {
    errMsg.style.color === "red"
            ? (errMsg.style.color = "transparent")
            : false;
}