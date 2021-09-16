import { ESC_KEYCODE } from '../utils/constants.js';

class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(`.${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keyup", this._handleEscClose.bind(this));
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector(".popup_opened");
            closePopup(openedPopup);
        }
    }

    _handleOverlayClick(e) {
        if (e.target.classList.contains("popup_opened")) {
            const openedPopup = document.querySelector(".popup_opened");
            closePopup(openedPopup);
        }
    }


    setEventListeners() {
        const closeButton = this._popup.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            this._close();
        });
    }
}

export default Popup;