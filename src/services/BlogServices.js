const { deleteImageFile } = require('../utility/fileHelper');
const BlogModel = require('../models/BlogModel')
const mongoose = require('mongoose');


const ObjectId = mongoose.Types.ObjectId;


//!Create a Blog

const CreateBlogService = async (req, res) => {
  try {
    let reqBody = req.body;
    await BlogModel.create(reqBody);
    return ({ status: "success", "message": "Blog Create Successfully" })
  } catch (err) {
    return ({ status: "fail", "message": "Blog Create Fail" })
  }
}

//! Read One Blog

const BlogListOneService = async (req) => {
  try {

    let id = new ObjectId(req.params.id);
    let existingBlog = await BlogModel.findOne({ _id: id });
    return ({ status: "success", data: existingBlog })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Read All Blog

const BlogListService = async () => {
  try {
    let existingBlogs = await BlogModel.find();
    return ({ status: "success", data: existingBlogs })
  }
  catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Delete One Blog

const BlogDeleteService = async (req) => {
  try {
    let blogID = new ObjectId(req.params.id);
    // Find the current blog document

    const blog = await BlogModel.findById(blogID);

    if (!blog) throw new Error("Blog not found");
    deleteImageFile(blog.image);

    await BlogModel.deleteOne({ _id: blogID });
    return ({ status: "success", "message": "Blog Delete Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Update One Blog

const BlogUpdateService = async (req) => {
  try {

    let blogID = new ObjectId(req.params.id);
    // Find the current blog document
    const blog = await BlogModel.findById(blogID);
    if (!blog) throw new Error("Blog not found");

    let reqBody = req.body;

    if (reqBody.image && reqBody.image !== blog.image) {

      deleteImageFile(blog.image);
    }


    await BlogModel.updateOne({ _id: blogID }, { $set: reqBody });

    return ({ status: "success", "message": "Blog Update Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}


module.exports = { CreateBlogService, BlogListService, BlogListOneService, BlogDeleteService, BlogUpdateService }