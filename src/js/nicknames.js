class validator {
    constructor(nickname) {
        this.nickname = nickname;
    }

    validateUsername() {
        const re = new RegExp("^(?![_\\d-])(?!.*[0-9]{4})[a-zA-Z0-9_-]+(?:[^0-9_-]$)");
        return re.test(this.nickname);
    }
}

export default validator