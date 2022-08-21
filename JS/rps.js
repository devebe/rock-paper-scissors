let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playGame));

function playGame (e) {
    playRound(this.classList.value);
}

function getComputerChoice() {
    let computerSelection = Math.floor((Math.random()* 3) + 1);
    
    if (computerSelection === 1) {
        computerSelection = 'Rock';
    }
    else if (computerSelection === 2) {
        computerSelection = 'Paper';
    }
    else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    const result = document.getElementById('outcome');
    let winner;

    if (computerChoice === playerChoice) {
        result.textContent = 'It is a tie.';
        winner = null;
    }
    else if ((computerChoice === 'Rock' && playerChoice === 'Paper') || (computerChoice === 'Scissors' && playerChoice === 'Rock') || (computerChoice === 'Paper' && playerChoice === 'Scissors')){
        result.textContent = 'Player won this round.';
        winner = 'Player';
    }
    else {
        result.textContent = 'Computer won this round.'
        winner = 'Computer';
    }

    result.textContent = `Player played ${playerChoice} and Computer played ${computerChoice}. ` + result.textContent;
    
    keepScore(winner);
}

function keepScore(winner) {
    const playerScores = document.getElementById('playerScore');
    const computerScores = document.getElementById('computerScore');
    const result = document.getElementById('outcome');
    
    if (winner === 'Player') {
        playerScore = playerScore + 1;
    }
    else if (winner === 'Computer') {
        computerScore = computerScore + 1;
    }

    playerScores.textContent = playerScore;
    computerScores.textContent = computerScore;

    if ((playerScore === 5) && (computerScore < 5)) {
        playerScore = 0;
        computerScore = 0;
        result.textContent = "Player has won!";
    }
    else if ((playerScore < 5) && (computerScore === 5)) {
        playerScore = 0;
        computerScore = 0;
        result.textContent = "Computer has won!";
    }
    
}