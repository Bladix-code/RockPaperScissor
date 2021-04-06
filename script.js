// Computer randomly generates choice.

let myArray = ['rock', 'paper', 'scissor'];

function computerPlay() {
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
}

// Function determines if player's input wins against computer.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return alert('You lose! Paper beats Rock!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return alert('You Win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return alert('You Win! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return alert('You lose! Scissors beats Paper!');
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return alert('You lose! Rock beats Scissors');
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return alert('You Win! Scissors beat paper!');
    } else if (playerSelection == computerSelection) {
        return alert('Tie! You chose ' + playerSelection + ' and the computer chose ' + computerSelection + ' too!');
    } else {
        return alert('You can\'t enter that! You have to enter rock, paper, or scissor to play the game!')
    }
}

// Player's choice determines results.
let playerSelection = prompt('please enter choice: rock, paper, scissor').toLowerCase();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));