/* variables*/
let playerName = "";
let gameCounter;

function welcomePlayer() {

    while (playerName === "") {
        playerName = prompt("What is your name?")
    }
    console.log("Ok, " + playerName + ". Lets Play!")
    gameCounter = 5;
    return (playerName, gameCounter)
}

welcomePlayer();