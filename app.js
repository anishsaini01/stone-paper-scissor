
let userScore = 0;
let computerScore = 0;

const choices = {
    rock: "images/fist.png",
    paper: "images/hand-paper.png",
    scissors: "images/scissors.png"
};

const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const msgElement = document.getElementById("msg");
const computerImgElement = document.querySelector(".computer-choice img");
const computerMsgElement = document.getElementById("computer-msg");



function computerChoice() {
    const keys = Object.keys(choices);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex]; 
}

function playGame(userSelection) {
    const computerSelection = computerChoice();

    
    computerImgElement.src = choices[computerSelection];
    computerMsgElement.textContent = `Computer chose ${computerSelection}`;

    
    if (userSelection === computerSelection) {
        msgElement.textContent = "Bach gya MC!";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        msgElement.textContent = "Maa chod diye bhaiya ji!";
        userScore++;
        userScoreElement.textContent = userScore;
    } else {
        msgElement.textContent = "Ooooo Chud gye guru!";
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

const choose = document.querySelectorAll(".choice")

choose.forEach(choiceElement => {
    choiceElement.addEventListener("click", () => {
        const userSelection = choiceElement.id; 
        playGame(userSelection);
    });
});