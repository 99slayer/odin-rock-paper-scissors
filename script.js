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
let computerSelection = computerPlay();

// the 2 selections are then compared, and a winner is declared.
function outcome(){
    // console.log(computerSelection); <-for testing
    let playerSelection = window.prompt('rock, paper, or scissors?');
    let input = playerSelection.toLowerCase();

    console.log(`You have chosen ${input}.`);
    console.log(`The computer has chosen ${computerSelection}.`)

    if(input===computerSelection){
        return console.log('It\'s a tie.');
    }
    else if(input==='rock' && computerSelection==='paper'){
        return console.log('Computer wins.');
    }
    else if(input==='rock' && computerSelection==='scissors'){
        return console.log('User wins.');
    }
    else if(input==='paper' && computerSelection==='rock'){
        return console.log('User wins.');
    }
    else if(input==='paper' && computerSelection==='scissors'){
        return console.log('Computer wins.');
    }
    else if(input==='scissors' && computerSelection==='rock'){
        return console.log('Computer wins.');
    }
    else{
        return console.log('User wins.');
    }
}
outcome();
// play 5 games then stop