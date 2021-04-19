// Computer randomly generates choice.

let myArray = ['rock', 'paper', 'scissor'];

function computerPlay() {
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
}

// Declares variables to be used within function.
const result = document.querySelector('#result');
result.style.backgroundColor = 'red';
const playerRecordScore = document.querySelector('#playerScore');
const computerRecordScore = document.querySelector('#computerScore');
const currentScore = document.querySelector('#score');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));

// Function determines if player's input wins against computer.
function playRound(playerSelection, computerSelection) {
    playerSelection = this.id;
    computerSelection = computerPlay();
    game();

    if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissor' ||
        playerSelection == 'scissor' && computerSelection == 'rock') {
        currentScore.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
        computerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissor' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection =='paper') {
        currentScore.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection + '!';
        playerScore++;
    } else if (playerSelection == computerSelection) {
        currentScore.textContent = 'Tie! You chose ' + playerSelection.toUpperCase() + ' and the computer chose ' + computerSelection.toUpperCase() + ' too!';
    } else {
        console.log('You can\'t enter that! You have to enter rock, paper, or scissor to play the game!')
    }
}

// New Function that plays 5 rounds.
function game() {
    for (let i = 0; i < 100; i++) {
        playerRecordScore.textContent = 'Your score is ' + playerScore + '!';
        computerRecordScore.textContent = 'Computer score is ' + computerScore + '!';
        if (playerScore === 5 || computerScore === 5) {
            break;
        }
    }
    if (playerScore === 5) {
        result.textContent = 'You beat the computer!';
        alert('You have won! Please refresh game to play again!');
    } else if (computerScore === 5) {
        result.textContent = 'The computer beat you!';
        alert('You have lost! Please refresh game to play again!');
    } 
}
