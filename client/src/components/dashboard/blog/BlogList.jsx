import React, { useState } from "react";
import axios from "axios";
import BlogStore from "../../../store/BlogStore";
import { ErrorToast, IsEmpty, SuccessToast } from "../../../utility/Helper";
import FileUploadStore from "../../../store/FileUploadStore";

// BlogList component for the BlogListPage

export const BlogList = () => {
  const {
    BlogList,
    BlogRemoveRequest,
    BlogListRequest,
    BlogUpdateRequest,
    BlogAddRequest,
  } = BlogStore();

  // Function to upload an image file and return the URL
  const { uploadImage } = FileUploadStore();

  // State for inline editing an existing blog
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  // State for inline adding a new blog
  const [isAdding, setIsAdding] = useState(false);
  const [addFormData, setAddFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  // Remove blog and refresh list with confirmation
  const onRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this blog?")) {
      return;
    }
    const result = await BlogRemoveRequest(id);
    if (result) {
      await BlogListRequest(); // Refresh the BlogList after removal
      SuccessToast("Blog removed successfully.");
    } else {
      ErrorToast("Failed to remove blog.");
    }
  };

  // Start editing a row: populate form with current values
  const onEditClick = (item) => {
    setEditingId(item._id);
    setEditFormData({
      title: item.title,
      content: item.content,
      image: item.image,
    });
  };

  // Handle changes for inline editing
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      // Store the File object instead of a string
      setEditFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setEditFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Save the updated blog and refresh the list
  const onSaveEdit = async (id) => {
    if (IsEmpty(editFormData.title) || IsEmpty(editFormData.content)) {
      ErrorToast("Title and content are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to update this blog?")) {
      return;
    }
    let updatedData = { ...editFormData };
    // If image is a File, upload it first
    if (editFormData.image instanceof File) {
      try {
        const imageUrl = await uploadImage(editFormData.image);
        updatedData.image = imageUrl;
      } catch (error) {
        ErrorToast("Image upload failed.");
        return;
      }
    }
    const result = await BlogUpdateRequest(id, updatedData);
    if (result) {
      await BlogListRequest(); // Refresh list with updated data
      setEditingId(null);
      SuccessToast("Blog updated successfully.");
    } else {
      ErrorToast("Failed to update blog.");
    }
  };

  // Cancel inline editing
  const onCancelEdit = () => {
    setEditingId(null);
    setEditFormData({
      title: "",
      content: "",
      image: "",
    });
  };

  // Handle changes for inline adding
  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setAddFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setAddFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Save the new blog and refresh the list
  const onSaveAdd = async () => {
    if (IsEmpty(addFormData.title) || IsEmpty(addFormData.content)) {
      ErrorToast("Title and content are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to add this blog?")) {
      return;
    }
    let dataToSubmit = { ...addFormData };
    // If image is a File, upload it first

    if (addFormData.image instanceof File) {
      try {
        console.log(addFormData.image);
        const imageUrl = await uploadImage(addFormData.image);
        dataToSubmit.image = imageUrl;
      } catch (error) {
        ErrorToast("Image upload failed.");
        return;
      }
    }
    const result = await BlogAddRequest(dataToSubmit);
    if (result) {
      await BlogListRequest(); // Refresh list with new blog
      setIsAdding(false);
      setAddFormData({ title: "", content: "", image: "" });
      SuccessToast("Blog added successfully.");
    } else {
      ErrorToast("Failed to add blog");
    }
  };

  // Cancel adding a new blog
  const onCancelAdd = () => {
    setIsAdding(false);
    setAddFormData({ title: "", content: "", image: "" });
  };

  if (BlogList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <br />
      {/* Button to add a new blog */}
      <div className="flex mb-4">
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-block"
        >
          Add Blog
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Blog List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
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
                    name="content"
                    value={addFormData.content}
                    onChange={handleAddChange}
                    placeholder="Enter content"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="file"
                    name="image"
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
            {/* Render blog rows */}
            {BlogList.map((item, i) => (
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
                      name="content"
                      value={editFormData.content}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.content
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === item._id ? (
                    <input
                      type="file"
                      name="image"
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    <img
                      src={`/api/v1/upload/` + item.image}
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
                        className="text-green-600 hover:text-green-900 mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={onCancelEdit}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => onEditClick(item)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onRemove(item._id)}
                        className="text-red-600 hover:text-red-900"
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

export default BlogList;
