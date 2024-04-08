const Joi = require('joi');

const serviceSchema = Joi.object({
    title:Joi.string()
        .alphanum()
        .min(3)
        .max(30).required(),
       

   description: Joi.string().alphanum().min(10).max(500).required(),

image: Joi.string().uri().required(),



})

const serviceRequest = (req, res, next) => {
    const { error } = serviceSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(); // Move to the next middleware
};

module.exports = serviceRequest;
