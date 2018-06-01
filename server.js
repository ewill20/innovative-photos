// Here we require the various dependencies //
var http = require('http')
const express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')
var db = require("./models")



// For Passport
 // Serving up static assets //
app.use(express.static("public"));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


const PORT = process.env.PORT || 5000;





// Standard code for body-parser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//For Handlebars
    app.set('views', './views');
    app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
    app.set('view engine', '.hbs');

app.get('/', function(req, res){
    res.render("landing");
  });
app.get('/profile', function(req, res) {
  console.log(req.params.user);
  res.render('profile');
  //   user: {
  //     profilePicture: url("Images/default-avatar.png"),
  //     handle: "",
  //     name: "",
  //     email: "",
  //     location: ""
  //   }
  // })
});
 //load passport strategies
 require('./config/passport/passport.js')(passport, db.user);

//Models
    var models = require("./models");

//Routes
    var authRoute = require('./routes/auth.js')(app,passport);
    require("./routes/api-routes.js")(app);
    require("./routes/user-api-routes.js")(app);


   


app.get('/', function(req, res) {

  res.send('Welcome')

  res.render(path.join(__dirname, "landing.hbs"))
});
app.get('/about', function(req, res) {
  res.render(path.join(__dirname, "about.hbs"))
});app.get('/contact', function(req, res) {
  res.render(path.join(__dirname, "contact.hbs"))
});app.get('/signin', function(req, res) {
  res.render(path.join(__dirname, "signin.hbs"))
});app.get('/signup', function(req, res) {
  res.render(path.join(__dirname, "signup.hbs"))
});app.get('/profile', function(req,res) {
  res.render(path.join(__dirname, "profile.hbs"))
});


// ROUTER
// This points our server in the right direction via a series of "routes" //
// =======================================================================//
// Function to handle requests and responses //
var env = require('dotenv').load();
 
//Sync Database
db.sequelize.sync({ force:false }).then(function() {

app.listen(PORT, function(err){
    if(!err)
    console.log("Site is live"); else console.log(err)
  console.log('Nice! Database looks fine')
  }); 
    
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});