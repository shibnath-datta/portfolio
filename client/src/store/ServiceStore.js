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
  ServiceOneRequest: async (id) => {
    let res = await axios.get(`/api/v1/GetOneService/` + id);
    if (res?.data['status'] === "success") {
      return res?.data['data'];
    }
  },

  ServiceRemoveRequest: async (id) => {
    let res = await axios.delete(`/api/v1/DeleteOneService/` + id, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  ServiceUpdateRequest: async (id, reqBody) => {
    let res = await axios.put(`/api/v1/UpdateOneService/` + id, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  ServiceAddRequest: async (reqBody) => {
    let res = await axios.post(`/api/v1/CreateService`, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  }

}))

export default ServiceStore;