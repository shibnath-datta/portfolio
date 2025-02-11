const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false }
},
  { timestamps: true, versionKey: false }
);

const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;