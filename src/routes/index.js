const express = require('express');
const authRoutes=require('./auth-routes');
const testimonialRoutes = require('./testimonial-routes');
const portfolioRoutes=require('./portfolio-routes');
const serviceRoutes=require('./service-routes');
const blogRoutes=require('./blog-routes');
const app = express()

app.use('/', authRoutes);
app.use('/testimonial', testimonialRoutes);
app.use('/portfolio', portfolioRoutes);
app.use('/service', serviceRoutes);
app.use('/blog', blogRoutes);

module.exports = app;