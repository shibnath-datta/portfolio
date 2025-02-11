import { create } from "zustand";
import axios from "axios";

const ContactStore = create((set) => ({
  ContactList: null,
  ContactListRequest: async () => {
    let res = await axios.get(`/api/v1/GetAllContacts`);
    if (res?.data['status'] === "success") {
      set({ ContactList: res?.data['data'] })
    }
  },

  ContactOneRequest: async (id) => {
    let res = await axios.get(`/api/v1/GetOneContact/` + id);
    if (res?.data['status'] === "success") {
      return res?.data['data'];
    }
  },

  ContactRemoveRequest: async (id) => {
    let res = await axios.delete(`/api/v1/DeleteOneContact/` + id, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  },

  ContactAddRequest: async (reqBody) => {
    let res = await axios.post(`/api/v1/CreateContact`, reqBody, { withCredentials: true });
    if (res?.data['status'] === "success") {
      return true;
    }
  }

}))

export default ContactStore;