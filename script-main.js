let playerWins = 0;
let computerWins = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const div = document.querySelector('div');
const h4 = document.querySelector('h4');
h4.textContent = "Player wins: " + playerWins + " - Computer wins: " + computerWins;

function playRound(playerSelection) {
    const p = document.querySelector('p');
    p.textContent = " ";
    const computerSelection = getComputerChoice();
    console.log('You picked ' + playerSelection + ', computer picked ' + computerSelection);
    if (playerSelection === computerSelection) {
        p.textContent = "It's a draw!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerWins++;
        p.textContent = "You won this round!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        computerWins++;
        p.textContent = "Sorry you lost this round!";
    }
    const button = document.createElement('button');
    h4.textContent = "Player wins: " + playerWins + " - Computer wins: " + computerWins;
    if (playerWins === 5) {
        button.textContent = "Reset";
        div.appendChild(button);
        console.log("Player wins!");
        p.textContent = "Player won the game!";
        playerWins = 0;
        computerWins = 0;
        button.addEventListener('click', () => {
            playRound();
            div.removeChild(button);
        });
    }
    if (computerWins === 5) {
        button.textContent = "Reset";
        div.appendChild(button);
        console.log("Computer wins!");
        p.textContent = "Computer won the game!";
        playerWins = 0;
        computerWins = 0;
        computerWins = 0;
        button.addEventListener('click', () => {
            playRound();
            div.removeChild(button);
        });
    }
}