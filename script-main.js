//Prompt user to input rock paper or scissors
//computer randomly selects rock, paper, or scissors in return,
//if it's a draw, announce draw and prompt user to input again,

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return alert("Computer also picks " + computerSelection + ". It's a draw, try again!") + prompt();
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return ("You won this round!");
    }

    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        return ("Sorry you lost this round!");
    } else
        alert("I don't know what you're playing, please try again");
    return prompt();
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log("You pick " + playerSelection + ", computer picks " + computerSelection + ", " + playRound(playerSelection, computerSelection));