import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormSubmit }) {
        super(popupElement);

        this._popupForm = this._popupElement.querySelector(".popup__form")
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        const inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        const data = {};
        inputList.forEach(input => {
            data[input.name] = input.value;
        });
        return data;

    }

    setEventListeners() {

    }

    close() {

    }
}

export default PopupWithForm;