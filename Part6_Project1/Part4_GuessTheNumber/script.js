let getRandomNum = parseInt(Math.random() * 1000 + 1);
console.log(getRandomNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //checking the value is correct form or not
    if (isNaN(guess) || guess < 1 || guess > 1000) {
        alert("Please enter a Valid number between 1 and 1000")
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${getRandomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //checking the guessValue and printing

    if (guess === getRandomNum) {
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if (guess < getRandomNum) {
        displayMessage(`Number is too high`)
    }
    else if (guess > getRandomNum) {
        displayMessage(`Number is too low`)
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    //Interact with DOM and diplay the message
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(params) {
    userInput.value = ''
    userInput.setAttribute('disabled', '') //always added in key value pair
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(params) {
    // p.addEventListener('click',startGame)
    const newGameButtomn = document.querySelector("#newGame")
    newGameButtomn.addEventListener('click', function (e) {
        getRandomNum = parseInt(Math.random() * 1000 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
    })
}

