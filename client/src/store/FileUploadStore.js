import { create } from "zustand";
import axios from "axios";


const FileUploadStore = create((set) => ({
  FileUpload: null,
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/api/v1/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Adjust the returned property as per your backend response.
      console.log("Uploaded file:", res.data.file[0].filename);
      return res.data.file[0].filename;
    } catch (error) {
      console.error("Image upload failed", error);
      throw error;
    }
  }
}));

export default FileUploadStore;