const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const btnStart = document.getElementById("btnStart");
const LAST_NIVEL = 10;

class Game {
  constructor() {
    this.initialize = this.initialize.bind(this);
    this.initialize();
    this.generateSequence();
    setTimeout(() => this.nextLevel(), 1500);
  }

  initialize() {
    this.chooseColor = this.chooseColor.bind(this);
    setTimeout(() => this.toggleBtnStart(), 500);
    this.nivel = 1;
    this.colors = {
      topLeft,
      topRight,
      botLeft,
      botRight,
    };
  }

  toggleBtnStart() {
    if (btnStart.classList.contains("hide")) {
      btnStart.classList.remove("hide");
    } else {
      btnStart.classList.add("hide");
    }
  }

  generateSequence() {
    this.sequence = new Array(LAST_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.subnivel = 0;
    this.iluminateSequence();
    this.addClickEvents();
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
  transformColortoNum(color) {
    switch (color) {
      case "topLeft":
        return 0;
      case "topRight":
        return 1;
      case "botLeft":
        return 2;
      case "botRight":
        return 3;
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

  addClickEvents() {
    // var self = this
    this.colors.topLeft.addEventListener("click", this.chooseColor);
    this.colors.topRight.addEventListener("click", this.chooseColor);
    this.colors.botLeft.addEventListener("click", this.chooseColor);
    this.colors.botRight.addEventListener("click", this.chooseColor);
  }

  deleteClickEvents() {
    this.colors.topLeft.removeEventListener("click", this.chooseColor);
    this.colors.topRight.removeEventListener("click", this.chooseColor);
    this.colors.botLeft.removeEventListener("click", this.chooseColor);
    this.colors.botRight.removeEventListener("click", this.chooseColor);
  }

  chooseColor(ev) {
    const colorName = ev.target.dataset.color;
    const colorNumber = this.transformColortoNum(colorName);
    this.iluminateColor(colorName);
    if (colorNumber === this.sequence[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.deleteClickEvents();
        if (this.nivel === LAST_NIVEL + 1) {
          this.winGame();
        } else {
          setTimeout(() => this.nextLevel(), 1500);
        }
      }
    } else {
      this.loseGame();
    }
  }

  winGame() {
    swal("Topo INC", "Ganaste!!!", "success").then(() => {
      this.deleteClickEvents();
      this.initialize();
    });
  }

  loseGame() {
    swal("Topo INC", "Perdiste :(!!!", "error").then(() => {
      this.deleteClickEvents();
      this.initialize();
    });
  }
}

function startGame() {
  var game = new Game();
}
