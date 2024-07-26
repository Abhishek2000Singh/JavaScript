const questions = [
    {
        quest: "Which is the Largest animal in World?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        quest: "Which is the Largest Country in World?",
        answers: [
            { text: "Russia", correct: true },
            { text: "China", correct: false },
            { text: "Australia", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        quest: "Which is the Largest Continent in World?",
        answers: [
            { text: "Europe", correct: false },
            { text: "US", correct: false },
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuesIndex = 0;
let score = 0;

function startQuiz() {
    currentQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questNo = currentQuesIndex + 1;
    questionElement.innerHTML = questNo + ". " + currentQuestion.quest;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", () => selectAnswer(answer));
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct ==="true" ;

    if (isCorrect) {
        selectedBtn.classList.add("correct");

    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";

}

startQuiz();
