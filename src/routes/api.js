const express = require('express');

const BlogController = require('../controllers/BlogController')
const TeamController = require('../controllers/TeamController')
const ServiceController = require('../controllers/ServiceController')
const UsersController = require('../controllers/UserControllers')
const FileUploadController = require('../controllers/FileUploadController')


const AuthVerification = require('../middlewares/AuthVerification');
const upload = require('../middlewares/FileUploads');


const router = express.Router();

//! Blog Routes
router.post('/CreateBlog', AuthVerification, BlogController.CreateBlog)
router.get('/GetAllBlogs', BlogController.GetAllBlogs)
router.get('/GetOneBlog/:id', BlogController.GetOneBlog)
router.delete('/DeleteOneBlog/:id', AuthVerification, BlogController.DeleteOneBlog)
router.put('/UpdateOneBlog/:id', AuthVerification, BlogController.UpdateOneBlog)


//! Team Routes
router.post('/CreateTeam', AuthVerification, TeamController.CreateTeam)
router.get('/GetAllTeams', TeamController.GetAllTeams)
router.get('/GetOneTeam/:id', TeamController.GetOneTeam)
router.delete('/DeleteOneTeam/:id', AuthVerification, TeamController.DeleteOneTeam)
router.put('/UpdateOneTeam/:id', AuthVerification, TeamController.UpdateOneTeam)

//! Service Routes
router.post('/CreateService', AuthVerification, ServiceController.CreateService)
router.get('/GetAllServices', ServiceController.GetAllServices)
router.get('/GetOneService/:id', ServiceController.GetOneService)
router.delete('/DeleteOneService/:id', AuthVerification, ServiceController.DeleteOneService)
router.put('/UpdateOneService/:id', AuthVerification, ServiceController.UpdateOneService)




//! User api
router.post("/register", UsersController.register)
router.post("/login", UsersController.loginUser)
router.get("/logout", AuthVerification, UsersController.logoutUser)
//router.get('/UserOTP/:email', UserController.UserOTP)
//router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
//router.get('/UserLogout', AuthVerification, UserController.UserLogout)
//router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
//router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
//router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)




// file routes
router.post("/upload", upload.array("file", 20), FileUploadController.fileUpload);




module.exports = router;