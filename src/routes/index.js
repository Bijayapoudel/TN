const express = require('express');
const app = express.Router();


const testimonialRoutes = require('./testimonial-routes');
app.use('/testimonial', testimonialRoutes);

const authRoutes=require('./auth-routes');
app.use('/', authRoutes);

const portfolioRoutes=require('./portfolio-routes');
app.use('/portfolio', portfolioRoutes);

const serviceRoutes=require('./service-routes');
app.use('/service', serviceRoutes);

const blogRoutes=require('./blog-routes');
app.use('/blog', blogRoutes);

module.exports = app;