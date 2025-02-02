const UserModel = require('../models/UserModel');
const { EncodeToken } = require('../utility/TokenHelper');


//const ObjectId = mongoose.Types.ObjectId;

//!Create a User

const registerService = async (req, res) => {
  try {
    let reqBody = req.body;

    let existingUser = await UserModel.findOne({ email: reqBody.email });
    if (existingUser) {
      return ({ status: "fail", "message": `User found: ${reqBody.email}` })
    }

    await UserModel.create(reqBody)
    return ({ status: "success", "message": "User registered successfully" })
  } catch (err) {
    return ({ status: "fail", "message": "User Create Fail" })
  }
}


//! Login Service

const loginService = async (req, res) => {
  try {
    let { email } = req.body;

    // Step 1 -- no exiting user
    let existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return ({ code: 400, status: "fail", "message": `Email Incorrect` });
    }

    let reqBody = req.body;
    let data = await UserModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 1, email: 1 } },
    ]);




    if (data.length === 1) {

      // Step 2 Token Create
      let token = EncodeToken(data[0]["email"]);

      // Step 3 Token set in cookie
      let options = {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: false,
        sameSite: "none",
        secure: true,
        path: "/"
      };
      //console.log(token);
      res.cookie('token', token, options);
      console.log(token);
      return ({ code: 200, status: "success", token, message: "Login successfully" });

    } else {
      return ({ code: 400, status: "fail", "message": `Password incorrect` });
    }

    //return ({ status: "success", "message": "Login successfully" })
  } catch (err) {


    return ({ code: 400, status: "fail", message: "Login Fail" });
  }

}


//! Logout Service
const logoutService = async (req, res) => {

  try {
    res.clearCookie('token');
    return ({ status: "success", message: "Logout successfully" });
  } catch (err) {
    return ({ status: "fail", message: "Logout Fail" });
  }
}







module.exports = { registerService, loginService, logoutService }