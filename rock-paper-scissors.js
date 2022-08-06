function getComputerChoice() {
    let computerNumber = Math.floor((Math.random()* 3) + 1); // Returns 1, 2 or 3 at random
    let computerChoice = ''; // Initialize computerChoice as a string

    (computerNumber === 1) ? computerChoice = 'Rock':
    (computerNumber === 2) ? computerChoice = 'Paper':
    (computerNumber === 3) ? computerChoice = 'Scissors':
    'This is weird'; // This exception case will never happen ??

    console.log(`Computer chose ${computerChoice}`); // Logs outcome to the console
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("What will you choose: Rock, Paper or Scissors?",'').toLowerCase(); 
    userChoice = userChoice.substring(0,1).toUpperCase()+userChoice.substring(1);
    (userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors') ? console.log(`User chose ${userChoice}`):
    console.error(`${userChoice} is not an option. Please make a choice between Rock, Paper or Scissors`);
    return userChoice;
}

function gamePlay() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let outcome = '';
    (userChoice === computerChoice) ? outcome = "It is a tie!" :
    (userChoice === 'Rock' && computerChoice === 'Paper') ? outcome = "The computer wins!" :
    (userChoice === 'Rock' && computerChoice === 'Scissors') ? outcome = "You win!" :
    (userChoice === 'Scissors' && computerChoice === 'Rock') ? outcome = "The computer wins!" :
    (userChoice === 'Scissors' && computerChoice === 'Paper') ? outcome = "You win!" :
    (userChoice === 'Paper' && computerChoice === 'Scissors') ? outcome = "The computer wins!" :
    (userChoice === 'Paper' && computerChoice === 'Rock') ? outcome = "You win!" :
    'This is weird'; // This exception case will never happen ??
    
    outcome = `You chose ${userChoice} and the computer played ${computerChoice}. ${outcome}`;
    console.log(outcome);
    alert(outcome);
}

gamePlay();
