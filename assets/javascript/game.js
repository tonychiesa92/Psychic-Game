var alpabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var count = 9;
var guess = "";


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var countText = document.getElementById("count-text");
var guessesText = document.getElementById("guesses-text");


var computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var found = guess.search(userGuess);
    if ((found === -1)) {

        guess = guess + " " + userGuess;


        if ((userGuess !== computerGuess)) {
            count--;
            if ((count === 0)) {
                losses++;
                count = 9;
                guess = "";
                computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];
            }
        }
        else {
            wins++;
            count = 9;
            guess = "";
            computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];
        }


        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        countText.textContent = "Guesses left: " + count;
        guessesText.textContent = "Your guesses so far: " + guess;


    }
}


