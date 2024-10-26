let computerScore = 0
let humanScore = 0

// eleccion de la computadora
function getComputerChoice(){
    let randomChoice = Math.random();

    if(randomChoice < 0.33){
        return "ROCK"
    } else if (randomChoice < 0.66){
        return "PAPER"
    }   else {
        return "SCISSORS"
    }
}

// eleccion del jugador
function getHumanChoice() {
    
    let humanChoice = window.prompt("Choose: rock, paper, scissors").toUpperCase();

    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
        humanChoice = window.prompt(`You choose ${humanChoice}, thats not a valid option. Try again choosing: rock, paper, scissors.`).toUpperCase()
            }  
    return (humanChoice)
}

// funcion de ronda
function playRound(computerChoice, humanChoice){
    
    if (computerChoice === humanChoice){
        return "It's a DRAW."
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS" ||
               computerChoice === "PAPER" && humanChoice === "ROCK" ||
               computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        computerScore++;
        return computerChoice + " wins against " + humanChoice + ".\n¡COMPUTER WINS!"
    } else {
        humanScore++;
        return humanChoice + " wins against " + computerChoice + ".\n¡HUMAN WINS!"
    }
}
    
    

// funcion main

function playGame(){
    
    for(let i = 1; i <= 5; i++){

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log("\n\nROUND " + i)
        console.log(`\nComputer chose: ${computerChoice}`);
        console.log(`Human chose: ${humanChoice}`);
        console.log("\n" + playRound(computerChoice, humanChoice));
        let score = "\nComputer score = " + computerScore +  " | Human score " + humanScore
        console.log(score)
    } 
    
    if (computerScore === humanScore){
        console.log("\nThe game is over.\nIt was a DRAW.")
    }   else if(computerScore > humanScore){
        console.log("\nThe game is over.\n¡The COMPUTER has won!")
    }   else  {
        console.log("\nThe game is over.\n¡The HUMAN has won!")
    }
}

playGame()