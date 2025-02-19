import React, { useState } from "react";
import ServiceStore from "../../../store/ServiceStore";
import FileUploadStore from "../../../store/FileUploadStore"; // File upload store with uploadImage()
import { SuccessToast, ErrorToast, IsEmpty } from "../../../utility/Helper";

export const ServiceList = () => {
  const {
    ServiceList,
    ServiceRemoveRequest,
    ServiceListRequest,
    ServiceUpdateRequest,
    ServiceAddRequest,
  } = ServiceStore();

  // Destructure the uploadImage function from the file upload store.
  const { uploadImage } = FileUploadStore();

  // State for inline editing an existing service
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    icon: "", // This will store either the existing URL or a File object when updated.
  });

  // State for inline adding a new service
  const [isAdding, setIsAdding] = useState(false);
  const [addFormData, setAddFormData] = useState({
    title: "",
    description: "",
    icon: "", // This will store either the URL (after upload) or a File object
  });

  // Remove service and refresh list with confirmation
  const onRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this service?")) {
      return;
    }
    const result = await ServiceRemoveRequest(id);
    if (result) {
      await ServiceListRequest();
      SuccessToast("Service removed successfully.");
    } else {
      ErrorToast("Failed to remove service.");
    }
  };

  // Start editing a row: populate form with current values
  const onEditClick = (item) => {
    setEditingId(item._id);
    setEditFormData({
      title: item.title,
      description: item.description,
      icon: item.icon, // This is the existing icon URL.
    });
  };

  // Handle changes for inline editing
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "icon" && files && files[0]) {
      // Store the file object if a new file is selected.
      setEditFormData((prev) => ({
        ...prev,
        icon: files[0],
      }));
    } else {
      setEditFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Save the updated service and refresh the list
  const onSaveEdit = async (id) => {
    if (
      IsEmpty(editFormData.title) ||
      IsEmpty(editFormData.description) ||
      IsEmpty(editFormData.icon)
    ) {
      ErrorToast("Title, description and icon are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to update this service?")) {
      return;
    }
    let updatedData = { ...editFormData };

    // If the icon field holds a File object, upload it first.
    if (editFormData.icon instanceof File) {
      try {
        const iconUrl = await uploadImage(editFormData.icon);
        updatedData.icon = iconUrl;
      } catch (error) {
        ErrorToast("Icon upload failed.");
        return;
      }
    }
    const result = await ServiceUpdateRequest(id, updatedData);
    if (result) {
      await ServiceListRequest();
      setEditingId(null);
      SuccessToast("Service updated successfully.");
    } else {
      ErrorToast("Failed to update service.");
    }
  };

  // Cancel inline editing
  const onCancelEdit = () => {
    setEditingId(null);
    setEditFormData({
      title: "",
      description: "",
      icon: "",
    });
  };

  // Handle changes for inline adding
  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "icon" && files && files[0]) {
      setAddFormData((prev) => ({
        ...prev,
        icon: files[0],
      }));
    } else {
      setAddFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Save the new service and refresh the list
  const onSaveAdd = async () => {
    if (
      IsEmpty(addFormData.title) ||
      IsEmpty(addFormData.description) ||
      IsEmpty(addFormData.icon)
    ) {
      ErrorToast("Title, description and icon are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to add this service?")) {
      return;
    }
    let dataToSubmit = { ...addFormData };

    // If the icon field holds a File object, upload it first.
    if (addFormData.icon instanceof File) {
      try {
        const iconUrl = await uploadImage(addFormData.icon);
        dataToSubmit.icon = iconUrl;
      } catch (error) {
        ErrorToast("Icon upload failed.");
        return;
      }
    }
    const result = await ServiceAddRequest(dataToSubmit);
    if (result) {
      await ServiceListRequest();
      setIsAdding(false);
      setAddFormData({ title: "", description: "", icon: "" });
      SuccessToast("Service added successfully.");
    } else {
      ErrorToast("Failed to add service.");
    }
  };

  // Cancel adding a new service
  const onCancelAdd = () => {
    setIsAdding(false);
    setAddFormData({ title: "", description: "", icon: "" });
  };

  if (ServiceList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <br />
      {/* Button to add a new service */}
      <div className="flex mb-4">
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-block"
        >
          Add Service
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Service List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Icon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Inline addition row */}
            {isAdding && (
              <tr>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="text"
                    name="title"
                    value={addFormData.title}
                    onChange={handleAddChange}
                    placeholder="Enter title"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <textarea
                    name="description"
                    value={addFormData.description}
                    onChange={handleAddChange}
                    placeholder="Enter description"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="file"
                    name="icon"
                    onChange={handleAddChange}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={onSaveAdd}
                    className="text-green-600 hover:text-green-900 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={onCancelAdd}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            )}
            {/* Render service rows */}
            {ServiceList.map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {editingId === item._id ? (
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {editingId === item._id ? (
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.description
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === item._id ? (
                    <input
                      type="file"
                      name="icon"
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    <img
                      src={`/api/v1/upload/` + item.icon}
                      alt={item.title}
                      className="h-10 w-10 rounded object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  {editingId === item._id ? (
                    <>
                      <button
                        onClick={() => onSaveEdit(item._id)}
                        className="text-green-600 hover:text-green-900 mr-2 cursor-pointer"
                      >
                        Save
                      </button>
                      <button
                        onClick={onCancelEdit}
                        className="text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => onEditClick(item)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onRemove(item._id)}
                        className="text-red-600 hover:text-red-900 cursor-pointer"
                      >
                        Remove
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceList;
