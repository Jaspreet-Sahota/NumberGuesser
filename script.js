let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//return number from 0 to 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//determine winner
const compareGuesses = (human, computer, target) => {
    if(human > 9 || human < 0) {
        alert('Enter a number between 0 and 9');
    }

    const humanDifference = Math.abs(human - target);
    const computerDifference = Math.abs(computer - target);

    if(humanDifference === computerDifference) {
        return true;
    }
    else if(humanDifference < computerDifference) {
        return true;
    }
    else if(humanDifference > computerDifference) {
        return false;
    }
};

//change score
const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

//advance round
const advanceRound = () => {
    currentRoundNumber += 1;
}