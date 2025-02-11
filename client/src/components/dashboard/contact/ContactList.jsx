import React, { useEffect, useState } from "react";
import ContactStore from "../../../store/ContactStore";
import { ErrorToast, SuccessToast } from "../../../utility/Helper";

const ContactList = () => {
  const { ContactList, ContactListRequest, UpdateContactStatus } =
    ContactStore();

  useEffect(() => {
    ContactListRequest();
  }, []);

  // Toggle Read/Unread status
  const toggleReadStatus = async (id, currentStatus) => {
    const updatedStatus = !currentStatus; // Toggle the boolean value
    const result = await UpdateContactStatus(id, updatedStatus);
    if (result) {
      await ContactListRequest(); // Refresh the list after update
      SuccessToast(`Message marked as ${updatedStatus ? "Read" : "Unread"}`);
    } else {
      ErrorToast("Failed to update message status.");
    }
  };

  if (!ContactList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Contact Messages
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ContactList.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.message}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  {item.isRead ? (
                    <span className="text-green-600">Read</span>
                  ) : (
                    <span className="text-red-600">Unread</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => toggleReadStatus(item._id, item.isRead)}
                    className={`px-4 py-2 rounded ${
                      item.isRead
                        ? "bg-yellow-500 text-white hover:bg-yellow-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    Mark as {item.isRead ? "Unread" : "Read"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
