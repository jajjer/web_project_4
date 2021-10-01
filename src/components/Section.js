// renders elements to the DOM

class Section {
    constructor({ renderer }, containerElement) {
        this._renderer = renderer;
        this._container = containerElement;
    }

    renderItems(items) {
        items.forEach(item => this._renderer(item));
    }

    addItem(element) {
        this._container.append(element);
    }
}

export default Section;