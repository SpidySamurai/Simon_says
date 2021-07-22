const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
  }

  initialize() {
    setTimeout(() => btnStart.classList.add("hide"), 500);
    this.nivel = 1;
    this.colors = {
      topLeft,
      topRight,
      botLeft,
      botRight,
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
}

function startGame() {
  var game = new Game();
}
