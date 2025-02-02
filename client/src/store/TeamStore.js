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

}))

export default TeamStore;