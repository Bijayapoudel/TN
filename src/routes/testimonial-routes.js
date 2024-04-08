const testimonialRouter = require('../controllers/testimonial-controllers');
const app = require('express').Router();
const upload = require('../helpers/upload-helper');
const validateToken = require('../middlewares/auth-middleware');
const testimonialRequest=require('../validations/testimonial-validation');

app.use(validateToken);
app.post('/',  upload.single('image'), testimonialRequest, testimonialRouter.addTestimonial);
app.get('/', testimonialRouter.getAllTestimonials);
app.get('/:id', testimonialRouter.getSingleTestimonial);
// app.put('/testimonials/:id', testimonialRouter.)

module.exports = app;