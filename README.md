# rpc-odin



// Paso 5: Crear la función playRound
function playRound(humanChoice, computerChoice) {
    console.log("Tu elección: " + humanChoice);
    console.log("Elección de la computadora: " + computerChoice);

    // Comparar las elecciones
    if (humanChoice === computerChoice) {
        console.log("Es un empate.");
        return "empate";
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        console.log("¡Ganaste! " + humanChoice + " le gana a " + computerChoice);
        humanScore++;  // Incrementa la puntuación del humano
        return "humano";
    } else {
        console.log("¡Perdiste! " + computerChoice + " le gana a " + humanChoice);
        computerScore++;  // Incrementa la puntuación de la computadora
        return "computadora";
    }
}

// Paso 6: Crear la función playGame
function playGame() {
    for (let i = 0; i < 5; i++) {  // Jugar 5 rondas
        console.log(`Ronda ${i + 1}:`);
        const humanChoice = getHumanChoice();  // Obtener elección del humano
        const computerChoice = getComputerChoice();  // Obtener elección de la computadora
        playRound(humanChoice, computerChoice);  // Jugar la ronda
    }

    // Mostrar el resultado final
    console.log(`\nResultado final:`);
    console.log(`Puntuación del humano: ${humanScore}`);
    console.log(`Puntuación de la computadora: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("¡Felicidades! Ganaste el juego.");
    } else if (computerScore > humanScore) {
        console.log("¡Lo siento! La computadora ganó el juego.");
    } else {
        console.log("El juego terminó en empate.");
    }
}

// Iniciar el juego
playGame();