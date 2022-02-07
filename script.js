// rock paper scissors
// im not sure why the project page wanted the 2 selections to be parameters, it seems better to just have them inside the function?

// math floor rounds a number down to the nearest whole integer
// math random returns a float from 0 to 0.99 *

// computer makes a selection at random
function computerPlay(){
    let selection = Math.floor(Math.random()*3);
    if(selection==0){
        console.log('The computer has chosen rock.');
        return 'rock';
    }
    else if(selection==1){
        console.log('The computer has chosen paper.');
        return 'paper';
    }
    else{
        console.log('The computer has chosen scissors.');
        return 'scissors';
    }
}
// this function compares the output from computerPlay and the players input to return a true or false value.
function playRound(){
    let playerSelection = window.prompt('rock, paper, or scissors?');
    let input = playerSelection.toLowerCase();

    console.log(`You have chosen ${input}.`);

    let computerSelection = computerPlay();

    if(input===computerSelection){
        console.log('It\'s a tie.');
        return null;
    }
    else if(input==='rock' && computerSelection==='paper'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='rock' && computerSelection==='scissors'){
        console.log('User wins.');
        return true;
    }
    else if(input==='paper' && computerSelection==='rock'){
        console.log('User wins.');
        return true;
    }
    else if(input==='paper' && computerSelection==='scissors'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='scissors' && computerSelection==='rock'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='scissors' && computerSelection==='paper'){
        console.log('User wins.');
        return true;
    }
    else{
        console.log('Invalid input.');
        return null;
    }
}
// Score variables
let computerScore = 0;
let playerScore = 0;

// this function takes the output of playRound, and depending on the winner of that round adds 1 to their score. (Does nothing if it was a tie.)
function roundOutcome(){
    let outcome = playRound();
    if(outcome==false){
        return ++computerScore;
    }
    else if(outcome==true){
        return ++playerScore;
    }
    else{
        return null;
    }
}
// this function plays 5 rounds, declares a winner and then stops
function game(){
    roundOutcome();
    console.log(`Computer score = ${computerScore}.\nPlayer score = ${playerScore}.`)
    roundOutcome();
    console.log(`Computer score = ${computerScore}.\nPlayer score = ${playerScore}.`)
    roundOutcome();
    console.log(`Computer score = ${computerScore}.\nPlayer score = ${playerScore}.`)
    roundOutcome();
    console.log(`Computer score = ${computerScore}.\nPlayer score = ${playerScore}.`)
    roundOutcome();
    console.log(`Computer score = ${computerScore}.\nPlayer score = ${playerScore}.`)

    if(playerScore>computerScore){
        return console.log('You have won the best of 5!');
    }
    else if(playerScore<computerScore){
        return console.log('The computer has won the best of 5.');
    }
    else if(playerScore===computerScore){
        return console.log('The best of 5 has ended in a tie.');
    }
    else{
        return console.log('Outcome unknown.');
    }
}
// execute the game function
game();