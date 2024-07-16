playGame();

function getComputerChoice() {
    randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}


function getHumanChoice() {
    return prompt().toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('It\'s a draw!');
            return;
        }
    
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'scissors') {
                    console.log('You win! Rock beats Scissors');
                    humanScore++;
                } else {
                    console.log('You lose! Paper beats Rock.');
                    computerScore++;
                }
                break
            case 'paper':
                if (computerChoice === 'rock') {
                    console.log('You win! Paper beats Rock.');
                    humanScore++;
                } else {
                    console.log('You lose! Scissors beat Paper');
                    computerScore++;
                }
                break
            case 'scissors':
                if (computerChoice === 'paper') {
                    console.log('You win! Scissors beat Paper.');
                    humanScore++;
                } else {
                    console.log('You lose! Rock beats Scissors.');
                    computerScore++;
                }
                break
            default:
                console.log('That\'s not a valid item!');
                console.log('Computer gets the point.');
                computerScore++;
            } 
        }

    let humanChoice;
    let computerChoice;
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice,  computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You won the game!');
    } 
    else if (computerScore > humanScore) {
        console.log('You have lost the game!');
    }
    else {
        console.log('Nobody one. It\'s a draw!');
    }
}