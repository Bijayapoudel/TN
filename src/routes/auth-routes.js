const app = require('express').Router();
const { registerUser, signInUser } = require('../controllers/auth-controllers');  //- is called kebab case anming convention
const validateRequest=require('../validations/user-validation')




//Registration route
app.post('/signup', validateRequest, registerUser);



//Sign-In router
app.post('/signin',  signInUser);


module.exports = app;