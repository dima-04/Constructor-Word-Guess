var Word = require("./Word");
var arr=["shark","dog","bear","cow","duck"];
var index=Math.floor(Math.random() * arr.length);
var word=new Word(arr[index]);
console.log(word);
