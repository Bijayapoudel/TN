const serviceRouter = require('../controllers/service-controllers');
const app = require('express').Router();
const upload=require('../helpers/upload-helper');
const validateToken = require('../middlewares/auth-middleware');
const serviceRequest=require('../validations/service-validation');

app.use(validateToken);
app.post('/', upload.single('image'), serviceRequest, serviceRouter.addService);
app.get('/', serviceRouter.getAllServices);
app.get('/:id', serviceRouter.getSingleService);
app.delete('/:id', serviceRouter.deleteService);


module.exports = app;