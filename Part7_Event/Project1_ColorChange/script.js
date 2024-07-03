//generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
//start changing color
const startChangingColor = function (e) {
if (!intervalId) { //if interval id is not present
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
}
};


const stopChangingColor = function (e) {
    clearInterval(intervalId)
    intervalId = null; //clearing or dereferencing
};

// Event listeners for buttons
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
