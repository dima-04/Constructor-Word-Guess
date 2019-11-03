var Letter = function (char){
    this.char=char;
    this.guessed=false;

    this.print =function(){
        if(this.guessed){
            return this.char;
        }else{
            return "_";
        }
    }
    this.guess= function(char){
       if(this.char===char){
           this.guessed=true;
       }
    }
}


module.exports = Letter;