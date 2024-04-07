const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const indexRoute = require('../TechNirvana/src/routes/index');
const sequelize = require('../TechNirvana/config/config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//redirecting to the main route
app.use('/api', indexRoute);

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

