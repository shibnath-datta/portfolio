const express = require('express');

const BlogController = require('../controllers/BlogController')
const TeamController = require('../controllers/TeamController')
const ServiceController = require('../controllers/ServiceController')
const UsersController = require('../controllers/UserControllers')


const AuthVerification = require('../middlewares/AuthVerification')


const router = express.Router();

//! Blog Routes
router.post('/CreateBlog', BlogController.CreateBlog)
router.get('/GetAllBlogs', BlogController.GetAllBlogs)
router.get('/GetOneBlog/:id', BlogController.GetOneBlog)
router.delete('/DeleteOneBlog/:id', BlogController.DeleteOneBlog)
router.put('/UpdateOneBlog/:id', BlogController.UpdateOneBlog)


//! Team Routes
router.post('/CreateTeam', TeamController.CreateTeam)
router.get('/GetAllTeams', TeamController.GetAllTeams)
router.get('/GetOneTeam/:id', TeamController.GetOneTeam)
router.delete('/DeleteOneTeam/:id', TeamController.DeleteOneTeam)
router.put('/UpdateOneTeam/:id', TeamController.UpdateOneTeam)

//! Service Routes
router.post('/CreateService', ServiceController.CreateService)
router.get('/GetAllServices', ServiceController.GetAllServices)
router.get('/GetOneService/:id', ServiceController.GetOneService)
router.delete('/DeleteOneService/:id', ServiceController.DeleteOneService)
router.put('/UpdateOneService/:id', ServiceController.UpdateOneService)

// User

//! User api
router.post("/register", UsersController.register)
router.post("/login", UsersController.loginUser)
router.get("/logout", UsersController.logoutUser)
//router.get('/UserOTP/:email', UserController.UserOTP)
//router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
//router.get('/UserLogout', AuthVerification, UserController.UserLogout)
//router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
//router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
//router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)








module.exports = router;