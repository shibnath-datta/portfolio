const express = require('express');

const BlogController = require('../controllers/BlogController')


const AuthVerification = require('../middlewares/AuthVerification')


const router = express.Router();

//! Blog Routes
router.post('/CreateBlog', BlogController.CreateBlog)
router.get('/GetAllBlogs', BlogController.GetAllBlogs)
router.get('/GetOneBlog/:id', BlogController.GetOneBlog)
router.delete('/DeleteOneBlog/:id', BlogController.DeleteOneBlog)
router.put('/UpdateOneBlog/:id', BlogController.UpdateOneBlog)


//! Service Routes



// User
//router.get('/UserOTP/:email', UserController.UserOTP)
//router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
//router.get('/UserLogout', AuthVerification, UserController.UserLogout)
//router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
//router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
//router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)








module.exports = router;