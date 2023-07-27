let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let choice = [rock, paper, scissors];
let roundWinner = '';

//function to prompt and validate the users response
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
        //converts prompt to lowercase*/
        const playerResponse = promptResponse.toLowerCase();

        //check if user response is one of the three option
        if (choice.includes(playerResponse)){
            //if it is, stops loop and returns the user prompt
            validation = true;
            return playerResponse;
        } 
    }
}

//function to randomize what the computer will do
function getComputerChoice(){
    //gets random index of choice array
    const selection = choice[Math.floor(Math.random()*choice.length)];
    return selection;
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
    let winner = checkWinner(playerSelection, computerSelection);
    //returns the winner, used by game() to tally 
    if (winner == "Player"){
        return "Player";
    } else if (winner == "Computer"){
        return "Computer";
    } else if (winner == "Tie"){
        return "Tie!!";
    }
}

function game(){
    //how many times the playround function will get called
    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++){
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
    }

    //after the 5th turn, for loop is over
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("Player WINS@!@!@!@!");
    } else if (computerScore > playerScore){
        console.log("Computer Wins :( :( :( :(");
    } else if (playerScore = computerScore){
        console.log("TIE@@!@@!@!!@");
    }
}

game();