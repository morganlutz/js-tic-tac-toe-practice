function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = "";
}

  Space.prototype.checkIfEmpty = function() {
    if(this.markedBy === "") {
      return true;
    } else {
      return false;
    }
  }

  Space.prototype.markByPlayer = function(player) {
    if(this.checkIfEmpty()) {
      this.markedBy = player.mark;
    } else {

    }
  }

  Space.prototype.getMark = function() {
    return this.markedBy;
  }

function createBoard(numberOfSpaces) {
    debugger;
    this.board = [];

    var rowsOrColumns = Math.sqrt(numberOfSpaces);

    for (var rowIndex = 0; rowIndex < rowsOrColumns; rowIndex++) {
      var row = [];
      for (var colIndex = 0; colIndex < rowsOrColumns; colIndex++) {
      row.push(new Space(rowIndex, colIndex));
    }
    this.board.push(row);
  }
}

  createBoard.prototype.findSpace = function(xCoordinate, yCoordinate) {
    return this.board[xCoordinate][yCoordinate];
  }


  createBoard.prototype.isWinner = function() {
    //boolean true if 3 in a row
  }


function Game(number) {
  this.playerX = newPlayer("X");
  this.playerY = newPlayer("Y");
  this.board = createBoard(this.number);
  this.currentPlayer = this.playerX;

}

  Game.prototype.switchPlayers = function() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.playerY;
    } else {
      this.currentPlayer = this.playerX;
    }
  }


// $(document).ready(function() {
//   $("form#").submit(function(event) {
//     //var number = parseInt($("input#number").val());
//
//     $(".answer").text(result);
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
