var TicTacToe = {
  init: function () {
    this.symbols = ["X", "O"];
    this.squares = Array.from(document.querySelectorAll(".square"));
    this.turnIndicator = document.querySelector(".turnIndicator");
    this.button = document.querySelector(".resetGame");
    this.board = document.querySelector(".board");
    this.btn = document.querySelector(".btn");
    this.prev = document.querySelector("#prev");
    this.next = document.querySelector("#next");
    this.winningSets = [
      // horizontal sets
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical sets
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal sets
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.addEventListeners();
    this.resetGame();
  },

  addEventListeners: function () {
    var squareTile = this;
    this.squares.forEach(function (tiles) {
      tiles.addEventListener(
        "click",
        function () {
          squareTile.play(this);
        },
        false
      );
    });
    this.button.addEventListener(
      "click",
      function () {
        squareTile.resetGame();
      },
      false
    );
  },

  resetGame: function () {
    this.btn.style.display = "none";
    this.activePlayer = 0;
    this.gameOver = false;
    this.squares.forEach(function (x) {
      x.classList.remove(TicTacToe.symbols[0]);
      x.classList.remove(TicTacToe.symbols[1]);
    });
    this.board.classList.remove("gameOver");
    this.setTurnIndicator();
  },
  setTurnIndicator: function () {
    this.turnIndicator.innerText = this.symbols[this.activePlayer] + "'s turn.";
  },

  play: function (tile) {
    if (!this.gameOver && tile.classList.length == 1) {
      tile.classList.add(this.symbols[this.activePlayer]);
      if (this.checkWin()) {
        this.turnIndicator.innerText =
          this.symbols[this.activePlayer] + " wins!";
        this.endGame();
        this.prevNext();
      } else if (this.checkDraw()) {
        this.turnIndicator.innerText = "It's a draw!";
        this.endGame();
        this.prevNext();
      } else {
        this.activePlayer = 1 - this.activePlayer;
        this.setTurnIndicator();
      }
    }
  },
  checkWin: function () {
    var squareTile = this;
    return this.winningSets.some(function (x) {
      return x.every(function (i) {
        return (
          Array.from(squareTile.squares[i].classList).indexOf(
            squareTile.symbols[squareTile.activePlayer]
          ) > 0
        );
      });
    });
  },
  checkDraw: function () {
    return this.squares.every(function (x) {
      return x.classList.length > 1;
    });
  },

  endGame: function () {
    this.btn.style.display = "flex";
    this.gameOver = true;
    this.board.classList.add("gameOver");
  },

  prevNext: function () {
    this.prev.addEventListener('click', pressPrev)
    this.next.addEventListener('click', pressNext)
    function pressPrev () {
      alert ('Previous moves will show')
    }
    function pressNext () {
      alert ('Next moves will show')
    }
  }
};

TicTacToe.init();
