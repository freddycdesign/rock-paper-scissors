let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a draw!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerWins++;
        alert("You won this round!");
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerWins++;
        alert("Sorry you lost this round!");
    }
}

const playerSelection = prompt("Start the game").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log("Your Score: " + playerWins + " | Computer Score: " + computerWins);