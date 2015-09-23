describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });

});

describe('Space', function() {
   it("return correct x corrdinate", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xCoordinate).to.equal(1);
   });

   it("return correct y corrdinate", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.yCoordinate).to.equal(2);
   });

   it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.markByPlayer(testPlayer);
    expect(testSpace.getMark()).to.equal(testPlayer.mark);
 });

});

describe('createBoard', function() {
  it("initializes board", function() {
    var newBoard = new createBoard(9);
    var expectedBoardArray = [
    [new Space(0,0), new Space(0,1), new Space(0, 2)],
    [new Space(1,0), new Space(1,1), new Space(1, 2)],
    [new Space(2,0), new Space(2,1), new Space(2, 2)]
  ];
  expect(newBoard.board).to.eql(expectedBoardArray);
  });


   it("returns space by coordinates", function() {
      var newBoard = new createBoard(9);
      expect(newBoard.findSpace(0,1)).to.eql(new Space(0,1));
   });

   it("returns true when a player wins", function() {
      var newBoard = new createBoard(9);
      expect(newBoard.isWinner()).to.equal(true);
   });
 });

 // describe('Game', function() {
 //    it("return correct x corrdinate", function() {
 //       var testSpace = new Space(1,2);
 //       expect(testSpace.xCoordinate).to.equal(1);
 //    });
 //  });
