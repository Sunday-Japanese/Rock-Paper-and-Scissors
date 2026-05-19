//console.log(getHumanChoice());

let getComputerChoice = function() {
    let number = Math.floor(Math.random()*3 + 1);
    
    if (number === 1) {
        console.log("computer choose rock");
        return "rock";
    } else if (number === 2) {
        console.log("computer choose paper");
        return "paper";
        } else {
            console.log("computer choose  scissors");
            return "scissors";
        }
};

function getHumanChoice() {
    let option = prompt("Either Choose rock , paper or scissors" , "").toLowerCase();
    
    if (option === "rock") {
        console.log("you choose ==>  rock");
        return  "rock";
    }  else if (option === "scissors") {
        console.log("you choose   scissors");
        return "scissors";
        } else if   (option === "paper") {
            console.log("you choose   paper");
            return "paper";
        } else {
            console.log("please enter rock,paper or scissors");
        }
    
    }

    let humanScore = 0;
    let computerScore = 0;

function playRound(getHumanChoice,getComputerChoice) {
    let human = getHumanChoice;
    let gadget = getComputerChoice;
    if (human === "rock" && gadget === "paper")  {
        console.log('You Lose! Paper beats Rock');
        computerScore++;
    } else if (human === "paper" && gadget === "rock") {
        console.log('You Win! Paper beats Rock');
        humanScore++;
        } else if (human === "scissors" && gadget === "rock") {
            console.log("You Lose! Rock beats Scissors"); 
            computerScore++;
            } else if (human ==="rock" && gadget === "scissors") {
                console.log("You Win! Rock Beats Scissors");
                humanScore++;
            } else if (human ==="paper" && gadget === "scissors") {
                console.log("You Lose! Scissors beats Paper"); 
                computerScore++;
                } else if (human === "scissors" &&  gadget === "paper"){
                    console.log("You Win! Scissors Beats Paper");
                    humanScore++;
                        } else if (human === "rock" && gadget === "rock" ) {
                            console.log("It's draw ! Rock is same as Rock");
                            } else if (human === "paper" && gadget === "paper") {
                                console.log("It's draw Paper is same as paper")
                            } else if (human === "scissors" && gadget === "scissors") {
                                console.log("It's a draw! Scissors is same as Scissors");
                                } else {
                                    console.log("why? seriously are you dumb or just stupid!");
                            }
    return console.log(`Your Score: ${humanScore}  Computer Score ${computerScore}`);
}

let humanSelection = getHumanChoice;
let computerSelection = getComputerChoice;

//playRound(humanSelection,computerSelection)
function playGame() {
    for(i = 1;i < 6;i++) {
        playRound(humanSelection(),computerSelection())
        switch (true) {
            case (humanScore > computerScore):
            console.log("You are the Winner!");
            break;
            case (computerScore > humanScore):
            console.log("Computer is the Winner!")
            break;
            case (computerScore === humanScore):
            console.log("No Winners! it is draw")
            break;
            default:
            console.log("error")
        }
    }
    
}
playGame()
//playRound(humanSelection(),computerSelection())

