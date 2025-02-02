import { create } from "zustand";
import axios from "axios";

const BlogStore = create((set) => ({
  BlogList: null,
  BlogListRequest: async () => {
    let res = await axios.get(`/api/v1/GetAllBlogs`);
    if (res?.data['status'] === "success") {
      set({ BlogList: res.data['data'] })
    }
  },

  LegalDetails: null,
  LegalDetailsRequest: async (type) => {
    set({ LegalDetails: null })
    let res = await axios.get(`/api/v1/LegalDetails/${type}`);
    if (res?.data['status'] === "success") {
      set({ LegalDetails: res?.data['data'] })
    }
  },
}))

export default BlogStore;