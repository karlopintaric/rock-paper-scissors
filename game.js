let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;

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


function playRound(humanChoice, computerChoice) {
    const messageContainer = document.querySelector('.message');
    let message = '';

    if (humanChoice === computerChoice) {
        message = 'It\'s a draw!';
    } else {

        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'scissors') {
                    message = 'You win! Rock beats Scissors';
                    humanScore++;
                } else {
                    message = 'You lose! Paper beats Rock.';
                    computerScore++;
                }
                break
            case 'paper':
                if (computerChoice === 'rock') {
                    message = 'You win! Paper beats Rock.';
                    humanScore++;
                } else {
                    message = 'You lose! Scissors beat Paper';
                    computerScore++;
                }
                break
            case 'scissors':
                if (computerChoice === 'paper') {
                    message = 'You win! Scissors beat Paper.';
                    humanScore++;
                } else {
                    message = 'You lose! Rock beats Scissors.';
                    computerScore++;
                }
                break
            default:
                message = 'That\'s not a valid item!';
                message = 'Computer gets the point.';
                computerScore++;
            }
        }
        
    messageContainer.textContent = message;

    };


function playGame() {
    
    const buttons = document.querySelectorAll('button')
    const roundText = document.querySelector('.round-counter')
    const scoreText = document.querySelector('.score');

    roundText.textContent = 'Round 1'

    for (let btn of buttons) {
        btn.addEventListener('click', (e) => {
            playRound(e.target.id, getComputerChoice());

            if (roundCounter == 5) {
                if (humanScore > computerScore) {
                    scoreText.textContent = 'You won the game!';
                } 
                else if (computerScore > humanScore) {
                     scoreText.textContent = 'You have lost the game!';
                }
                else {
                     scoreText.textContent = 'Nobody one. It\'s a draw!';
                }

                resetGame();
                return;
            }

            roundCounter++;
            roundText.textContent = `Round ${roundCounter}`;
            scoreText.textContent = `Human: ${humanScore} AI: ${computerScore}`
            
            }
        )
    }
};

function resetGame() {
    roundCounter = 0;
    humanScore = 0;
    computerScore = 0;
}