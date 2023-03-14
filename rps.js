let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result="";

    if((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')){

            playerScore+=1;
            result += ('You win! ' + playerSelection + ' beats ' + computerSelection);
            
            if (playerScore == 5) {
                result = 'You won!!';
                disableButtons();
            }
        }
    else if(playerSelection == computerSelection){
        result='It is a tie!';
    }

    else{
        computerScore +=1;
        result += ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        if (computerScore == 5) {
            result = 'I won!!'
            disableButtons()
        }
    }
     document.getElementById('result').innerHTML = result;
     document.getElementById('user_score').innerHTML = playerScore;
     document.getElementById('computer_score').innerHTML = computerScore;

     return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    });
})

