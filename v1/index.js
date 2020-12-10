var read = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var name = read.question("Enter your name:");
console.log("Welcome "+name);

var highscores = [
  {
    name : "ABC",
    score : 3
  },
  {
    name : "BCD",
    score : 2
  }
]

function play(question,answer){
  var userAnswer = read.question(question);
 
  if(userAnswer === answer){
    console.log(chalk.green("right"));
    score ++;
  }
  
  else{
     console.log(chalk.red("wrong"));
  }
  console.log("Current Score: ",score);
  console.log("-------------------");
}

var questions = [
  {
  question: "What is 1 + 1?",
  answer: "2"
  },
  {
  question: "What is the square of 7?",
  answer: "49"
  },
  {
  question: "What is the root of 81?",
  answer: "9"
  }
];

for (var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("You scored ", score)
console.log();
console.log(chalk.bgBlue("HighScores"));
console.log();
highscores.push({name, score})
arr = highscores.sort(function(a,b) {
    return a[1] - b[1];
});
for (var i=0; i<arr.length; i++){
 console.log(arr[i].name, arr[i].score);
}