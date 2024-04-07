const serviceRouter = require('../controllers/service-controllers');
const app = require('express').Router();
const validateToken = require('../middlewares/auth-middleware');

app.use(validateToken);
app.post('/', serviceRouter.addService);
app.get('/', serviceRouter.getAllServices);
app.get('/:id', serviceRouter.getSingleService);
app.delete('/:id', serviceRouter.deleteService);


module.exports = app;