const { CreateBlogService, BlogListService, BlogListOneService, BlogDeleteService, BlogUpdateService } = require('../services/BlogServices')


exports.CreateBlog = async (req, res) => {
  let result = await CreateBlogService(req, res);
  return res.status(200).json(result)
}

exports.GetAllBlogs = async (req, res) => {
  let result = await BlogListService();
  return res.status(200).json(result)
}

exports.GetOneBlog = async (req, res) => {
  let result = await BlogListOneService(req);
  return res.status(200).json(result)
}

exports.DeleteOneBlog = async (req, res) => {
  let result = await BlogDeleteService(req);
  return res.status(200).json(result)
}

exports.UpdateOneBlog = async (req, res) => {
  let result = await BlogUpdateService(req);
  return res.status(200).json(result)
}