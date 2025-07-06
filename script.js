
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "2"],
    answer: "6"
  },
  {
    question: "Which field are you most interested in?",
    options: ["Web Development", "Data Science", "Cyber Security", "UI/UX Design"],
    answer: null // no scoring, just survey
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "%%"],
    answer: "//"
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "2"],
    answer: "6"
  },
  {
    question: "Which field are you most interested in?",
    options: ["Web Development", "Data Science", "Cyber Security", "UI/UX Design"],
    answer: null
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "%%"],
    answer: "//"
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Computer Styled Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to display images?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseclick", "onmouseover", "onclick"],
    answer: "onclick"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'app.js'?",
    options: ["<script src='app.js'>", "<script href='app.js'>", "<link src='app.js'>", "<js src='app.js'>"],
    answer: "<script src='app.js'>"
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    options: ["v", "var", "int", "let"],
    answer: "var"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: "//"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", ":="],
    answer: "="
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "create.myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "myFunction()", "Call.myFunction", "run.myFunction()"],
    answer: "myFunction()"
  }
  // Continue adding until 50


];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const introScreen = document.getElementById('introScreen');
const quizContainer = document.getElementById('quizContainer');
const resultScreen = document.getElementById('resultScreen');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const levelEl = document.getElementById('level');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const finalScoreEl = document.getElementById('finalScore');

function startGame() {
  introScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  showQuestion();
  startTimer();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  q.options.forEach(opt => {
    const li = document.createElement('li');
    li.textContent = opt;
    li.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(li);
  });
  levelEl.textContent = currentQuestion + 1;
  scoreEl.textContent = score;
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestion].answer;
  if (correctAnswer && selected === correctAnswer) {
    score += 10;
  }
  clearInterval(timer);
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    timeLeft = 30;
    showQuestion();
    startTimer();
  } else {
    endGame();
  }
}

function startTimer() {
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function endGame() {
  quizContainer.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalScoreEl.textContent = score;
}
