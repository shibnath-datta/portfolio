const mongoose = require('mongoose');
const TeamModel = require('../models/TeamModel');


const ObjectId = mongoose.Types.ObjectId;


//!Create a Team

const CreateTeamService = async (req, res) => {
  try {

    //const { title, content, image, author } = req.body;
    let reqBody = req.body;
    await TeamModel.create(reqBody);
    return ({ status: "success", "message": "Team Create Successfully" })
  } catch (err) {
    return ({ status: "fail", "message": "Team Create Fail" })
  }
}

//! Read One Team

const TeamListOneService = async (req) => {
  try {

    let id = new ObjectId(req.params.id);

    // Step 1 -- no exiting user
    let existingTeam = await TeamModel.findOne({ _id: id });
    console.log(id)

    return ({ status: "success", data: existingTeam })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Read All Team

const TeamListService = async () => {
  try {
    let existingTeam = await TeamModel.find();
    return ({ status: "success", data: existingTeam })
  }
  catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Delete One Team

const TeamDeleteService = async (req) => {
  try {

    let id = new ObjectId(req.params.id);

    await TeamModel.deleteOne({ _id: id });

    return ({ status: "success", "message": "Team Delete Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Update One Team

const TeamUpdateService = async (req) => {
  try {

    let teamID = new ObjectId(req.params.id);
    let reqBody = req.body;

    await TeamModel.updateOne({ _id: teamID }, { $set: reqBody });

    return ({ status: "success", "message": "Team Update Successfully" })
  } catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}


module.exports = { CreateTeamService, TeamListService, TeamListOneService, TeamDeleteService, TeamUpdateService }