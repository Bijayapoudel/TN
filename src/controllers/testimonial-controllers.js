
const { testimonial } = require('../models');
const { sendResponse, sendErrorResponse, HttpStatus } = require('../respond');

const testimonialController = {};

//a. Create Testimonial
testimonialController.addTestimonial = async (req, res, next) => {
    try {
        let info = {
            name: req.body.name,
            designation: req.body.designation,
            image: req.file.path,
            content: req.body.content
        };
        const output = await testimonial.create(info);
        sendResponse(res, HttpStatus.OK, output);

    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
};



//b. Get all testimonials
testimonialController.getAllTestimonials = async (req, res, next) => {
    try {
        const output = await testimonial.findAll({});
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');

    }
};

//c. Get a single testimonial
testimonialController.getSingleTestimonial = async (req, res, next) => {
    try {
        let id = req.params.id;
        const output = await testimonial.findOne({ where: { id: id } });
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
};

module.exports = testimonialController;
