const Joi = require('joi');

const testimonialSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
       

    designation: Joi.string().allow(""),

image: Joi.string().uri(),

 content: Joi.string().alphanum().min(10).max(500),

})

const testimonialRequest = (req, res, next) => {
    const { error } = testimonialSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(); // Move to the next middleware
};

module.exports = testimonialRequest;
