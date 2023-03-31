/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const TotalScore = { computerScore: 0, playerScore: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const Choice = ['rock', 'paper', 'scissors'];

    let num = Math.floor(Math.random() * Choice.length);
    return Choice[num];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost

    let score = 0;

    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
        score = 0;
        // All situations where human wins, set `score` to 1
        // make sure to use else ifs here
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        score = 1;
        TotalScore.playerScore++;
        TotalScore.computerScore--;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        score = 1;
        TotalScore.playerScore++;
        TotalScore.computerScore--;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        score = 1;
        TotalScore.playerScore++;
        TotalScore.computerScore--;
    }
    // Otherwise human loses (aka set score to -1)
    else {
        score = -1;
        TotalScore.computerScore++;
        TotalScore.playerScore--;
    }
    // return score
    return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    const ResultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');
    if (score == -1) {
        ResultDiv.innerText = 'You  Lose!';
    } else if (score == 0) {
        ResultDiv.innerText = "It's a tie!";
    } else {
        ResultDiv.innerText = 'You Won!';
    }
    playerScoreDiv.innerText = `Total👱 score: ${TotalScore.playerScore}  Total 🤖 score:${TotalScore.computerScore}`;
    handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice} `;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerschoice = getComputerChoice();
    const scores = getResult(playerChoice, computerschoice);
    showResult(scores, playerChoice, computerschoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton')
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    });

    //!SECTION Add a click listener to the end game button that runs the endGame() function on click
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()

}

// ** endGame function clears all the text on the DOM **
function endGame() {
    TotalScore.playerScore = 0;
    TotalScore.computerScore = 0;
    const ResultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');
    ResultDiv.innerText= ' ';
    handsDiv.innerText=' ';
    playerScoreDiv.innerText=' ';
}

playGame()