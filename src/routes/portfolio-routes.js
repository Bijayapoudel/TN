const portfolioRouter = require('../controllers/portfolio-controllers');
const router = require('express').Router();
const upload=require('../helpers/upload-helper');
const validateToken = require('../middlewares/auth-middleware');
const portfolioRequest=require('../validations/portfolio-validation');

router.use(validateToken);
router.post('/', upload.single('image'), portfolioRequest, portfolioRouter.addPortfolio);
router.get('/', portfolioRouter.getAllPortfolios);
router.get('/:id', portfolioRouter.getSinglePortfolio);
router.delete('/:id', portfolioRouter.deleteProjectById);


module.exports = router;