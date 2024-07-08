const User = {
    _email: "harshit@gmail.com",
    _password: "abc",


    get email() {
        return this._email;
    },

    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password;
    },

    set password(value) {
        this._password = value;
    },
}

// console.log(User.email);
const tea = Object.create(User)
console.log(tea.email);

