let playerScore = 0;
let computerScore = 0;

function play(playerChoice){

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText =
        "Player chose: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer chose: " + computerChoice;

        let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Draw!";
    }
    else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        result = "Player Wins!";
        playerScore++;
    }
    else{
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;

}