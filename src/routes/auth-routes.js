const app = require('express').Router();
const { registerUser, signInUser } = require('../controllers/auth-controllers');  //- is called kebab case anming convention
const validateToken = require('../middlewares/auth-middleware');
const validation = require('../middlewares/user-middleware');
const userSchema = require('../validations/user-validation');


app.use(validateToken);

// 验证
//Registration route
app.post('/signup', validation(userSchema), registerUser);



//Sign-In router
app.post('/signin', validation(userSchema), signInUser);


module.exports = app;