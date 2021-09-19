import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormSubmit }) {
        super(popupElement);

        this._popupForm = this._popup.querySelector(".popup__form")
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
        const closeButton = this._popup.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            close();
        });

        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}

export default PopupWithForm;