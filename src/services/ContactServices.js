//!Create a Contact Massage

const ContactModel = require("../models/ContactModel");
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const CreateContactService = async (req, res) => {
  try {
    let reqBody = req.body;
    await ContactModel.create(reqBody);
    return ({ status: "success", "message": "Contract Massage Create Successfully" })
  } catch (err) {
    return ({ status: "fail", "message": "Contract Create Fail" })
  }
}

//! Read All Contact Massage

const ContactListService = async () => {
  try {
    let existingContact = await ContactModel.find();
    return ({ status: "success", data: existingContact })
  }
  catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}

//! Update Contact Status

const UpdateContactStatusService = async (req) => {
  try {
    let contactID = new ObjectId(req.params.id);
    //const { isRead } = req.body;
    console.log("ID:", contactID)
    console.log(req.body)
    let { isRead } = req.body;
    if (typeof isRead !== 'boolean') {
      return { status: "fail", message: "Invalid 'isRead' value. Expected a boolean." };
    }

    await ContactModel.findByIdAndUpdate({ _id: contactID }, { isRead: isRead }, { new: true });
    return ({ status: "success", "message": "Contact Status Updated Successfully" })
  }
  catch (err) {
    return ({ status: "fail", "Message": err.toString() })
  }
}



module.exports = { CreateContactService, ContactListService, UpdateContactStatusService }