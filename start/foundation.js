//console.log(getHumanChoice());

let getComputerChoice = function() {
    let number = Math.floor(Math.random()*3 + 1);
    
    // Randomly generates rock , paper or scissor
    if (number === 1) {
            return "rock";
    } else if (number === 2) {
            return "paper";
        } else {
            return "scissors";
        }
};

// Reads use input through prompt
function getHumanChoice() {
    let option = prompt("Either Choose rock , paper or scissors" , "").toLowerCase();
    
    if (option === "rock") {
        return  "rock";
    }  else if (option === "scissors") {
        return "scissors";
        } else if   (option === "paper") {
        return "paper";
        } else {
        return "please enter rock,paper or scissors"
        }
    
    }

    let humanScore = 0;
    let computerScore = 0;

    // Returns the status of the game played
function playRound(getHumanChoice,getComputerChoice) {
    let human = getHumanChoice;
    let gadget = getComputerChoice;
    if (human === "rock" && gadget === "paper")  {
        return 'You Lose! Paper beats Rock'
        computerScore++;
    } else if (human === "paper" && gadget === "rock") {
        return 'You Win! Paper beats Rock'
        humanScore++;
        } else if (human === "scissors" && gadget === "rock") {
        return "You Lose! Rock beats Scissors" 
            computerScore++;
            } else if (human ==="rock" && gadget === "scissors") {
                return "You Win! Rock Beats Scissors"
                humanScore++;
            } else if (human ==="paper" && gadget === "scissors") {
                return "You Lose! Scissors beats Paper" 
                computerScore++;
                } else if (human === "scissors" &&  gadget === "paper"){
                    return "You Win! Scissors Beats Paper"
                    humanScore++;
                        } else if (human === "rock" && gadget === "rock" ) {
                            return "It's draw ! Rock is same as Rock"
                            } else if (human === "paper" && gadget === "paper") {
                                return "It's draw Paper is same as paper"
                            } else if (human === "scissors" && gadget === "scissors") {
                                return "It's a draw! Scissors is same as Scissors"
                                } else {
                                    return "why? seriously are you dumb or just stupid!"
                            }
    return `Your Score: ${humanScore} | Computer Score ${computerScore}`
}

let humanSelection = getHumanChoice;
let computerSelection = getComputerChoice;

let buttonOne = document.createElement("button");
let buttonTwo = document.createElement("button");
let buttonThree = document.createElement("button");

buttonOne.addEventListener("click",() => playRound)
buttonTwo.addEventListener("click",() => playRound)
buttonThree.addEventListener("click",() => playRound)

let divElement = document.createElement("div");



