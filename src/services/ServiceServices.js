const ServiceModel = require('../models/ServiceModel')
const mongoose = require('mongoose');


const ObjectId = mongoose.Types.ObjectId;


//!Create a Service

const CreateServiceService = async (req, res) => {
  try {

    //const { title, content, image, author } = req.body;
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

    // Step 1 -- no exiting user
    let existingService = await ServiceModel.findOne({ _id: id });
    console.log(id)

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

    let id = new ObjectId(req.params.id);

    await ServiceModel.deleteOne({ _id: id });

    return ({ status: "success", "message": "Service Delete Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Update One Service

const ServiceUpdateService = async (req) => {
  try {

    let ServiceID = new ObjectId(req.params.id);
    let reqBody = req.body;

    await ServiceModel.updateOne({ _id: ServiceID }, { $set: reqBody });

    return ({ status: "success", "message": "Service Update Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}


module.exports = { CreateServiceService, ServiceListService, ServiceListOneService, ServiceDeleteService, ServiceUpdateService }