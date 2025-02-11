const { CreateContactService, ContactListService } = require('../services/ContactServices')

exports.CreateContact = async (req, res) => {
  let result = await CreateContactService(req, res);
  return res.status(200).json(result)
}

exports.GetAllContacts = async (req, res) => {
  let result = await ContactListService();
  return res.status(200).json(result)
}

