function getComputerChoice() {
    let computerNumber = Math.floor((Math.random()* 3) + 1); // Returns 1, 2 or 3 at random
    let computerSelection = ''; // Initialize computerSelection as a string

    (computerNumber === 1) ? computerSelection = 'Rock':
    (computerNumber === 2) ? computerSelection = 'Paper':
    (computerNumber === 3) ? computerSelection = 'Scissors':
    'This is weird'; // This exception case will never happen ??

    console.log(`Computer: ${computerSelection}`); // Logs outcome to the console
    return computerSelection;
}

function getplayerSelection() {
    // let playerSelection = prompt("What will you choose: Rock, Paper or Scissors?",'').toLowerCase(); // Prompts user to type a choice
    // playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1); // Converts playerSelection to formatted string

    loop:
    while (true) {
        let playerSelection = prompt("What will you choose: Rock, Paper or Scissors?",'').toLowerCase();
        playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1);
        switch (playerSelection) {
            case ("Rock" || "Paper" || "Scissors"):
                return playerSelection;
                break loop;
            default:
                alert(`${playerSelection} is not a valid option. Please make a choice between Rock, Paper or Scissors`);
        }
    }
    // (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') ? console.log(`User: ${playerSelection}`): // Logs
    // console.error(`${playerSelection} is not an option. Please make a choice between Rock, Paper or Scissors`);

}

function playRound() {
    let playerSelection = getplayerSelection();
    let computerSelection = getComputerChoice();

    let outcome = ''
    let winner = '';

    if (playerSelection === computerSelection) {
        outcome = "It is a tie";
        winner = "Nobody"
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper')||
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
        ) {
            outcome = "The computer wins this round"
            winner = "Computer";
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
        ) {
            outcome = "The player wins this round"
            winner = "Player";
    }
    
    outcome = `Player chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`;
    console.log(outcome);
    alert(outcome);
    return winner;
}

function game() {
    const roundsOfGame = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundsOfGame; i++) {

        let score = playRound();
        playerScore = playerScore;
        computerScore = computerScore;
        console.log(score);

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

        console.table([playerScore,computerScore]);
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
}

game();
