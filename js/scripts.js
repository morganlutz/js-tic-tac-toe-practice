function Player(player) {
  this.player = player;
  this.mark = mark;
};

function Space(xCoordinate,yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
};

function Board() {

};

function Game() {

}

Space.prototype.markedBy = function() {
  //tell if square should be x or o
};







//play constructor is x or o

//space constructor has ??coordinates and markedby player function

//board constructor has 9 spaces with coordinates, check if 3 in a row are marked by same player, return space by its coordinates (board.find(1,2))

//game constructor creates 2 players, 1 board, move to next turn, track which player has turn, check if game is over or not

$(document).ready(function() {
  $("form#").submit(function(event) {
    //var number = parseInt($("input#number").val());

    var result = ();

    $(".answer").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
