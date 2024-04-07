const portfolioRouter = require('../controllers/portfolio-controllers');
const app = require('express').Router();
const validateToken = require('../middlewares/auth-middleware');

app.use(validateToken);
app.post('/', portfolioRouter.addPortfolio);
app.get('/', portfolioRouter.getAllPortfolios);
app.get('/:id', portfolioRouter.getSinglePortfolio);
app.delete('/:id', portfolioRouter.deleteProjectById);


module.exports = app;