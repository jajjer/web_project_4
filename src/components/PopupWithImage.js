import Popup from "../components/Popup.js";

class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);

        this._popupImage = this._popup.querySelector(".popup__image");
        this._popupCaption = this._popup.querySelector(".popup__caption");

    }

    open({ link, name }) {
        this._popupElement.querySelector(".popup__caption").textContent = name;
        const image = this._popupElement.querySelector(".popup__image");
        image.src = link;
        image.alt = ` ${name}`;
        super.open();
    }
}

export default PopupWithImage;