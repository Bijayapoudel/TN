
//This is all about the user sign-up and sign-in Controller
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { sendResponse, sendErrorResponse, HttpStatus } = require('../respond');


const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        //check if the email exists or not
        const userExist = await db.user.findOne({ where: { email } });
        if (userExist) {
            //CONFLICT: 409;
            sendErrorResponse(res, HttpStatus.CONFLICT, 'Conflict');

        };

        await db.user.create({
            name,
            email,
            password: await bcrypt.hash(password, 15),
        });
        //CREATED: 201;
        sendResponse(res, HttpStatus.CREATED, 'Registration Successful!');
    } catch (err) {
        next(err);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Error in registrating user');

    }
};



//sign-in user
const signInUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await db.user.findOne({ where: { email } });
        if (!user) {
            //UNAUTHORIZED: 401;
            sendErrorResponse(res, HttpStatus.UNAUTHORIZED, 'E-mail Not Found');

        }


        //verify password  using bcrypt compare method
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            sendErrorResponse(res, HttpStatus.UNAUTHORIZED, 'Invalid password');

        }

        //Authenticate  the user by setting a JWT token and send it to the client side

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        console.error("Error signing in:", err);
       //INTERNAL_SERVER_ERROR: 500
       sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Error in signing in');

    }
}


module.exports = { registerUser, signInUser };