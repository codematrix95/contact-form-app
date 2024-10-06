export const hideError = (errMsg) => {
    errMsg.classList.contains("text-red")
        ? errMsg.classList.remove("text-red")
        : false;
};
