class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;

    }

    getUserInfo() {
        return {
            name: this._name,
            about: this._job,
        };
    }

    setUserInfo() {
        this._profileName.textContent = this._name;
        this._profileJob.textContent = this._job;
    }
}

export default UserInfo;