
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');
  
}
exports.landing = function(req,res){

	res.render('landing'); 

}
exports.about = function(req,res) {

  res.render('about');

}
exports.berlin = function(req,res) {

  res.render('berlin');

}
exports.popDestinations = function(req, res) {

  res.render('popDestinations');
  
}
exports.kyoto = function(req, res) {

  res.render('kyoto');

}
exports.paris = function(req, res) {

  res.render('paris');

}
exports.hangzhou = function(req, res) {
  
  res.render('hangzhou');
  
}
exports.contact = function(req,res) {

  res.render('contact');

}
exports.signup = function(req,res){
  
    res.render('signup'); 
  
}
exports.signin = function(req,res){

	res.render('signin'); 

}

exports.profile = function(req,res){

	res.render('profile'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/landing');
  });

}