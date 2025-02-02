const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
},
  { timestamps: true, versionKey: false }
)
const ServiceModel = mongoose.model('Service', DataSchema)
module.exports = ServiceModel