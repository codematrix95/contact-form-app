export const messageSent = () => {
    const messageSent = document.getElementById("liveToast");
    const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(messageSent);
    toastBootstrap.show();
};

export const inputErrFocus = (inputErr) => {
    inputErr[0].focus();
    window.scrollTo(0, 0);
};

export const validateForm = (input, errMsg, validation) => {
    validation(input, errMsg)
};