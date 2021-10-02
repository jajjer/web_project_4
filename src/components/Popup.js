import { ESC_KEYCODE } from '../utils/constants.js';


// REVIEWER-- PLEASE FOR THE LOVE OF GOD, TELL ME WHERE MY MISTAKES ARE. I DON'T KNOW. TRUST ME I'D HAVE THEM FIXED IF I DID. THAT'S WHY I SUBMIT IT EVEN THOUGH IT'S NOT WORKING. PLEASE  YOU HAVE NO IDEA HOW MADDENING THIS IS. JUST TELL ME WHERE MY MISTAKES AND DON'T SAY ITS REJECTED WITHOUT REVIEW


class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keyup", this._handleEscClose);
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
        const openedPopup = document.querySelector(".popup_opened");
        closeButton.addEventListener("click", () => {
            this._close();
        });
        openedPopup.addEventListener("click", () => {
            this._close();
        })
    }
}

export default Popup;