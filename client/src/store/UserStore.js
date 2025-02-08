import { create } from "zustand";
import axios from "axios";

const UserStore = create((set) => ({

  LoginRequest: async (reqBody) => {
    let res = await axios.post(`/api/v1/login`, reqBody, { withCredentials: true });
    return res?.data['status'] === "success";
  },


  LogoutRequest: async () => {
    let res = await axios.get(`/api/v1/logout`, { withCredentials: true });
    return res?.data['status'] === "success";
  },

}))

export default UserStore;