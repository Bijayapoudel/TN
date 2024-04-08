const { portfolio } = require('../models');
const { sendResponse, sendErrorResponse, HttpStatus } = require('../respond');

const portfolioController = {};



portfolioController.addPortfolio = async (req, res, next) => {
    try {
        let info = {
            projectName: req.body.title,
            client: req.body.client,
            image: req.file.path,
            description: req.body.description,
        };
        const output = await portfolio.create(info);
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error)
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
};

portfolioController.getAllPortfolios = async (req, res) => {
    console.log("getAllPortfolios");
    try {
        const output = await portfolio.findAll({});
        sendResponse(res, HttpStatus.OK, output);
    } catch (error) {
        next(error);
        sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }

},

    portfolioController.getSinglePortfolio = async (req, res) => {
        try {
            let id = req.params.id;
            let output = await portfolio.findOne({ id: id });
            sendResponse(res, HttpStatus.OK, output);
        } catch (error) {
            next(error);
            sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');

        }


    },

    portfolioController.deleteProjectById = async (req, res) => {
        const { id } = req.params;
        try {
            // Find the project by its ID and delete it
            const output = await portfolio.findByPk(id);
            if (!output) {
                //NOT_FOUND: 404
                sendErrorResponse(res, HttpStatus.NOT_FOUND, '404 Not Found');
            }
            await project.destroy();
            res.json({ message: 'Project deleted successfully' });
        } catch (error) {
            next(error);
            sendErrorResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }





module.exports = portfolioController; 