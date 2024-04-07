const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {HttpStatus,sendErrorResponse}= require('../respond');

const validateToken = asyncHandler(async (req, res, next) => {
 
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
   let token = authHeader.split(" ")[1];
    // console.log(token)
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        sendErrorResponse(res, HttpStatus.UNAUTHORIZED, 'User is Unauthorized');
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      sendErrorResponse(res, HttpStatus.UNAUTHORIZED, 'User is Unauthorized or token is missing');
    }
  }
});

module.exports = validateToken;