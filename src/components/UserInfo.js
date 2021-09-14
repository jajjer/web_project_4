class UserInfo {

    constructor({ nameSelector, titleSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._titleElement = document.querySelector(titleSelector);
    }

    setUserInfo(name, title) {
        this._nameElement.textContent = name;
        this._titleElement.textContent = title;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            title: this._titleElement.textContent,
        }
    }

}

export default UserInfo;