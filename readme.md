# 🎨 Color Catcher Game

A simple and interactive web-based game built using HTML, CSS, and JavaScript. The goal of the game is to test your color recognition and reflexes — click on the matching colored box as fast as possible before time runs out!

---

## 🚀 Live Demo
You can host it using GitHub Pages or locally via your browser.

---

## 📂 Project Structure


```

ColorCatcher/
│
├── index.html # Main HTML file
├── style.css # Styling for game and layout
└── script.js # Game logic and interactivity

```

## 🎮 How to Play

1. Click the **"Start Game"** button.
2. A color name (e.g., `red`, `green`) will appear at the top.
3. A grid of color boxes will be generated.
4. Your task: **Click on the box that matches the target color.**
5. Each correct click:
   - Increases your score by 1.
   - Regenerates the grid with new shuffled colors.
6. The game runs for **30 seconds**.
7. When time runs out, your final score is shown in an alert.

---

## 🔧 How to Run

1. Clone or download this repository.
2. Make sure all 3 files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge).

---

## ✨ Features

- Color recognition game with random color assignment
- 30-second timer
- Score tracking
- Light and dark UI mode toggle
- Smooth and responsive UI with grid layout
- Hover effects and visual feedback on interactions

---

## 🧠 Key JavaScript Concepts Used


### 1. **DOM Manipulation**
Accessing and updating HTML elements dynamically:

```
js
const grid = document.getElementById("grid");
grid.innerHTML = ""; // clears the grid

```