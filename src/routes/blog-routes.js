const blogRouter = require('../controllers/blog-controllers');
const app = require('express').Router();
const validateToken = require('../middlewares/auth-middleware');

app.use(validateToken);
app.post('/', blogRouter.addBlog);
app.get('/', blogRouter.getAllBlogs);
app.get('/:id', blogRouter.getSingleBlog);
app.put('/:id', blogRouter.updateBlog);
app.delete('/:id', blogRouter.deleteBlog);


module.exports = app;