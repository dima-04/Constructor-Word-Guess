var Letter = require("./Letter");
var Word=function (word){
    this.letters=[];
    for (let i = 0;i<word.length;i++){
        this.letters.push(new Letter(word[i]));

    }
    this.toString = function(){
        let str = "";

        for(let i=0;i<this.letters.length;i++){
            
            str+=this.letters[i].print();

        }
        return str;

    }
    this.guess = function(char){
        for(let i=0;i<this.letters.length;i++){
            this.letters[i].guess(char);
        }
    }
}

module.exports = Word;