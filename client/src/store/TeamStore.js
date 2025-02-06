import { create } from "zustand";
import axios from "axios";

const TeamStore = create((set) => ({
  TeamList: null,
  TeamListRequest: async () => {
    let res = await axios.get(`/api/v1/GetAllTeams`);
    if (res?.data['status'] === "success") {
      set({ TeamList: res.data['data'] })
    }
  },

  TeamOneRequest: async (id) => {
    let res = await axios.get(`/api/v1/GetOneTeam/` + id);
    if (res?.data['status'] === "success") {
      return res?.data['data'];
    }
  },

  TeamRemoveRequest: async (id) => {
    let res = await axios.delete(`/api/v1/DeleteOneTeam/` + id, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  TeamUpdateRequest: async (id, reqBody) => {
    let res = await axios.put(`/api/v1/UpdateOneTeam/` + id, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  TeamAddRequest: async (reqBody) => {
    let res = await axios.post(`/api/v1/CreateTeam`, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  }

}))

export default TeamStore;