//!Create a Contact Massage

const ContactModel = require("../models/ContactModel");

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


module.exports = { CreateContactService, ContactListService }