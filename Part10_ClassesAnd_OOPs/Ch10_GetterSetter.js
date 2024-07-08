class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(eml) {
        this._email = eml;
    }
    get password() {
        // return this.password.toUpperCase();
        // return this._password.toUpperCase();
        return `${this._password}harshit`
    }
    set password(value) {
        // this.password = value.toUpperCase();
        this._password = value;
    }
}

const harshit = new User("harshit@gmail.com", "abc")
console.log(harshit.password);
console.log(harshit.email);