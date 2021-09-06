import { ESC_KEYCODE } from '../utils/constants.js';

class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`.${popupSelector}`);
        this._handleEscUp = this._handleEscUp.bind(this);
    }

    open() {
        popup.classList.add("popup_opened");
        document.addEventListener('keyup', handleEsc);
    }

    close() {
        popup.classList.remove("popup_opened");
        document.removeEventListener("keyup", handleEsc);
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