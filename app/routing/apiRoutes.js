var friendData = require("../data/friends");


module.exports = function (app) {

  app.get("/friendfinder/api", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {

    if (friendData.length >= 1) {
      friendData.push(req.body);
      var newfriendData = req.body;
      var arrayScore = [];


      for (var i = 0; i < friendData.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < 10; j++) {
          totalDifference += Math.abs(friendData[i].scores[j] - newfriendData.scores[j]);
          arrayScore.push(totalDifference);
        }

        var index = 0;
        var lowestDif = arrayScore[0];
        for (var k = 1; k < arrayScore.length; k++) {
          if (arrayScore[i] < lowestDif) {
            lowestDif = arrayScore[k];
            index = [k];
          }
        }
        var bestFriend = friendData[index];
        res.json(bestFriend);
      }
    }
    else {
      console.log("Retake Survey");
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendData.length = [];


    res.json({ ok: true });
  });
};
