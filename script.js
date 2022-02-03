// rock paper scissors

// computer makes a selection at random
// math floor rounds a number down to the nearest whole integer
function computerSelection(){
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
console.log(computerSelection());
// I make a selection

// the 2 selections are then compared
// a winner is declared
// play 5 games then stop