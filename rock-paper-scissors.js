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
    
    let outcome = '';
    (playerSelection === computerSelection) ? outcome = "It is a tie!" :
    (playerSelection === 'Rock' && computerSelection === 'Paper') ? outcome = "The computer wins!" :
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ? outcome = "You win!" :
    (playerSelection === 'Scissors' && computerSelection === 'Rock') ? outcome = "The computer wins!" :
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ? outcome = "You win!" :
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ? outcome = "The computer wins!" :
    (playerSelection === 'Paper' && computerSelection === 'Rock') ? outcome = "You win!" :
    'This is weird'; // This exception case will never happen ??
    
    outcome = `You chose ${playerSelection} and the computer played ${computerSelection}. ${outcome}`;
    console.log(outcome);
    alert(outcome);
}

playRound();
