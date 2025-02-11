import { create } from "zustand";
import axios from "axios";

const BlogStore = create((set) => ({
  BlogList: null,
  BlogListRequest: async () => {
    let res = await axios.get(`/api/v1/GetAllBlogs`);
    if (res?.data['status'] === "success") {
      set({ BlogList: res?.data['data'] })
    }
  },

  BlogOneRequest: async (id) => {
    let res = await axios.get(`/api/v1/GetOneBlog/` + id);
    if (res?.data['status'] === "success") {
      return res?.data['data'];
    }
  },

  BlogRemoveRequest: async (id) => {
    let res = await axios.delete(`/api/v1/DeleteOneBlog/` + id, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  BlogUpdateRequest: async (id, reqBody) => {
    let res = await axios.put(`/api/v1/UpdateOneBlog/` + id, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  BlogAddRequest: async (reqBody) => {
    let res = await axios.post(`/api/v1/CreateBlog`, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  }

}))

export default BlogStore;