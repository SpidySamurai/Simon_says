const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    this.nextLevel();
  }

  initialize() {
    setTimeout(() => btnStart.classList.add("hide"), 500);
    this.nivel = 5;
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

  nextLevel() {
    this.iluminateSequence();
  }

  transformNumtoColor(number) {
    switch (number) {
      case 0:
        return "topLeft";
      case 1:
        return "topRight";
      case 2:
        return "botLeft";
      case 3:
        return "botRight";
    }
  }

  iluminateSequence() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformNumtoColor(this.sequence[i]);
      setTimeout(() => this.iluminateColor(color), 1000 * i);
    }
  }

  iluminateColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.turnOffColor(color), 350);
  }

  turnOffColor(color) {
    this.colors[color].classList.remove("light");
  }
}

function startGame() {
  var game = new Game();
}
