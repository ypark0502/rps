function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= .33) {
        return "rock";
    } else if (computerChoice > .33 && computerChoice <= .67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose between rock, paper, and scissors");
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
        //displays the winning announcement once a player has reached 5 points
        if (humanScore >= 5) {
            div.innerText = `Human has ${humanScore} points, Computer has ${computerScore} points, Human wins!`;
        } else if (computerScore >= 5) {
            div.innerText = `Human has ${humanScore} points, Computer has ${computerScore} points, Computer wins!`;
        }

        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    console.log("You tied!");
                }
                else if (computerChoice === "paper") {
                    console.log("You lost! Paper beats Rock");
                    computerScore++;
                } else {
                    console.log("You won! Rock beats Scissors");
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You won! Paper beat Rock");
                    humanScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("You tied!");
                } else {
                    console.log("You lost! Scissors beats paper");
                    computerScore++;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lost! Rock beats Scissors");
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("You won! Scissors beats Paper");
                    humanScore++;
                } else {
                    console.log("You tied");
                }
                break;
            default:
                break;
        }
    }

    const div = document.createElement("div");
    const body = document.querySelector("body");

    const btn1 = document.querySelector("#rock");
    btn1.addEventListener("click", () => {
        humanSelection = "rock";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        div.innerText = `Current Score: Human has ${humanScore} points, Computer has ${computerScore} points`;
    })
    const btn2 = document.querySelector("#paper");
    btn2.addEventListener("click", () => {
        humanSelection = "paper";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        div.innerText = `Current Score: Human has ${humanScore} points, Computer has ${computerScore} points`;
    })
    const btn3 = document.querySelector("#scissors");
    btn3.addEventListener("click", () => {
        humanSelection = "scissors";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        div.innerText = `Current Score: Human has ${humanScore} points, Computer has ${computerScore} points`;
    })

    body.appendChild(div);

}

playGame();