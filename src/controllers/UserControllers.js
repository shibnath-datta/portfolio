
const { registerService, loginService, logoutService } = require('../services/UserServices')

//! Register

exports.register = async (req, res) => {
  let result = await registerService(req);
  return res.status(200).json(result)
};

//! Login
exports.loginUser = async (req, res) => {
  let result = await loginService(req, res);
  console.log(result)
  return res.status(result.code).json(result)
};

//! logout
exports.logoutUser = async (req, res) => {
  let result = await logoutService(req, res);
  return res.status(200).json(result)
};
