// return a random number, convert into a choice of strings

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    switch (true) {
        case randomNum == 0:
            return "rock";
            break;
        case randomNum == 1:
            return "paper";
            break;
        case randomNum == 2:
            return "scissors";
            break;
    }
}

// determine if player or computer won

let playerWon = false;
let computerWon = false;
let wonOrLostOrTie = "";

// play a round!

function playRound(playerSelection, computerSelection) {


    switch (true) {

        // optimize code to be conditional on playerselection... break up this giant function into something smaller

        case playerSelection === computerSelection:
            wonOrLostOrTie = "tie!";
            playerWon = false;
            computerWon = false;
            break;

        case playerSelection === "rock" && computerSelection === "paper":
            wonOrLostOrTie = "you lose, paper beats rock!";
            playerWon = false;
            computerWon = true;
            break;

        case playerSelection === "paper" && computerSelection === "rock":
            wonOrLostOrTie = "you win, paper beats rock!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "paper" && computerSelection === "scissors":
            wonOrLostOrTie = "you lose, scissors beats paper!";
            playerWon = false;
            computerWon = true;
            break;

        case playerSelection === "scissors" && computerSelection === "paper":
            wonOrLostOrTie = "you win, scissors beats paper!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "rock" && computerSelection === "scissors":
            wonOrLostOrTie = "you win, rock beats scissors!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "scissors" && computerSelection === "rock":
            wonOrLostOrTie = "you lose, rock beats scissors!";
            playerWon = false;
            computerWon = true;
            break;

        default:
            wonOrLostOrTie = "uh oh. error?";
            break;
    }
    // return response;

}

// initalize necessary variables

let playerSelection = " ";
let computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;

// add computer or player points

function addPoints() {

    if (playerWon == true) {
        playerPoints++;
    }
    else if (computerWon == true) {
        computerPoints++;
    }
    else {

    }
}

//////////////////// DISPLAY IF PLAYER WON OR LOST CURRENT ROUND
const outcomeText = document.createElement('p');

const currentOutcome = document.querySelector('.currentOutcome');

function updateOutcomeText() {
    outcomeText.textContent = wonOrLostOrTie;
}

currentOutcome.appendChild(outcomeText);

//////////////////// DISPLAY POINTS OF CURRENT ROUND
const pointsText = document.createElement('p');

const currentPoints = document.querySelector('.currentPoints')

function updatePointsText() {
    pointsText.textContent = `player has ${playerPoints}. computer has ${computerPoints}.`;
}

currentPoints.appendChild(pointsText);

/////////////////// WIN DISPLAY
// container to hold win image + text
const winContainer = document.createElement('div');
winContainer.classList.add('winContainer');

// img to insert upon losing
const winImg = document.createElement('img');
winImg.src = 'img/playerwon.jpg';

// text to insert upon losing
const winText = document.createElement('p');
winText.textContent = "you win!!!!!!";

// combine container, img, text in that order
winContainer.appendChild(winImg);
winContainer.appendChild(winText);

////////////////////LOSE DISPLAY
// container to hold lose image + text
const loseContainer = document.createElement('div');
loseContainer.classList.add('loseContainer');

// img to insert upon losing
const loseImg = document.createElement('img');
loseImg.src = 'img/playerlost.jpg';

// text to insert upon losing
const loseText = document.createElement('p');
loseText.textContent = " youuuuu loseeee...."

// combine container, img, text in that order
loseContainer.appendChild(loseImg);
loseContainer.appendChild(loseText);

////////////////////TIE DISPLAY
// container to hold tie image + text
const tieContainer = document.createElement('div');
tieContainer.classList.add('tieContainer');

// img to insert upon losing
const tieImg = document.createElement('img');
tieImg.src = 'img/playertie.png';

// text to insert upon losing
const tieText = document.createElement('p');
tieText.textContent = "um... a tie!"

// combine container, img, text in that order
tieContainer.appendChild(tieImg);
tieContainer.appendChild(tieText);

