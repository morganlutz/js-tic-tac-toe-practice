function Player(mark) {
  this.mark = mark;
  return mark; // do we need to return this?
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
      var x = this.xCoordinate;
      var y = this.yCoordinate;
      var square = document.getElementById(x + "," + y).getContext("2d");
      square.font = "190px Arial";
      square.fillText(player.mark, 90, 145);
    } else {

    }
  }

  Space.prototype.getMark = function() {
    return this.markedBy;
  }

function Board(numberOfSpaces) {
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

  Board.prototype.getSpace = function(xCoordinate, yCoordinate) {
    return this.board[xCoordinate][yCoordinate];
    return space
  }

  Board.prototype.isWinner = function() {
    if( this.getSpace(0, 0).markedBy === this.getSpace(0, 1).markedBy && this.getSpace(0, 1).markedBy === this.getSpace(0, 2).markedBy)//one
    if( this.getSpace(1, 0).markedBy === this.getSpace(1, 1).markedBy && this.getSpace(1, 1).markedBy === this.getSpace(1, 2).markedBy)//two
    if( this.getSpace(2, 0).markedBy === this.getSpace(2, 1).markedBy && this.getSpace(2, 1).markedBy === this.getSpace(2, 2).markedBy)//three
    if( this.getSpace(0, 0).markedBy === this.getSpace(1, 0).markedBy && this.getSpace(1, 0).markedBy === this.getSpace(2, 0).markedBy)//four
    if( this.getSpace(0, 1).markedBy === this.getSpace(1, 1).markedBy && this.getSpace(1, 1).markedBy === this.getSpace(2, 1).markedBy)//five
    if( this.getSpace(0, 2).markedBy === this.getSpace(1, 2).markedBy && this.getSpace(1, 2).markedBy === this.getSpace(2, 2).markedBy)//six
    if( this.getSpace(0, 0).markedBy === this.getSpace(1, 1).markedBy && this.getSpace(1, 1).markedBy === this.getSpace(2, 2).markedBy)//seven
    if( this.getSpace(0, 2).markedBy === this.getSpace(1, 1).markedBy && this.getSpace(1, 1).markedBy === this.getSpace(2, 0).markedBy)//eight
   {
      return true;
    } else {
      return false;
    }
  }


function Game(number) {
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.board = new Board(this.number);
  this.currentPlayer = this.player1;

}

  Game.prototype.switchPlayers = function() {
    if (this.currentPlayer === this.player1) {
      currentPlayer = this.player2;
    } else {
      currentPlayer = this.player1;
    }
  }


$(document).ready(function() {
    var board = new Board(9);
    Game();

    $(".winner").text(result);
    $("#result").show();
    event.preventDefault();
});
