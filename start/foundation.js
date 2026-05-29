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


let computerSelection = getComputerChoice;

let buttonOne = document.createElement("button");
let buttonTwo = document.createElement("button");
let buttonThree = document.createElement("button");
let divElement = document.createElement("div");

buttonOne.addEventListener("click", () => {
    
    let divRock = document.createElement("p")
    divRock.textContent = "you selected | ROCK"
    divElement.appendChild(divRock)
});

buttonTwo.addEventListener("click",() => {
let divRock = document.createElement("p")
divRock.textContent = "you selected | PAPER"
divElement.appendChild(divRock)
})

buttonThree.addEventListener("click",() => {
let divRock = document.createElement("p")
divRock.textContent = "you selected | SCISSORS"
divElement.appendChild(divRock)
})

buttonOne.innerText = "rock"
buttonTwo.innerText = "paper"
buttonThree.innerText = "scissors"

let humanPara = document.createElement("p")
let computerPara = document.createElement("p")
let scoreHead = document.createElement("h1")
let resultPara = document.createElement("p")


//computerPara.innerText = `computer selected | ${getComputerChoice().toUpperCase()}`
//divElement.appendChild(computerPara)



document.body.appendChild(buttonOne)
document.body.appendChild(buttonTwo)
document.body.appendChild(buttonThree)
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



