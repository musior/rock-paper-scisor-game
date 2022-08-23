//Creat a function that randomly selects a choice of computer
function getComputerChoice() {
    //Creat variable computerChoice
    let computerChoice;
    computerChoice = Math.floor(Math.random()*3)+1;
        if (computerChoice === 1) {
            computerChoice = "paper";
            return computerChoice;
        } else if (computerChoice === 2) {
            computerChoice = "rock";
            return computerChoice;
        } else {
            computerChoice = "scissors";
            return computerChoice;
        }        
}

//Creat a function that plays a single round of Rock Paper Scissors game
function playRound (playerChoice, computerChoice) {
    //Creat if statment to check who's won
    if (playerChoice === "paper" && computerChoice === "paper") {
        console.log("It's tie!");
        return "It's tie!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore ++;
        console.log("You won! Paper beats rock.");
        return "You won! Paper beats rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
        console.log("You lose! Scissors beats paper.");
        return "You lose! Scissors beats paper.";
    } else if (playerChoice === "rock" && computerChoice === "rock") {
        console.log("It's tie!");
        return "It's tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
        console.log("You lose! Paper beats rock.");
        return "You lose! Paper beats rock.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore ++;
        console.log("You won! Rock beats scissors.");
        return "You win! Rock beats scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's tie!");
        return "It's tie!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
        console.log("You lose! Rock beats scissors.");
        return "You lose! Rock beats scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore ++;
        console.log("You won! Scissors beats paper.");
        return "You win! Scissors beats paper.";
    }
}

let playerScore = 0;
let computerScore = 0;

//Creat a function with the real game. Run it 5 times and check who is the winner
function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelect = prompt("What weapon do you choose?");
        playerSelect = playerSelect.toLowerCase();
        console.log("Round: " + i);
        playRound(playerSelect,getComputerChoice());
        console.log("Current score is: player score - " + playerScore + ", computer score - " + computerScore);
        /* checking the validity of the variable entered by the user - need to think how to make 5 round even when user put 5 times wrong words.  
        if (!(playerSelect === "paper" || playerSelect === "rock" || playerSelect === "scissors")){
            alert("You choose a bad weapon! Take somethink like this: rock,paper or scissors! Good luck next time!");
        }
        else {
            console.log("Round: " + i);
            playRound(playerSelect,getComputerChoice());
            console.log("Current score is: player score - " + playerScore + ", computer score - " + computerScore);
        }*/   
    }
    if (playerScore > computerScore) {
        console.log("You win!");
        console.log(`Player score: ${playerScore} and computer score: ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log("You lose!");
        console.log(`Player score: ${playerScore} and computer score: ${computerScore}.`);
    } else {
        console.log("It's tie!");
        console.log(`Player score: ${playerScore} and computer score: ${computerScore}.`);
    }
}

game();