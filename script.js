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

// play a round!

function playRound(playerSelection, computerSelection) {
    let response = "";

    switch (true) {

        // optimize code to be conditional on playerselection... break up this giant function into something smaller

        case playerSelection === computerSelection:
            response = "tie!";
            playerWon = false;
            computerWon = false;
            break;

        case playerSelection === "rock" && computerSelection === "paper":
            response = "you lose, paper beats rock!";
            playerWon = false;
            computerWon = true;
            break;

        case playerSelection === "paper" && computerSelection === "rock":
            response = "you win, paper beats rock!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "paper" && computerSelection === "scissors":
            response = "you lose, scissors beats paper!";
            playerWon = false;
            computerWon = true;
            break;

        case playerSelection === "scissors" && computerSelection === "paper":
            response = "you win, scissors beats paper!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "rock" && computerSelection === "scissors":
            response = "you win, rock beats scissors!";
            playerWon = true;
            computerWon = false;
            break;

        case playerSelection === "scissors" && computerSelection === "rock":
            response = "you lose, rock beats scissors!";
            playerWon = false;
            computerWon = true;
            break;

        default:
            response = "uh oh. error?";
            break;
    }
    return response;

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

// container to hold win image + text
const winContainer = document.createElement('div');
winContainer.classList.add('container');

// img to insert upon losing
const winImg = document.createElement('img');
winImg.src = 'img/playerwon.jpg';

// text to insert upon losing
const winText = document.createElement('p');
winText.textContent = "youuuuu win!!!"

// combine container, img, text in that order
winContainer.appendChild(winImg);
winContainer.appendChild(winText);

////////////////////
// container to hold lose image + text
const loseContainer = document.createElement('div');
loseContainer.classList.add('container');

// img to insert upon losing
const loseImg = document.createElement('img');
loseImg.src = 'img/playerlost.jpg';

// text to insert upon losing
const loseText = document.createElement('p');
loseText.textContent = "youuuuu loseeee...."

// combine container, img, text in that order
loseContainer.appendChild(loseImg);
loseContainer.appendChild(loseText);

// find "winorlose"
const winOrLose = document.querySelector(".winorlose")

function announceWinner() {
    switch (true) {
        case (computerPoints == 5):
            computerPoints = 0;
            playerPoints = 0;
            console.log(`computer wins the game! click to play again.`);
            winOrLose.appendChild(loseContainer);
            break;

        case (playerPoints == 5):
            computerPoints = 0;
            playerPoints = 0;
            console.log(`player wins the game! click to play again.`);
            winOrLose.appendChild(winContainer);
            break;
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


// attach an event listener for each button
const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');


// play a game upon click of button
rockButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(); // randomize computer choice
    console.log(playRound("rock", computerSelection));
    addPoints();
    console.log(`player has ${playerPoints}. computer has ${computerPoints}`);
    if (computerPoints >= 5 || playerPoints >= 5) {
        announceWinner();
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
