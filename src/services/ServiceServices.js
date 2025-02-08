const ServiceModel = require('../models/ServiceModel')
const mongoose = require('mongoose');
const { deleteImageFile } = require('../utility/fileHelper');


const ObjectId = mongoose.Types.ObjectId;


//!Create a Service

const CreateServiceService = async (req, res) => {
  try {
    let reqBody = req.body;
    await ServiceModel.create(reqBody);
    return ({ status: "success", "message": "Service Create Successfully" })
  } catch (err) {
    return ({ status: "fail", "message": "Service Create Fail" })
  }
}

//! Read One Service

const ServiceListOneService = async (req) => {
  try {

    let id = new ObjectId(req.params.id);
    let existingService = await ServiceModel.findOne({ _id: id });
    return ({ status: "success", data: existingService })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Read All Service

const ServiceListService = async () => {
  try {
    let existingServices = await ServiceModel.find();
    return ({ status: "success", data: existingServices })
  }
  catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Delete One Service

const ServiceDeleteService = async (req) => {
  try {

    let serviceID = new ObjectId(req.params.id);

    // Find the current service document
    const service = await ServiceModel.findById(serviceID);

    if (!service) throw new Error("Service not found");
    //Delete icon File

    deleteImageFile(service.icon);

    await ServiceModel.deleteOne({ _id: serviceID });

    return ({ status: "success", "message": "Service Delete Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Update One Service

const ServiceUpdateService = async (req) => {
  try {

    let serviceID = new ObjectId(req.params.id);
    // Find the current service document
    const service = await ServiceModel.findById(serviceID);
    if (!service) throw new Error("service not found");

    let reqBody = req.body;

    if (reqBody.icon && reqBody.icon !== service.icon) {
      deleteImageFile(service.icon);
    }

    await ServiceModel.updateOne({ _id: serviceID }, { $set: reqBody });

    return ({ status: "success", "message": "Service Update Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}


module.exports = { CreateServiceService, ServiceListService, ServiceListOneService, ServiceDeleteService, ServiceUpdateService }