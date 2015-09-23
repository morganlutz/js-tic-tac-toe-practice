function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = "";
}

Space.prototype.checkIfEmpty = function() {
//debugger;
  if(this.markedBy === "") {
    return true;
  } else {
    return false;
  }
}

Space.prototype.markByPlayer = function(player) {
  //debugger;
  if(this.checkIfEmpty()) {
    this.markedBy = player.mark;
  } else {

  }
}

Space.prototype.getMark = function() {
  return this.markedBy;
}

function createBoard(numberOfSquares) {
  debugger;
  this.board = [];

  var rowsOrColumns = Math.sqrt(numberOfSquares);

  for (var rowIndex = 0; rowIndex < rowsOrColumns; rowIndex++) {
    var row = [];
    for (var colIndex = 0; colIndex < rowsOrColumns; colIndex++) {
    row.push(new Space(rowIndex, colIndex));
  }
  this.board.push(row);
}
  return board;
}



// Board.prototype.findSpace = function() {
//   //?? what would we use this for
// }
//
// Board.prototype.checkIfWinning = function() {
//
// }
//
// function Game() {
//   //creates 2 players
//   //initializes board
//
// }







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
