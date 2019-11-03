var Letter = require("./Letter");
var Word=function (word){
    this.letters=[];
    for (let i = 0;i<word.length;i++){
        this.letters.push(new Letter(word[i]));

    }
    var print = function(){
        let str = "";

        for(let i=0;i<this.letters.length;I++){
            
            str+=this.letters[i].print();

        }
        return str;

    }
    var guess = function(char){
        for(let i=0;i<this.letters.length;i++){
            this.letters[i].guess();
        }
    }
}

module.exports = word;