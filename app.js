const choices = document.querySelectorAll('.choice');
const gameResult = document.querySelector('#game-result');
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const msgContainer = document.querySelector(".msg-container");
const resetGame = document.querySelector('#reset-game');

let userS = 0;
let compS = 0;


// Genrate computer choice
function genCompChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let rondomIdx = Math.floor(Math.random() * 3);
    return options[rondomIdx];
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    let compChoice = genCompChoice();
    if (userChoice !== compChoice) {
        let userWin = true
        if(userChoice == "rock") {
            userWin = compChoice == "paper" ? false: true
        }else if(userChoice == "paper") {
            userWin = compChoice == "scissors"? false: true;
        }else {
            userWin = compChoice == "rock"? false: true;
        }
        showWinner(userChoice, compChoice, userWin)
    } else {
        gameDraw(userChoice, compChoice);
    };
};

function showWinner(userChoice, compChoice, userWin) {
    if(userWin == true) {
        gameResult.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        userS++;
        userScore.innerText = userS;
        gameResult.style.backgroundColor = "green";
    }else {
        gameResult.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        compS++;
        compScore.innerText = compS;
        gameResult.style.backgroundColor = "#ff0000";
    }
}

function gameDraw(userChoice, compChoice) {
    gameResult.innerText = "Game was draw! Play again";
    gameResult.style.backgroundColor = "purple";
}

resetGame.addEventListener('click', () => {
    compS = 0;
    userS = 0;
    gameResult.innerText = "Play your move";
    gameResult.style.backgroundColor = "#2E073F";
});