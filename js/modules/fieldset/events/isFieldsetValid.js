export const isFieldsetValid = (e, i, validation) => {
    const inputCntrs = [...document.querySelectorAll(".inputCntr")];

    let fieldInputs = [...inputCntrs[i].querySelectorAll("input")];
    for (let x = 0; x < fieldInputs.length; x++) {
        fieldInputs[x].id === e.target.id ? validation(fieldInputs, i) : false
    }
};