/////////// find "winorlose" to store result in
const winOrLose = document.querySelector('.winOrLose')
////////////////DISPLAY TEXT FOR NEW GAME
const newGameText = document.createElement('p');

const newGameBody = document.querySelector('.showNewGame')

function updateNewGame() {
    newGameText.textContent = `new game.... lets begin!!!`;
}

newGameBody.appendChild(newGameText);


//////////////////// ANNOUNCE WINNER OF GAME (5 ROUNDS)
function announceWinner() {
    // if the computer wins...
    if (computerPoints > playerPoints) {
        // console.log(`computer wins the game! click to play again.`);

        // display losing screen..
        finalWinner.appendChild(loseContainer);

        // // check if winning screen is present, if so, remove..
        // if (finalWinner.querySelector('.winContainer')) {
        //     finalWinner.removeChild(winContainer);
        // }

        // // reset the points to zero..
        // computerPoints = 0;
        // playerPoints = 0;

    }

    // if the player wins...
    else if (playerPoints > computerPoints) {
        // console.log(`player wins the game! click to play again.`);

        // display winning screen..
        finalWinner.appendChild(winContainer);

        // // check if losing screen is present, if so, remove
        // if (finalWinner.querySelector('.loseContainer')) {
        //     finalWinner.removeChild(loseContainer);
        // }

        // reset points to zero..
        // computerPoints = 0;
        // playerPoints = 0;
    }

    else if (playerPoints == computerPoints) {
        //display tie screen..
        finalWinner.appendChild(tieContainer);

    }
}



// play a game of five rounds

// function game() {
//     for (let i = 0; i < 5; i++) {


//         alert(playRound(playerSelection, computerSelection));

//         if (playerWon == true) {
//             playerPoints++;
//         }
//         else if (computerWon == true) {
//             computerPoints++;
//         }
//         else {

//         }

//         console(`Player has ${playerPoints} points. Computer has ${computerPoints} points.`);


//     }

// }


// check if lose or win displays are present and remove
function removeContainer() {
    if (winOrLose.querySelector('.loseContainer')) {
        winOrLose.removeChild(loseContainer);
    }
    else if (winOrLose.querySelector('.winContainer')) {
        winOrLose.removeChild(winContainer);
    }
    else if (winOrLose.querySelector('.tieContainer')) {
        winOrLose.removeChild(tieContainer);
    }

}
// keep track of number of current round
let currentRound = 0;

// check if the current session is a new game
function isNewGame() {
    if (currentRound == 0) {
        return true;
    }
}

// attach an event listener for each button
const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');


// play a game upon click of button. 
rockButton.addEventListener('click', () => {
    console.log(currentRound);
    // for a new game, remove win/lose statements, tell player new game has started, skip adding points for one round
    if (isNewGame() == true) {
        updatePointsText();
        console.log('new game started! lets rumble....')
        removeContainer();
        currentRound++;
    }
    else if (currentRound >= 1 && currentRound <= 4) {
        playerSelection = "rock"; // make player selection rock

        computerSelection = getComputerChoice(); // randomize computer choice

        console.log(playRound("rock", computerSelection)); // display result of who won in console

        addPoints();

        // function to update message displaying current points
        updatePointsText();

        // only update current round if there has been no tie..
        if (!(playerWon == false && computerWon == false)) {
            currentRound++
        }

    }
    // if the game has ended...
    else if (currentRound == 5) {
        updatePointsText();
        announceWinner();
        currentRound = 0;
        computerPoints = 0;
        playerPoints = 0;
    }

})

scissorsButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(); // randomize computer choice
    console.log(playRound("scissors", computerSelection));
    addPoints();
    console.log(`player has ${playerPoints}. computer has ${computerPoints}`);
    if (computerPoints >= 5 || playerPoints >= 5) {
        announceWinner();
    }

})

paperButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(); // randomize computer choice
    console.log(playRound("paper", computerSelection));
    addPoints();
    console.log(`player has ${playerPoints}. computer has ${computerPoints}`);
    if (computerPoints >= 5 || playerPoints >= 5) {
        announceWinner();
    }
})
