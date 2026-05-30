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

    let humanScore = 0;
    let computerScore = 0;

    // Returns the status of the game played
function playRound(getHumanChoice,getComputerChoice) {
    let human = getHumanChoice;
    let gadget = getComputerChoice;
    if (human === "rock" && gadget === "paper")  {
        computerScore++;
        return `You Lose! Paper beats Rock \n
                Your Score: ${humanScore} | Computer Score ${computerScore}`       
    } else if (human === "paper" && gadget === "rock") {
        humanScore++;
        return `You Win! Paper beats Rock \n
                Your Score: ${humanScore} | Computer Score ${computerScore}`        
        } else if (human === "scissors" && gadget === "rock") {
            computerScore++;
        return `You Lose! Rock beats Scissors \n 
                Your Score: ${humanScore} | Computer Score ${computerScore}`            
            } else if (human ==="rock" && gadget === "scissors") {
                humanScore++;
                return `You Win! Rock Beats Scissors \n
                        Your Score: ${humanScore} | Computer Score ${computerScore}`                
                    } else if (human ==="paper" && gadget === "scissors") {
                        computerScore++;
                return `You Lose! Scissors beats Paper \n
                Your Score: ${humanScore} | Computer Score ${computerScore}`
                        } else if (human === "scissors" &&  gadget === "paper"){
                        humanScore++;
                    return `You Win! Scissors Beats Paper \n
                            Your Score: ${humanScore} | Computer Score ${computerScore}`
                                } else if (human === "rock" && gadget === "rock" ) {
                            return `It's draw ! Rock is same as Rock
                                    Your Score: ${humanScore} | Computer Score ${computerScore}`
                            } else if (human === "paper" && gadget === "paper") {
                                return `It's draw Paper is same as paper
                                Your Score: ${humanScore} | Computer Score ${computerScore}`
                            } else if (human === "scissors" && gadget === "scissors") {
                                return `It's a draw! Scissors is same as Scissors
                                        Your Score: ${humanScore} | Computer Score ${computerScore}`
                                } else {
                                    return "why? seriously are you dumb or just stupid!"
                            }
    
}

function playGame() {
        switch (true) {
            case (humanScore === 5):
            
            return `Lol You Somehow Won 
            ${buttonOne.disabled = true}
            ${buttonTwo.disabled = true}
            ${buttonThree.disabled = true} `            
            break;
            case (computerScore === 5):
            return `You Suck Computer Won! 
            ${buttonOne.disabled = true}
            ${buttonTwo.disabled = true}
            ${buttonThree.disabled = true} `
            break;
            default:
            return ""
        }
    }
    



let computerSelection = getComputerChoice;

let resetButton = document.createElement("button");
let buttonOne = document.createElement("button");
let buttonTwo = document.createElement("button");
let buttonThree = document.createElement("button");
let divElement = document.createElement("div");

buttonOne.addEventListener("click", () => {
    let newRuler = document.createElement("hr")
        
    let divRock = document.createElement("p")
    divRock.textContent = `You selected | ROCK \n
    Computer selected | ${getComputerChoice().toUpperCase()} \n
    ${playRound("rock",getComputerChoice())} \n
    ${playGame()}
    `
    divElement.appendChild(divRock)
    divElement.appendChild(newRuler);

    
});

buttonTwo.addEventListener("click",() => {
let newRuler = document.createElement("hr")
        
    let divRock = document.createElement("p")
    divRock.textContent = `You selected | PAPER \n
    Computer selected | ${getComputerChoice().toUpperCase()} \n
    ${playRound("paper",getComputerChoice())} \n
    ${playGame()}
    `
    divElement.appendChild(divRock)
    divElement.appendChild(newRuler);
});

buttonThree.addEventListener("click",() => {
let newRuler = document.createElement("hr")
        
    let divRock = document.createElement("p")
    divRock.textContent = `You selected | SCISSORS \n
    Computer selected | ${getComputerChoice().toUpperCase()} \n
    ${playRound("scissors",getComputerChoice())} \n
    ${playGame()}
    `
    divElement.appendChild(divRock)
    divElement.appendChild(newRuler);
})

resetButton.addEventListener("click",() => location.reload())



buttonOne.innerText = "rock"
buttonTwo.innerText = "paper"
buttonThree.innerText = "scissors"
resetButton.innerText = "Restart"


document.body.appendChild(buttonOne)
document.body.appendChild(buttonTwo)
document.body.appendChild(buttonThree)
document.body.appendChild(resetButton)
document.body.appendChild(divElement)



/*function getHumanChoice() {
        
    if (buttonOne.innerText === "rock") {
        return  "rock";
    }  else if (buttonThree === "scissors") {
        return "scissors";
        } else if   (buttonTwo  === "paper") {
        return "paper";
        } else {
        return "please enter rock,paper or scissors"
        }
    
    }*/



