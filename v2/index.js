var read = require('readline-sync');
var score = 0;
var username = read.question("Enter your name:");
console.log("Welcome "+username);

function play(question,answer){
  var userAnswer = read.question(question);
 
  if(userAnswer === answer){
    console.log("right");
    score ++;
  }
  
  else{
     console.log("wrong");
  }
  console.log("Current Score: ",score);
  console.log("-------------------");
}

var questions = [
  {
  question: "Where do I live?",
  answer: "Bangalore"
  },
  {
  question: "My favourite superhero would be?",
  answer: "Dhruv"
  }
];

for (var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}