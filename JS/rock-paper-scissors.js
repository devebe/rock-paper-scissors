const playerChoice = addEventListener('click', e => {
    if (e.target.id === 'Rock' || e.target.id === 'Paper' || e.target.id === 'Scissors') {
        playRound(e.target.id);
    }
    else return;
});

function getComputerChoice() {
    let computerNumber = Math.floor((Math.random()* 3) + 1); // Returns 1, 2 or 3 at random
    let computerSelection = ''; // Initialize computerSelection as a string

    (computerNumber === 1) ? computerSelection = 'Rock':
    (computerNumber === 2) ? computerSelection = 'Paper':
    (computerNumber === 3) ? computerSelection = 'Scissors':
    'This is weird'; // This exception case will never happen ??

    return computerSelection; // Returns computerSelection
}

function getplayerSelection() {
    loop:
    while (true) {
        let playerSelection = prompt("What will you choose: Rock, Paper or Scissors?",'').toLowerCase();
        playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1);
        // Captures and converts text input from user to string with formatting

        switch (playerSelection) {
            case "Rock":
                return playerSelection;
                break loop;
            case "Paper":
                return playerSelection;
                break loop;
            case "Scissors":
                return playerSelection;
                break loop;
            default:
                alert(`${playerSelection} is not a valid option. Please make a choice between Rock, Paper or Scissors`);
        }
        // Checks text input against possible options
    }
    // Loops until user enters valid input (as requested by switch-statement)
}

function playRound(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();
    // Calls functions getPlayerSelection and getComputerChoice

    let outcome = ''; // Initializes string variable to store outcome
    let winner = ''; // Initializes string variable to store winner

    if (playerSelection === computerSelection) {
        outcome = "It is a tie.";
        winner = "Nobody"
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper')||
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
        ) {
            outcome = "The computer wins this round."
            winner = "Computer";
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
        ) {
            outcome = "The player wins this round."
            winner = "Player";
    }
    // Checks playerSelection and computerSelection to determine win, lose or tie.
    
    outcome = `Player chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`;
    const showOutcome = document.getElementById('outcome');
    showOutcome.textContent = outcome;
    return winner; // Returns string with winner.
}

function game() {
    const roundsOfGame = 5; //Sets the amount of rounds that will be played
    let playerScore = 0; //Initializes integer variable to keep track of playerScore
    let computerScore = 0; //Initializes integer variable to keep track of computerScore

    for (let i = 0; i < roundsOfGame; i++) {

        let score = playRound();
        playerScore = playerScore;
        computerScore = computerScore;

        if (score === 'Computer') {
            computerScore = computerScore + 1;
        }
        else if (score === 'Player') {
            playerScore = playerScore + 1;
        }
        else if (score = 'Nobody') {
            computerScore = computerScore;
            playerScore = playerScore;
        }
        else {
            console.log("This is weird.");
        };

        const scorekeeping = function (player,computer){
            this.player = playerScore;
            this.computer = computerScore;
        };
        console.table(scorekeeping);

        console.table([playerScore,computerScore]); // Keeps track of score after round.
    }

    if (playerScore > computerScore) {
        console.log(`Player won best of 5 rounds by ${playerScore} against ${computerScore}`);
        alert(`Player won after 5 rounds by ${playerScore} against ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`Computer won best of 5 rounds by ${computerScore} against ${playerScore}`);
        alert(`Computer won after 5 rounds by ${computerScore} against ${playerScore}`);
    }
    else {
        console.log(`Player and computer tied after 5 rounds by ${computerScore} against ${playerScore}`);
        alert(`Player and computer tied after 5 rounds by ${computerScore} against ${playerScore}`);
    }
    // Responds with outcome after 5 rounds to show who won or tied.
}

game();


