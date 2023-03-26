// Imported readline-sync as ES module
import readlineSync from 'readline-sync';
import chalk from 'chalk';

var score = 0, level = 1;

// questionList is a list of objects, it contains objects of questions and answers
var questionList = [{
  question: "Is Tony Stark Captain America?\n",
  options: ['Yes', 'No'],
  answer: "No",
}, {
  question: "Wanda Maximoff is Black Widow.\n",
  options: ['True', 'False'],
  answer: "False"
}, {
  question: "Is Tony Stark Iron Man?\n",
  options: ['Yes', 'No'],
  answer: "Yes"
}, {
  question: "Which Marvel Hero is based on a Norse God?\n",
  options: ['Spiderman', 'Hulk', 'Iron Man', 'Thor'],
  answer: "Thor"
}, {
  question: "Which arachnid inspired Peter Parker’s Marvel hero?\n",
  options: ['Scorpion', 'Spider', 'Tick', 'Mosquito'],
  answer: "Spider"
}, {
  question: "What colour is Hulk?\n",
  options: ['Pink', 'Green', 'Yellow', 'Red'],
  answer: "Green"
}, {
  question: "Which big cat is also the name for the king of Marvel’s fictional African nation of Wakanda?\n",
  options: ['Lion', 'Cheetah', 'Tiger', 'Black Panther'],
  answer: "Black Panther"
}, {
  question: "Who is Marvel’s Sorcerer Supreme?\n",
  options: ['Dr. Strange', 'Nurse Weird', 'Professor Kooky', 'Zany Simon'],
  answer: "Dr. Strange"
}, {
  question: "Which letter is used to describe Marvel’s mutant superhero team?\n",
  options: ['X-Guys', 'Y-People', 'X-Men', 'B-Swarm'],
  answer: "X-Men"
}, {
  question: "Which of these is the correct catchphrase for a Guardians of the Galaxy character?\n",
  options: ['I am Boot', 'I am Groot', 'I am Foot', 'I am Hoot'],
  answer: "I am Groot"
}];

// Level promotion 
function levelPromotion() {
  level++;
  console.log(chalk.green("\nYAY! You were promoted to a new level!"));
  console.log("\nYour current level is " + chalk.green(level) + "!\n");
}

// Capitalize the first character of username
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Quiz function
function quiz(question, options, answer) {
  // using keyInSelect property for multiple choices
  var userAns = readlineSync.keyInSelect(options, "\nQ" + (i + 1) + ". " + question, { cancel: false });
  // score increament if answer os right, no penalty for wrong answer
  if (options[userAns] === answer) {
    score++;
    console.log("\nYou are " + chalk.green("RIGHT!\n"));
  } else {
    console.log("\nYou are " + chalk.red("WRONG!\n"));
  }

  if (score === 5 || score === 10) {
    levelPromotion()
  }
  console.log("Current score: " + chalk.green(score) + "\n-----------------");
}

var userName = capitalizeFirstLetter(readlineSync.question("Welcome to the " + chalk.red.bold("MARVEL QUIZ") + "\n\nTell us your name: "));

// If blank string recieved
if (userName === "") {
  userName = "User"
}
// Greeting the user
console.log("\nHello " + chalk.red(userName) + ", let's start!");

for (var i = 0; i < questionList.length; i++) {
  quiz(questionList[i].question, questionList[i].options, questionList[i].answer)
}
console.log("\nYour Final Score is: " + chalk.green(score));
console.log("\nYour Final Level is: " + chalk.green(level));

console.log("\nThank you for playing the " + chalk.red("MARVEL QUIZ") + ", " + chalk.green(userName + "!") + " Take Care.");