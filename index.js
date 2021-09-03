var readLineSync = require('readline-sync');

var name = readLineSync.question("Enter your name: ");
var welcomeMessage = "Welcome " + name;
console.log(welcomeMessage);
console.log("-------------------------------------");
var score = 0;
function quiz(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
  console.log("You are Right.");
  score++;
  console.log("Current score: " + score);
  console.log("-------------------------------------");
} else {
  console.log("You are Wrong.");
  score--;
  console.log("Current score: " + score);
  console.log("-------------------------------------");
}
}
var data = [
  {
    question: "What is my age?: ",
    answer: "24",
  }, 
  {
    question: "Where do i live?: ",
    answer: "Gandhinagar",
  },
  {
    question: "Where do i work?: ",
    answer: "TCS",
  },
  {
    question: "Which is my favorite sitcom?: ",
    answer: "friends",
  },
  {
    question: "Which is my favorite movie?: ",
    answer: "parasite",
  }];
for(var i = 0;i < data.length; i++){
  quiz(data[i].question, data[i].answer);
}


console.log("Your Final score: " + score);