// rock paper scissors

// computer makes a selection at random
// math floor rounds a number down to the nearest whole integer
// math random returns a float from 0 to 0.99 *
function computerPlay(){
    let selection = Math.floor(Math.random()*3);
    if(selection==0){
        return 'rock';
    }
    else if(selection==1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

// computer selection and player selection
let computerSelection = computerPlay();
let playerSelection = window.prompt('rock, paper or scissors?');

// the 2 selections are then compared, and a winner is declared.
function playRound(playerSelection,computerSelection){
    // console.log(computerSelection); <-for testing
    let input = playerSelection.toLowerCase();

    console.log(`You have chosen ${input}.`);
    console.log(`The computer has chosen ${computerSelection}.`)

    if(input===computerSelection){
        console.log('It\'s a tie.');
        return ;
    }
    else if(input==='rock' && computerSelection==='paper'){
        console.log('Computer wins.');
        return ;
    }
    else if(input==='rock' && computerSelection==='scissors'){
        console.log('User wins.');
        return ;
    }
    else if(input==='paper' && computerSelection==='rock'){
        console.log('User wins.');
        return ;
    }
    else if(input==='paper' && computerSelection==='scissors'){
        console.log('Computer wins.');
        return ;
    }
    else if(input==='scissors' && computerSelection==='rock'){
        console.log('Computer wins.');
        return ;
    }
    else if(input==='scissors' && computerSelection==='paper'){
        console.log('User wins.');
        return ;
    }
    else{
        console.log('Invalid input.');
        return ;
    }
}
// playRound(playerSelection,computerSelection);

// we now create a new function that plays 5 rounds and keeps score.
function game(){
    // let playerScore = 0;
    // let computerScore = 0;
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);

}
game();
// play 5 games then stop