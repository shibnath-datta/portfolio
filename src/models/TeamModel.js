const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  bio: { type: String },
  image: { type: String, required: true },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String }
  }
},
  { timestamps: true, versionKey: false }
)
const TeamModel = mongoose.model('Team', DataSchema)
module.exports = TeamModel