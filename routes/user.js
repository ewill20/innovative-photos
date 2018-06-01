'use strict';

module.exports = (app, db) => {

  // GET all owners
  app.get('/api/user', (req, res) => {
    db.Users.findAll()
      .then(users => {
        res.json(users);
      });
  });

  // GET one owner by id
  app.get('/api/user/:id', (req, res) => {
    const id = req.params.id;
    db.Users.find({
      where: { id: id}
    })
      .then(user => {
        res.json(user);
      });
  });

  // POST single owner
  app.post('/api/user', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.Users.create({
      name: name,
      role: role
    })
      .then(newUser => {
        res.json(newUser);
      })
  });

  // PATCH single owner
  app.patch('/api/user/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.Users.find({
      where: { id: id }
    })
      .then(user => {
        return user.updateAttributes(updates)
      })
      .then(updatedUser => {
        res.json(updatedUser);
      });
  });

  // DELETE single owner
  app.delete('/api/user/:id', (req, res) => {
    const id = req.params.id;
    db.Users.destroy({
      where: { id: id }
    })
      .then(deletedUser => {
        res.json(deletedUser);
      });
  });
};