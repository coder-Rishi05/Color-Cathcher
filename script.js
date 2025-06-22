let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = ["red", "orange", "pink", "violet", "gray","aqua","blue", "yellow", "lightgreen", "green", "brown", "black"];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const title = document.querySelector("h1")

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createGrid() {
  grid.innerHTML = "";
  let shuffled = shuffleArray([...colors]);
  targetColor = shuffled[Math.floor(Math.random() * shuffled.length)];
  targetColorDisplay.textContent = targetColor;

  shuffled.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.addEventListener("click", () => handleClick(color));
    grid.appendChild(box);
  });
}

function handleClick(color) {
  if (color === targetColor) {
    score++;
    scoreDisplay.textContent = score;
    createGrid();
  }
}

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  createGrid();
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      alert("Time's up! Your final score is: " + score);
    }
  }, 1000);
}

// Theme switch
document.querySelector(".light").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f0f0";
  document.querySelector(".game-container").style.backgroundColor = "white";
  document.querySelector(".game-container").style.color = "black";
  title.style.color="black"
});

document.querySelector(".dark").addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  document.querySelector(".game-container").style.backgroundColor = "#333";
  document.querySelector(".game-container").style.color = "white";
  title.style.color="white"
});
