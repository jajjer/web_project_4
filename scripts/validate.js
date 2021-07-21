const showInputError = (input, formEl, { errorClass }) => {
    //const errorSpan = formEl.querySelector("#" + input.id + 'error');
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    // add error message/ class
    errorSpan.textContent = input.validationMessage;
    input.classList.add(errorClass);
};

const hideInputError = (input, formEl, { errorClass }) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    // add error message/ class
    errorSpan.textContent = "";
    input.classList.remove(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
    if (input.validity.valid) {
        return hideInputError(input, formEl, settings);
    }
    return showInputError(input, formEl, settings);
};

const hasValidInputs = (inputList) =>
    inputList.every((input) => input.validity.valid);

const toggleButton = (inputList, button, settings) => {
    if (hasValidInputs(inputList)) {
        button.disabled = false;
        button.classList.remove(settings.inactiveButtonClass);
    } else {
        button.disabled = true;
        button.classList.add(settings.inactiveButtonClass);
    }
};

const setEventListeners = (formEl, settings) => {
    const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
    const submitButton = formEl.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            // check validity
            checkInputValidity(formEl, input, settings);
            // toggle button
            toggleButton(inputList, submitButton, settings);
        });
    })
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)]
    formElements.forEach((formEl) => {
        formEl.addEventListener('submit', (e) => e.preventDefault());
        setEventListeners(formEl, settings);
    });
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
});