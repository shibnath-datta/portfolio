const multer = require("multer");
const path = require("path");

// Configure storage engine for local uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    // Generate a unique name: "img" + timestamp + "-" + original file extension
    const uniqueSuffix = "img" + Date.now() + "-";
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
module.exports = upload;