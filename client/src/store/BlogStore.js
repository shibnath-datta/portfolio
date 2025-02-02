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

}))

export default BlogStore;