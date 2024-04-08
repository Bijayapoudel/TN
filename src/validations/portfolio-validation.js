// projectName: req.body.title,
// client: req.body.client,
// image: req.file.path,
// description: req.body.description,


const Joi = require('joi');

const portfolioSchema = Joi.object({
    projectName:Joi.string()
        .alphanum()
        .min(3)
        .max(30).required(),
       

  client:Joi.string().min(1).required(),

image: Joi.string().uri().required(),

description: Joi.string().alphanum().min(10).max(500).required(),


})

const portfolioRequest = (req, res, next) => {
    const { error } = portfolioSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(); // Move to the next middleware
};

module.exports = portfolioRequest;
