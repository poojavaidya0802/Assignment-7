var opt = ["rock", "paper", "scissors"];
function game() {
    'use strict';
    var hChoice = window.prompt("Choose rock, paper or scissors:");

    if (!opt.includes(hChoice)) {
        window.alert("Invalid Entry");
        return;
    }

    var i = Math.floor(Math.random() * Math.floor(3));
    var wChoice = opt[i];
    var result;
    if (hChoice === "paper" && wChoice === "rock" ||
            hChoice === "rock" && wChoice === "scissors" ||
            hChoice === "scissors" && wChoice === "paper") {
        result = "Win";
    } else if (wChoice === hChoice) {
        result = "Tie";
    } else {
        result = "Loose";
    }
    window.alert("Your choice is " + hChoice + " and computer choice is " + wChoice + " Its " + result + "!");


}
game();