const scoreEl = document.querySelector("#score");
const question = document.querySelector(".question");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector(".btn");

const num1 = Math.floor(Math.random() * 10)+1;
const num2 = Math.floor(Math.random() * 10) + 1;
const correctAnswer = num1 * num2;

question.innerHTML = `What is ${num1} multiply by ${num2}`; //the question

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.textContent = `score: ${score}`;

form.addEventListener("submit", () => {
    const userAnswer = +input.value; //the + converts the string value to a number value
  if (correctAnswer === userAnswer) {
    score++;
      updateScore();
  } else {
    score--;
      updateScore();
    //   clear()
  }
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score)); //score 1
}