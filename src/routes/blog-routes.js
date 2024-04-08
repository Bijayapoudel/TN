const blogRouter = require('../controllers/blog-controllers');
const app = require('express').Router();
const upload=require('../helpers/upload-helper');
const validateToken = require('../middlewares/auth-middleware');
const blogRequest=require('../validations/blog-validation');

app.use(validateToken);
app.post('/', upload.single('image'), blogRequest, blogRouter.addBlog);
app.get('/', blogRouter.getAllBlogs);
app.get('/:id', blogRouter.getSingleBlog);
app.put('/:id', blogRouter.updateBlog);
app.delete('/:id', blogRouter.deleteBlog);


module.exports = app;