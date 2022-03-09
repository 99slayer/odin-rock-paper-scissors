let computerScore = 0;
let playerScore = 0;

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

let resultText = document.querySelector('.result');
let playerChoice = document.querySelector('.playerChoice');
let compChoice = document.querySelector('.compChoice');

let playerScoreText = document.querySelector('.playerScore') ;
let compScoreText = document.querySelector('.compScore');

playerScoreText.textContent = `${playerScore}`;
compScoreText.textContent = `${computerScore}`;

// nodelist
const btn = document.querySelectorAll('button');

btn.forEach( (node) => {
    node.addEventListener('click', (e) => {
        if(e.target.className == 'rock button'){
            playRound('rock');
        }
        else if(e.target.className == 'paper button'){
            playRound('paper');
        }
        else{
            playRound('scissors');
        }
        if(computerScore == 5){
            computerScore = 0;
            playerScore = 0;
            playerChoice.textContent = 'The computer has won best of five.';
            compChoice.textContent = '';
        }
        if(playerScore == 5){
            computerScore = 0;
            playerScore = 0;
            playerChoice.textContent = 'You won best of five!';
            compChoice.textContent = '';
        }
        playerScoreText.textContent = `${playerScore}`;
        compScoreText.textContent = `${computerScore}`;
    })
})

function playRound(playerSelection){
    let input = playerSelection;
    console.log(`compscore ${computerScore} playerscore ${playerScore}`);
    console.log(`You have chosen ${input}.`);

    let computerSelection = computerPlay();

    playerChoice.textContent = `You have chosen ${playerSelection}.`;
    compChoice.textContent = `The computer has chosen ${computerSelection}.`;

    if(input===computerSelection){
        resultText.textContent = 'It\'s a tie.';
        return;
    }
    else if(input==='rock' && computerSelection==='paper'){
        resultText.textContent = 'Computer wins.';
        return ++computerScore;
    }
    else if(input==='rock' && computerSelection==='scissors'){
        resultText.textContent = 'User wins.';
        return ++playerScore;
    }
    else if(input==='paper' && computerSelection==='rock'){
        resultText.textContent = 'User wins.';
        return ++playerScore;
    }
    else if(input==='paper' && computerSelection==='scissors'){
        resultText.textContent = 'Computer wins.';
        return ++computerScore;
    }
    else if(input==='scissors' && computerSelection==='rock'){
        resultText.textContent = 'Computer wins.';
        return ++computerScore;
    }
    else if(input==='scissors' && computerSelection==='paper'){
        resultText.textContent = 'User wins.';
        return ++playerScore;
    }
    else{
        return;
    }
}