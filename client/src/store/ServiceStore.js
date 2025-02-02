import { create } from "zustand";
import axios from "axios";

const ServiceStore = create((set) => ({
  ServiceList: null,
  ServiceListRequest: async () => {
    let res = await axios.get(`/api/v1/GetAllServices`);
    if (res?.data['status'] === "success") {
      set({ ServiceList: res.data['data'] })
    }
  },

}))

export default ServiceStore;