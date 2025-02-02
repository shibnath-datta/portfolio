const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, default: "Admin" },
},
  { timestamps: true, versionKey: false }
)
const BlogModel = mongoose.model('Blog', DataSchema)
module.exports = BlogModel