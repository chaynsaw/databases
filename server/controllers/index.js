var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(results);
      });
      
      // write response with json()
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(results);
      })

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {

    }
  }
};

