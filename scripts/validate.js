class FormValidator {
    constructor(settings, formElement) {
        this._formElement = formElement;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonSelector = settings.inactiveButtonSelector;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
    };

    _showInputError = (input, formEl, { errorClass }) => {
        //const errorSpan = formEl.querySelector("#" + input.id + 'error');
        const errorSpan = formEl.querySelector(`#${input.id}-error`);
        // add error message/ class
        errorSpan.textContent = input.validationMessage;
        input.classList.add(errorClass);
    };

    _hideInputError = (input, formEl, { errorClass }) => {
        const errorSpan = formEl.querySelector(`#${input.id}-error`);
        // add error message/ class
        errorSpan.textContent = "";
        input.classList.remove(errorClass);
    };

    _checkInputValidity = (formEl, input, settings) => {
        if (input.validity.valid) {
            return hideInputError(input, formEl, settings);
        }
        return showInputError(input, formEl, settings);
    };

    _hasValidInputs = (inputList) =>
        inputList.every((input) => input.validity.valid);

    _toggleButton = (inputList, button, settings) => {
        if (hasValidInputs(inputList)) {
            button.disabled = false;
            button.classList.remove(settings.inactiveButtonClass);
        } else {
            button.disabled = true;
            button.classList.add(settings.inactiveButtonClass);
        }
    };

    _setEventListeners = (formEl, settings) => {
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

    enableValidation = (settings) => {
        const formElements = [...document.querySelectorAll(settings.formSelector)]
        formElements.forEach((formEl) => {
            formEl.addEventListener('submit', (e) => e.preventDefault());
            setEventListeners(formEl, settings);
        });
    };
}

export { FormValidator };