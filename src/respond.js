// respond.js
const HttpStatus = require('http-status');

function sendResponse(res, statusCode, message) {
  res.status(statusCode).json({ message });
}

function sendErrorResponse(res, statusCode, errorMessage) {
  res.status(statusCode).json({ error: errorMessage });
}

module.exports = { sendResponse, sendErrorResponse, HttpStatus };
