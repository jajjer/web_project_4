// renders elements to the DOM

class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(`.${containerSelector}`);
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        })

    }

    initialCards.forEach((card) => {
        renderCard(card, cardTemplate)
    });

    addItem(element) {
        this._container.append(element);
    }
}

export default Section;