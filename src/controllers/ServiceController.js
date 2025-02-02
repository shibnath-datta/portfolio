const { CreateServiceService, ServiceListService, ServiceListOneService, ServiceDeleteService, ServiceUpdateService } = require('../services/ServiceServices')


exports.CreateService = async (req, res) => {
  let result = await CreateServiceService(req, res);
  return res.status(200).json(result)
}

exports.GetAllServices = async (req, res) => {
  let result = await ServiceListService();
  return res.status(200).json(result)
}

exports.GetOneService = async (req, res) => {
  let result = await ServiceListOneService(req);
  return res.status(200).json(result)
}

exports.DeleteOneService = async (req, res) => {
  let result = await ServiceDeleteService(req);
  return res.status(200).json(result)
}

exports.UpdateOneService = async (req, res) => {
  let result = await ServiceUpdateService(req);
  return res.status(200).json(result)
}