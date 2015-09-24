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


// Use this later to draw X and O on the board
function mark(space) {
  var square = document.getElementById(space).getContext("2d");
  square.font = "270px Arial";
  square.fillText("x", 90, 145);
}

function createBoard(numberOfSpaces) {
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
    if( this.findSpace(0, 0).markedBy === this.findSpace(0, 1).markedBy && this.findSpace(0, 1).markedBy === this.findSpace(0, 2).markedBy)//one
    if( this.findSpace(1, 0).markedBy === this.findSpace(1, 1).markedBy && this.findSpace(1, 1).markedBy === this.findSpace(1, 2).markedBy)//two
    if( this.findSpace(2, 0).markedBy === this.findSpace(2, 1).markedBy && this.findSpace(2, 1).markedBy === this.findSpace(2, 2).markedBy)//three
    if( this.findSpace(0, 0).markedBy === this.findSpace(1, 0).markedBy && this.findSpace(1, 0).markedBy === this.findSpace(2, 0).markedBy)//four
    if( this.findSpace(0, 1).markedBy === this.findSpace(1, 1).markedBy && this.findSpace(1, 1).markedBy === this.findSpace(2, 1).markedBy)//five
    if( this.findSpace(0, 2).markedBy === this.findSpace(1, 2).markedBy && this.findSpace(1, 2).markedBy === this.findSpace(2, 2).markedBy)//six
    if( this.findSpace(0, 0).markedBy === this.findSpace(1, 1).markedBy && this.findSpace(1, 1).markedBy === this.findSpace(2, 2).markedBy)//seven
    if( this.findSpace(0, 2).markedBy === this.findSpace(1, 1).markedBy && this.findSpace(1, 1).markedBy === this.findSpace(2, 0).markedBy)//eight
   {
      return true;
    } else {
      return false;
    }
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


$(document).ready(function() {
    //spaces in row one:
    var square1 = document.getElementById("0,0").getContext("2d");
    var square2 = document.getElementById("0,1").getContext("2d");
    var square3 = document.getElementById("0,2").getContext("2d");

    //spaces in row two:
    var square4 = document.getElementById("1,0").getContext("2d");
    var square5 = document.getElementById("1,1").getContext("2d");
    var square6 = document.getElementById("1,2").getContext("2d");

    //spaces in row three:
    var square7 = document.getElementById("2,0").getContext("2d");
    var square8 = document.getElementById("2,1").getContext("2d");
    var square9 = document.getElementById("2,2").getContext("2d");


    $(".winner").text(result);
    $("#result").show();
    event.preventDefault();
});
