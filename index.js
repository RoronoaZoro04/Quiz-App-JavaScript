const quizzy = [
  {
    question: "1. What is the correct HTML for creating a hyperlink?",
    a: "Itonlineclub.tk.com",
    b: "www.Itonlineclub.tk",
    c: "Itonlineclub.tk",
    d: "Http://itonlineclub.tk",
    ans: "ans4",
  },
  {
    question: "2. Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the avobe",
    ans: "ans1",
  },
  {
    question:
      "3. Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "both a and b",
    d: "None of the above",
    ans: "ans3",
  },
  {
    question:
      "4. Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId()",
    b: "getElementByClassName()",
    c: "Both a and b",
    d: "None of the above",
    ans: "ans3",
  },
  {
    question:
      "5. Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Gives a warning",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question:
      "6. Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    ans: "ans4",
  },
  {
    question: "7. How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    ans: "ans1",
  },
  {
    question:
      "8. What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    ans: "ans1",
  },
  {
    question: "9. What is the use of the <noscript> tag in Javascript?",
    a: "The contents are displayed by non-JS-based browsers",
    b: "Clears all the cookies and cache",
    c: "Both a and b",
    d: "None of the above",
    ans: "ans1",
  },
  {
    question:
      "10. When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "Undefined",
    c: "Object",
    d: "Integer",
    ans: "ans3",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".option");
const result = document.querySelector("#result");

let questionCount = 0;
let marks = 0;

const loadQuestion = () => {
  const questionList = quizzy[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((currentElement) => {
    if (currentElement.checked) {
      answer = currentElement.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((currentElement) => (currentElement.checked = false));
};

const endQuiz = () => {
  result.innerHTML = `
        <h3> You Got ${marks}/${quizzy.length}.</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
  clearInterval(interval);
  result.classList.remove("result");
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizzy[questionCount].ans) {
    marks++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizzy.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});
let timeLeft = 300;
const timer = document.getElementById("timer");

const interval = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  timer.innerHTML = `Time left : ${minutes}:${seconds}`;

  if (timeLeft <= 0) {
    endQuiz(interval);
  } else {
    timeLeft--;
  }
}, 1000);

const start = document.getElementById("start");
start.addEventListener("click", function () {
  start.style.display = "none";
  const content = document.getElementById("quizzy");
  content.style.display = "block";
});

const button = document.getElementById("submit");
const audio = new Audio("/audio/submit.wav");
button.addEventListener("click", function () {
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 2000);
});

const playbutton = document.getElementById("start");
const playaudio = new Audio("/audio/playAgain.wav");
playbutton.addEventListener("click", function () {
  playaudio.play();
  setTimeout(function () {
    playaudio.pause();
  }, 2000);
});

const radioButtons = document.querySelectorAll("input[type='radio']");
const radioaudio = new Audio("/audio/optionSelected.wav");
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    radioaudio.play();
  });
  setTimeout(function () {
    radioaudio.pause();
  }, 3000);
});
