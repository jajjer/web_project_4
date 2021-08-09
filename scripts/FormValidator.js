class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showInputError(input, { errorClass }) {
        const errorSpan = this._form.querySelector(`#${input.id}-error`);
        errorSpan.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    };

    _hideInputError(input, { errorClass }) {
        const errorSpan = this._form.querySelector(`#${input.id}-error`);
        // add error message/ class 
        errorSpan.textContent = "";
        input.classList.remove(errorClass);
    };

    _checkInputValidity(input, settings) {
        if (input.validity.valid) {
            return hideInputError(input, this._form, settings);
        }
        return showInputError(input, this._form, settings);
    };

    _toggleButton(inputList, button, settings) {
        if (hasValidInputs(inputList)) {
            button.disabled = false;
            button.classList.remove(settings.inactiveButtonClass);
        } else {
            button.disabled = true;
            button.classList.add(settings.inactiveButtonClass);
        }
    };

    _hasValidInputs(inputList) {
        inputList.every((input) => input.validity.valid);
    }

    _setEventListeners() {
        const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        const submitButton = this._form.querySelector(this._submitButtonSelector);

        inputList.forEach((input) => {
            input.addEventListener("input", (e) => {
                this._checkInputValidity(this._form, input, settings);
                this._toggleButton(inputList, submitButton, settings);
            });
        })
    }


    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidator;