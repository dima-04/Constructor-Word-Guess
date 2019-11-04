var Word = require("./Word");
var inquirer = require("inquirer");
var arr = ["shark", "dog", "bear", "cow", "duck"];
var index = Math.floor(Math.random() * arr.length);
var word = new Word(arr[index]);
var remaining = 10;

function startGame() {
    inquirer.prompt([{
        name: "input",
        message: "\nGuess a Letter: "
    }]).then(function (answers) {
        console.log(answers.input);
        word.guess(answers.input);
        console.log(word.toString());

        if (word.toString().indexOf(answers.input) === -1) {
            remaining--;
            console.log(remaining);
        }
        if (word.toString().indexOf("_") === -1) {
            console.log("Correct!!!!");
            return;
        }
        if (remaining === 0) {
            console.log("You Lost!!!");
            return;
        }

        startGame();
    });
}

startGame();
