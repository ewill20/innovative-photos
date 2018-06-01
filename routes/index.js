// const path = require('path');
// const router = require('express').Router();
// const apiRoutes = require('./auth');

// // API Routes //
// router.use('/auth', apiRoutes);


// // If no API routes are available, send the React app //
// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, "/landing.hbs"));
// });

// module.exports = router;

'use strict'

const routes = [
  require('./user.js'),
  require('/auth.js'),
  require('./api-routes.js')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};