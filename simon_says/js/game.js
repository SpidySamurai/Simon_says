const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
  }

  initialize() {
    setTimeout(() => btnStart.classList.add("hide"), 1000);
  }
}

function startGame() {
  var game = new Game();
}
