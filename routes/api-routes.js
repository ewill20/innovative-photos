// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get('/', function(req, res) {
    result.sendFile(path.join(__dirname + '/../landing.hbs'));
});

app.get('/landing', function(req, res) {
    result.sendFile(path.join(__dirname + '/../landing.hbs'));
});
  //   // findAll returns all entries for a table when used with no options
  //   db.User.findAll({}).then(function(dbUser) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbUser);
  //   });
  // });

  // POST route for saving a new user
  app.post("/api/user", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      handle: req.body.handle,
      password: req.body.password
    }).then(function(dbUser) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // DELETE route for deleting users. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/user/:id", function(req, res) {
    // We just have to specify which user we want to destroy with "where"
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });

  });

  // PUT route for updating user. We can get the updated user data from req.body
  app.put("/api/user", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      handle: req.body.handle,
      password: req.body.password
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      //whenever validation fails then an error is thrown
      //we can catch error and prevent it from being "thrown", which could crash the node app
      res.json(err);
    });
  });

};
