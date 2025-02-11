import React, { useEffect } from "react";
import ContactList from "../components/dashboard/contact/ContactList";
import ContactStore from "../store/ContactStore";

function ContactListPage() {
  const { ContactListRequest } = ContactStore();

  useEffect(() => {
    (async () => {
      await ContactListRequest();
    })();
  }, []);
  return (
    <>
      {/*Blog list Component*/}
      <ContactList />
    </>
  );
}

export default ContactListPage;
