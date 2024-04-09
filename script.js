/* variables*/
let playerName = "";
let gameCounter;
/*
function welcomePlayer() {

    while (playerName === "") {
        playerName = prompt("What is your name?")
    }
    console.log("Ok, " + playerName + ". Lets Play!")
    gameCounter = 5;
    return (playerName, gameCounter)
}

welcomePlayer();
*/
let computerTry;

function computerSelection() {
    let randomNumber = Number((Math.random() * 10).toFixed(3));
    switch (true) {
        case randomNumber <= 3.33:
            {
                computerTry = "ROCK";
                break;
            }
        case randomNumber <= 6.66:
            {
                computerTry = "PAPER";
                break;
            }
        case randomNumber <= 10:
            {
                computerTry = "SCISSORS";
                break;
            }
    }
return computerTry;    
}
computerSelection();
