const testimonialRouter = require('../controllers/testimonial-controllers');
const app = require('express').Router();
const validateToken= require('../middlewares/auth-middleware');

app.use(validateToken);
app.post('/', testimonialRouter.addTestimonial);
app.get('/', testimonialRouter.getAllTestimonials);
app.get('/:id', testimonialRouter.getSingleTestimonial);
// app.put('/testimonials/:id', testimonialRouter.)

module.exports = app;