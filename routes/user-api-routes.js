

var db = require('../models');

module.exports = function(app) {
// Get individual user
    app.get('/api/user', function(req,res) {
        

        db.User.findAll({
            include: [db.User.name]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
        });

        app.get("/api/user/:id", function(req, res) {

        
        db.User.findOne({
            where: {
                id: req.params.id
            },
                include: [db.User.name]
            }).then(function(dbUser) {
            res.json(dbUser)
        });
    });
    
    app.post("/api/user", function(req, res) {
        db.User.create(req.body).then(function(dbUser){
            res.json(dbUser);
        });
    });

    
};
