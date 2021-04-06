// Computer randomly generates choice.

let myArray = ['rock', 'paper', 'scissor'];

function computerPlay() {
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
}

// Declares variables to be used within function.
let playerSelection;
let computerSelection;

// Function determines if player's input wins against computer.
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('please enter choice: rock, paper, scissor').toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return console.log('You lose! Paper beats Rock!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return console.log('You Win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return console.log('You Win! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return console.log('You lose! Scissors beats Paper!');
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return console.log('You lose! Rock beats Scissors');
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return console.log('You Win! Scissors beat Paper!');
    } else if (playerSelection == computerSelection) {
        return console.log('Tie! You chose ' + playerSelection.toUpperCase() + ' and the computer chose ' + computerSelection.toUpperCase() + ' too!');
    } else {
        return console.log('You can\'t enter that! You have to enter rock, paper, or scissor to play the game!')
    }
}

// New Function that plays 5 rounds.
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}

console.log(game());