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
    let playerSelection = prompt("What will you choose: Rock, Paper or Scissors?",'').toLowerCase(); // Prompts user to type a choice
    playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1); // Converts playerSelection to formatted string

    (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') ? console.log(`User: ${playerSelection}`): // Logs
    console.error(`${playerSelection} is not an option. Please make a choice between Rock, Paper or Scissors`);

    return playerSelection;
}

function playRound() {
    let playerSelection = getplayerSelection();
    let computerSelection = getComputerChoice();

    let outcome = ''
    let pScore = 0;
    let cScore = 0;

    if (playerSelection === computerSelection) {
        outcome = "It is a tie";
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper')||
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
        ) {
            outcome = "The computer wins this round"
            cScore = 1;
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
        ) {
            outcome = "The player wins this round"
            pScore = 1;
    }
    


    
    // let outcome = '';
    // (playerSelection === computerSelection) ? outcome = "It is a tie!" :
    // (playerSelection === 'Rock' && computerSelection === 'Paper') ? outcome = "The computer wins!" :
    // (playerSelection === 'Rock' && computerSelection === 'Scissors') ? outcome = "You win!" :
    // (playerSelection === 'Scissors' && computerSelection === 'Rock') ? outcome = "The computer wins!" :
    // (playerSelection === 'Scissors' && computerSelection === 'Paper') ? outcome = "You win!" :
    // (playerSelection === 'Paper' && computerSelection === 'Scissors') ? outcome = "The computer wins!" :
    // (playerSelection === 'Paper' && computerSelection === 'Rock') ? outcome = "You win!" :
    // 'This is weird'; // This exception case will never happen ??
    
    outcome = `Player chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`;
    console.table(outcome,pScore,cScore);
    alert(outcome);
    return pScore, cScore;
}

function game() {
    const roundsOfGame = 5;
    for (let i = 0; i < roundsOfGame; i++) {
        let playerScore = 0;
        let computerScore = 0;
        playRound();
    }
}

game();
