let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let movesLeft = document.querySelector('.moves');
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

const playAgainBtn = document.createElement('button');
playAgainBtn.style.cssText = 'display: block; margin: 1.2rem auto; padding: 1rem; background-color: red;'
playAgainBtn.textContent = 'Play again';


//to get a ramdom integer from min to max (both included)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//to get a ramdom case
function computerPlay() {
    const cases = ['rock', 'paper', 'scissors'];
    return cases[getRandomInt(0, 2)];
}

//to determine who wins, or whether it's a tie
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else {
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'win';
        }
        return 'lose';
    }
}

//main function
function game(playerTurn) {

        const computerTurn = computerPlay();
        movesLeft.textContent = +(movesLeft.textContent) - 1;

        if (+(movesLeft.textContent) !== 0) {
            if (playRound(playerTurn, computerTurn) === 'win') {
                playerScore.textContent = +(playerScore.textContent) + 1;
                result.textContent = `You won! ${playerTurn} beats ${computerTurn}`;
                
            } else if (playRound(playerTurn, computerTurn) === 'lose') {
                computerScore.textContent = +(computerScore.textContent) + 1;                
                result.textContent = `You lose! ${computerTurn} beats ${playerTurn}`;
            } else {
                result.textContent = 'Tie!';
            }
        } else {
            result.textContent = (+(playerScore.textContent) > +(computerScore.textContent) ? `You won the game!` : +(playerScore.textContent) < +(computerScore.textContent) ? `Game over!` : `Tie!`);
            result.appendChild(playAgainBtn);
        }
        
    playAgainBtn.addEventListener('click', (e) => {
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        movesLeft.textContent = '5';
        result.textContent = '';
    })

}

buttons.forEach(button => button.addEventListener('click', (e) => {
    if (movesLeft.textContent > 0) {
        let selected = e.target.textContent.toLowerCase();
        game(selected);
    }
}));
