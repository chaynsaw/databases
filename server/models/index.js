var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select * from messages;';
      console.log('Model Reached');
      db.query(queryStr, (err, results) => {
        console.log('Database Reached', results);
        callback(err, results);
      });
      // invoked by controller
      // get all messages

      // query db [select]
        // pass data into callback
          // 
    },
    post: function (params, callback) {
      var queryStr = 'insert into messages (text, userid, roomname) \
                      values (?, (select id from users where name = ? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      });
      // invoked by controller

      // query db [insert into]
        // extract data from params
        // pass in as params
          // pass results into callback
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
      // get all messages
        // query db [select]
        // pass results into callback
    },
    post: function (params, callback) {
      var paramsArr = [params.username];
      var queryStr = 'insert into users (username) \
                      values (?)';
      db.query(queryStr, paramsArr, (err, results) => {
        callback(err, results);
      });
      // query db [insert into]
        // extract username
          // pass in as parameter
            //pass result into callback
    }
  }
};

