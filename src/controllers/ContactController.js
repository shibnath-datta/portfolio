const { CreateContactService, ContactListService, UpdateContactStatusService } = require('../services/ContactServices')

exports.CreateContact = async (req, res) => {
  let result = await CreateContactService(req, res);
  return res.status(200).json(result)
}

exports.GetAllContacts = async (req, res) => {
  let result = await ContactListService();
  return res.status(200).json(result)
}

exports.UpdateContactStatus = async (req, res) => {
  console.log(req.body)
  let result = await UpdateContactStatusService(req);
  return res.status(200).json(result)
}

