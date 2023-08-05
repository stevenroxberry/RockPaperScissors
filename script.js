//create obbjects so we add them to the array of choice, this allows us to randomly select an item from the choices
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let choice = [rock, paper, scissors];

//intialize the competitors score
let playerScore = 0;
let computerScore = 0;

//initalize the total matches won for the scoreboard
let playerMatchesWon = 0;
let computerMatchesWon = 0;

//create object to the choice button so they can gather the random value
const buttons = document.querySelectorAll('button');


//who wins the individual round
const roundResult = document.createElement('div');
roundResult.classList.add('roundResult');

//first to five wins the match
const matchResult = document.createElement('div');
matchResult.classList.add('matchResult');

//allows to add object to button gameplay
const roundWinner = document.querySelector('#round-winner');

//allows us to add objects to scoreboard 
const scoreboard = document.querySelector('#scoreboard');

//create replay button. ask player to play again
const replayButton = document.createElement('button');
replayButton.classList.add('replayButton');
replayButton.innerText = 'Rematch?';

//keep tabs off total score
const totalScore = document.createElement('div');
totalScore.classList.add('div');



/*
//function to prompt and validate the users response, no longer used
function getPlayerChoice(){
    //set condition false
    let validation = false;
    //wrap this function, will loop until criteria is met
    while(validation == false){
        const promptResponse = prompt("Rock Paper or Scissors");

        //while prompt is empty
        while(promptResponse == null){
            console.log("Wrong response");
            //we will loop around if response is null
            continue;
        }
        //converts prompt to lowercase
        const playerResponse = promptResponse.toLowerCase();

        //check if user response is one of the three option
        if (choice.includes(playerResponse)){
            //if it is, stops loop and returns the user prompt
            validation = true;
            return playerResponse;
        } 
    }
}
*/

//function to randomize what the computer will do
function getComputerChoice(){
    //gets random index of choice array
    const selection = choice[Math.floor(Math.random()*choice.length)];
    return selection;
}


//pass through the playRound to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value, getComputerChoice());
    })
})

function resetScores(){
    playerScore = 0;
    computerScore = 0;
}

function enableBtn() {
    const buttonRow = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
      }
}

function disableBtn() {
    const buttonRow = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
}



function checkWinner(playerSelection, computerSelection){
    //conditions if player wins
    if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
      return "Player";
    } //checks if draw
      else if (playerSelection == computerSelection) {
      return "Tie";
    } else {
      //all esle, computer wins
      return "Computer";    
  } 
}



function playRound(playerSelection, computerSelection){
    //create a variable for the winner of each round, used by game() to tally the scores up
    //returns the winner, used by game() to tally 

    console.log('player ' + playerSelection);
    console.log('computer ' + computerSelection);


    if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){      
    playerScore += 1; 
    roundResult.textContent = ("Player: "+ playerSelection + " Computer: " + computerSelection + " The Player Wins!");
    scoreboard.appendChild(roundResult);
    } //checks if draw
      else if (playerSelection == computerSelection) {
      roundResult.textContent =  ("Player: "+ playerSelection + " Computer: " + computerSelection + " Its a Draw!");
      scoreboard.appendChild(roundResult);
    } else {
      //all esle, computer wins
      computerScore++   
      roundResult.textContent =  ("Player: "+ playerSelection + " Computer: " + computerSelection + " The Computer Wins!");
      scoreboard.appendChild(roundResult);
    } 

    if(playerScore == 5){
        matchResult.textContent = "The Player Wins!"
        scoreboard.appendChild(matchResult);
        disableBtn();
        scoreboard.appendChild(replayButton);
        playerMatchesWon += 1;
        console.log(playerMatchesWon)

    } else if (computerScore == 5){
        matchResult.textContent = "The Computer Wins!"
        scoreboard.appendChild(matchResult);
        disableBtn();
        scoreboard.appendChild(replayButton);
        computerMatchesWon += 1;
        console.log(computerMatchesWon);
    }

    computer
}

replayButton.addEventListener('click', () => {
    enableBtn();
    resetScores();
    document.getElementById("scoreboard").removeChild(roundResult);
    document.getElementById("scoreboard").removeChild(matchResult);
    document.getElementById("scoreboard").removeChild(replayButton);
});
/* old game function that was used when 
function game(){
    //how many times the playround function will get called
    let computerScore = 0;
    let playerScore = 0;

    
    //get player respomse
    const playerChoice = getPlayerChoice();
    //get random computer options
    const computerChoice = getComputerChoice();
    
    //lets play a round
    console.log(playRound(playerChoice, computerChoice));
    console.log("---------------------");

    //checks to see who won the round and adds score
    if(checkWinner(playerChoice, computerChoice) == "Player"){
        playerScore++;
    } else if (checkWinner(playerChoice, computerChoice) == "Computer"){
        computerScore++;
    }
    console.log(playerScore);
    console.log(computerScore);    


    //after the 5th turn, for loop is over
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("Player WINS@!@!@!@!");
    } else if (computerScore > playerScore){
        console.log("Computer Wins :( :( :( :(");
    } else if (playerScore = computerScore){
        console.log("TIE@@!@@!@!!@");
    }
}*/
