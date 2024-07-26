const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+{}|:\"<>?";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > pass.length) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = pass;
}
createPassword()

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}

//or 
// function copyPassword() {
//     passwordBox.select();
//     navigator.clipboard.writeText(passwordBox.value);
// }