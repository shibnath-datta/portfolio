// Utility function to delete image files from the server
const fs = require("fs");
const path = require("path");

exports.deleteImageFile = (fileName) => {
  if (!fileName) return;
  // Assuming your static URL is like: http://localhost:5030/uploads/filename.jpg
  //const parts = imageUrl.split("/uploads/");
  //if (parts.length < 2) return;
  //const fileName = parts[1];
  // Adjust the uploads folder path as needed (here we assume uploads folder is one level up from the current file)
  //const filePath = path.join(__dirname, "..", "..", "uploads", fileName); //or
  const filePath = path.join(process.cwd(), "uploads", fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("Deleted file:", filePath);
    }
  });
};
