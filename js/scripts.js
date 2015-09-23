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

function Board(numberOfSquares) {
  //takes number of squares and gets square root
  //uses square root to decide how many spaces in each row
  //run function that creates the correct number of spaces
  //assign spaces to html elements???
}

Board.prototype.findSpace = function() {
  //?? what would we use this for
}

Board.prototype.checkIfWinning = function() {

}

function Game() {
  //creates 2 players
  //initializes board

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
