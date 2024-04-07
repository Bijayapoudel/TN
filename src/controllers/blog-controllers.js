const { blog } = require('../models');
const { sendResponse, sendErrorResponse, HttpStatus } = require('../respond');

const blogController = {};

blogController.addBlog = async (req, res, next) => {
    try {
        let info = {
            title: req.body.title,
            // image: req.file.path, 
            description: req.body.description,
            metaData: req.body.metaData
        }
        const output = await blog.create(info);
        sendResponse(res, HttpStatus.OK, output);

    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
}

blogController.getAllBlogs = async (req, res, next) => {
    try {
        const output = await blog.findAll({title:req.body.title,description:req.body.description,metaData:req.body.metaData});
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');

    }
}

blogController.getSingleBlog = async (req, res, next) => {
    try {
        let id = req.params.id;
        const output = await blog.findOne({ where: { id: id } });
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
}

blogController.updateBlog = async (req, res, next) => {
    try {
        let id = req.params.id;
        const output = await blog.update(req.body, { where: { id: id } });
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');

    }
}

blogController.deleteBlog = async (req, res, next) => {
    try {
        let id = req.params.id;
        await blog.destroy({ where: { id: id } });
        sendResponse(res, HttpStatus.NO_CONTENT, "Deleted Successfully");

    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.NOT_FOUND, 'Not Found')
    }
}

module.exports = blogController;