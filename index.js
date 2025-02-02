
let readlineSync = require("readline-sync");

let score = 0;

let userName = readlineSync.question("What is your name?");

/*Creating Data Set */
const database = {
  data: [
    {
      question:
        "What is the difference between 'var', 'let', and 'const' in JavaScript?",
      options: {
        a: "All three have the same scope.",
        b: "'var' has function scope, 'let' and 'const' have block scope.",
        c: "'let' and 'const' have function scope, 'var' has block scope.",
        d: "None of the above.",
      },
      correctAnswer: "b",
    },
    {
      question: "Explain the concept of hoisting in JavaScript.",
      options: {
        a: "Hoisting is the process of moving variable and function declarations to the top of their scope before code execution.",
        b: "Hoisting is the process of moving variable and function declarations to the bottom of their scope before code execution.",
        c: "Hoisting is the process of moving variable and function declarations to the top of their scope after code execution.",
        d: "Hoisting is the process of moving variable and function declarations to the bottom of their scope after code execution.",
      },
      correctAnswer: "a",
    },
    {
      question: "What are closures in JavaScript?",
      options: {
        a: "A closure is a function that has access to variables in its lexical scope, even after the outer function has finished executing.",
        b: "A closure is a function that does not have access to variables in its lexical scope, even after the outer function has finished executing.",
        c: "A closure is a function that has access to variables in its lexical scope, only after the outer function has finished executing.",
        d: "None of the above.",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you create an object in JavaScript?",
      options: {
        a: "You can create an object using object literals, constructor functions, or the Object.create() method.",
        b: "You can create an object using object literals only.",
        c: "You can create an object using constructor functions only.",
        d: "You can create an object using the Object.create() method only.",
      },
      correctAnswer: "a",
    },
  ],
};
/* Creating a Leader Board */
const leaderBoard = {
  data: [
    {
      name: "Rohit",
      score: 1,
    },
    {
      name: "Rahul",
      score: 3,
    },
    {
      name: "Jays",
      score: 4,
    },
  ],
};

/*Function to play the game */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Correct Answer");
    score++;
  } else {
    console.log(`Incorrect Answer, the correct answer is ${correctAnswer}`);
  }
}

/* Creating function to display the quiz */

function showQuestionsAndAnswers(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1}: ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} -${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer from a/b/c/d ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

/*Function to display LeaderBoard */

function highScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log("\n Check the Leader Board \n");
  for (let leader of sortedScoreList) {
    console.log(`${leader.name} - score: ${leader.score}`);
  }
}

showQuestionsAndAnswers(database);
console.log(`\n Your total score is ${score}`);
highScorer(leaderBoard);
