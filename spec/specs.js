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
