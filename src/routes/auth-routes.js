const app = require('express').Router();
const { registerUser, signInUser } = require('../controllers/auth-controllers');  //- is called kebab case anming convention


//Registration route
app.post('/signup', registerUser);


//Sign-In router
app.post('/signin', signInUser);


module.exports = app;