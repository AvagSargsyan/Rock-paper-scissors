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
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerTurn = computerPlay();
        let playerTurn = prompt('Your turn!').toLowerCase();
        if (playRound(playerTurn, computerTurn) === 'win') {
            playerScore++;
            console.log(`You Win! ${playerTurn} beats ${computerTurn}. Score: ${playerScore} : ${computerScore}`);
        } else if (playRound(playerTurn, computerTurn) === 'lose') {
            computerScore++;
            console.log(`You Lose! ${computerTurn} beats ${playerTurn}. Score: ${playerScore} : ${computerScore}`);
        } else {
            console.log(`Tie! Score: ${playerScore} : ${computerScore}`);
        }
    }
    console.log(playerScore > computerScore ? `You won the game! Score: ${playerScore} : ${computerScore}` : playerScore < computerScore ? `Game over! Score: ${playerScore} : ${computerScore}` : `Tie! Score: ${playerScore} : ${computerScore}`);
}

game();
