// rock paper scissors

// computer makes a selection at random
// math floor rounds a number down to the nearest whole integer
// math random returns a float from 0 to 0.99 *
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

// create a player selection function that limits out input to one of the 3 desired choices.
// sadly it seems we may not beable to limit input with window.prompt
// function playerSelection(){
//     let rawInput = window.prompt('rock, paper, or scissors?');
//     let userInput = rawInput.toLowerCase();
//     if(userInput==='rock'){
//         console.log('You have chosen rock.');
//         return 'rock';
//     }
//     else if(userInput==='paper'){
//         console.log('You have chosen paper.');
//         return 'paper';
//     }
//     else if(userInput==='scissors'){
//         console.log('You have chosen scissors.');
//         return 'scissors';
//     }
//     else{
//         console.log('Invalid input, try again.');
//         playerSelection();
//     }
// }
// the 2 selections are then compared, and a winner is declared.
// im not sure why the project page wanted the 2 selections to be parameters, it seems better to just have them inside the function?
function playRound(){
    let playerSelection = window.prompt('rock, paper, or scissors?');
    let input = playerSelection.toLowerCase();

    console.log(`You have chosen ${input}.`);

    let computerSelection = computerPlay();

    if(input===computerSelection){
        console.log('It\'s a tie.');
        return 0;
    }
    else if(input==='rock' && computerSelection==='paper'){
        console.log('Computer wins.');
        return -1;
    }
    else if(input==='rock' && computerSelection==='scissors'){
        console.log('User wins.');
        return 1;
    }
    else if(input==='paper' && computerSelection==='rock'){
        console.log('User wins.');
        return 1;
    }
    else if(input==='paper' && computerSelection==='scissors'){
        console.log('Computer wins.');
        return -1;
    }
    else if(input==='scissors' && computerSelection==='rock'){
        console.log('Computer wins.');
        return -1;
    }
    else if(input==='scissors' && computerSelection==='paper'){
        console.log('User wins.');
        return 1;
    }
    else{
        console.log('Invalid input.');
        return 0;
    }
}
let score = 0;
// we now create a new function that plays 5 rounds and keeps score.
// *** NEED TO CREATE SEPERATE SCORES FOR USER AND COMPUTER ***
function game(){
    playRound() + score;
    playRound() + score;
    playRound() + score;
    playRound() + score;
    playRound() + score;
    console.log(score);
    if(score<3){
        return console.log('Computer has won the best of 5')
    }
    else if(score>=3){
        return console.log('You have won the best of 5!')
    }
    else{
        return console.log('Outcome unknown.')
    }
}
game();
// play 5 games then stop