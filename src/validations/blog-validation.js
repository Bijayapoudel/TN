

const Joi = require('joi');

const blogSchema = Joi.object({
   title:Joi.string()
        .alphanum()
        .min(3)
        .max(30).required(),
       


image: Joi.string().uri().required(),

description: Joi.string().alphanum().min(10).required(),

metaData:Joi.string().alphanum()
         .allow("").required()

})

const blogRequest = (req, res, next) => {
    const { error } = blogSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(); // Move to the next middleware
};

module.exports = blogRequest;
