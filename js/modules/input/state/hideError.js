export const hideError = (errMsg) => {
    errMsg.style.color !== "purple"
            ? (errMsg.style.color = "purple")
            : false;
}