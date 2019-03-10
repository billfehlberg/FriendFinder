var friendData = require("../data/friends");



module.exports = function(app) {

  app.get("/friendfinder/api", function(req, res) {
    res.json(friendData);
  });



  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (friendData.length >= 1) {
      friendData.push(req.body);
      res.json(true);
    }
    else {
        console.log("No friends");
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = [];
   

    res.json({ ok: true });
  });
};