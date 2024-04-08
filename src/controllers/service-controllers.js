const { service } = require('../models');
const { sendResponse, sendErrorResponse, HttpStatus } = require('../respond');

const serviceController = {};



//a. Create Service

serviceController.addService = async (req, res,next) => {
    try {
        let info = {
            title: req.body.title,
            description: req.body.description,
            image: req.file.path,
        };
        const output = await service.create(info);
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
      next(error);
      //BAD_REQUEST: 400
      sendErrorResponse(res, HttpStatus.BAD_REQUEST, 'Server Error');

    }
};


//b.   get all services
serviceController.getAllServices = async (req, res, next) => {
    try {
        const output = await service.findAll({});
        //CREATED:201
        sendResponse(res, HttpStatus.CREATED, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');

    }
};

//c.  get a single service
serviceController.getSingleService = async (req, res) => {
    try {
        let id = req.params.id;
        const output= await service.findOne({ id: id });
        sendResponse(res, HttpStatus.OK, output);

    } catch (error) {
        next(error);
        //NOT_FOUND: 404;
        sendErrorResponse(res, HttpStatus.NOT_FOUND, '404 Not Found');

    }
};

//d.  update services
serviceController.updateService = async (req, res, next) => {
    try {
        let id = req.params.id;
        const output = await service.update(req.body, { where: { id: id } });
        sendResponse(res, HttpStatus.OK, output);

    } catch (error) {
       next(error);
       sendErrorResponse(res, HttpStatus.BAD_REQUEST, 'Bad Request');

    }
};


//e.  delete service
serviceController.deleteService = async (req, res, next) => {
    try {
        let id = req.params.id;
        await service.destroy({ where: { id: id } });
        // CREATED: 201;
        sendResponse(res, HttpStatus.CREATED, null);
    } catch (error) {
 next(error);
 //409 CONFLICT
 sendErrorResponse(res, HttpStatus.CONFLICT, 'Conflict');


    }
};



module.exports = serviceController;
