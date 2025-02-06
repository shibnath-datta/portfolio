import React, { useState } from "react";
import TeamStore from "../../../store/TeamStore";
import { SuccessToast, ErrorToast, IsEmpty } from "../../../utility/Helper";

// Helper function to transform form data into the schema format
const transformTeamData = (data) => ({
  name: data.name,
  position: data.position,
  bio: data.bio,
  image: data.image,
  socialLinks: {
    facebook: data.facebook,
    twitter: data.twitter,
    linkedin: data.linkedin,
  },
});

export const TeamList = () => {
  const {
    TeamList,
    TeamRemoveRequest,
    TeamListRequest,
    TeamUpdateRequest,
    TeamAddRequest,
  } = TeamStore();

  // State for inline editing an existing team member
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    position: "",
    bio: "",
    image: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  // State for inline adding a new team member
  const [isAdding, setIsAdding] = useState(false);
  const [addFormData, setAddFormData] = useState({
    name: "",
    position: "",
    bio: "",
    image: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  // Remove team member and refresh list with confirmation
  const onRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this team member?")) {
      return;
    }
    const result = await TeamRemoveRequest(id);
    if (result) {
      await TeamListRequest();
      SuccessToast("Team member removed successfully.");
    } else {
      ErrorToast("Failed to remove team member.");
    }
  };

  // Start editing a row: populate form with current values
  const onEditClick = (item) => {
    setEditingId(item._id);
    setEditFormData({
      name: item.name,
      position: item.position,
      bio: item.bio,
      image: item.image,
      facebook: item.socialLinks ? item.socialLinks.facebook : "",
      twitter: item.socialLinks ? item.socialLinks.twitter : "",
      linkedin: item.socialLinks ? item.socialLinks.linkedin : "",
    });
  };

  // Handle changes for inline editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save the updated team member and refresh the list
  const onSaveEdit = async (id) => {
    if (
      IsEmpty(editFormData.name) ||
      IsEmpty(editFormData.position) ||
      IsEmpty(editFormData.bio)
    ) {
      ErrorToast("Name, position and bio are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to update this team member?")) {
      return;
    }
    const transformedData = transformTeamData(editFormData);
    const result = await TeamUpdateRequest(id, transformedData);
    if (result) {
      await TeamListRequest();
      setEditingId(null);
      SuccessToast("Team member updated successfully.");
    } else {
      ErrorToast("Failed to update team member.");
    }
  };

  // Cancel inline editing
  const onCancelEdit = () => {
    setEditingId(null);
    setEditFormData({
      name: "",
      position: "",
      bio: "",
      image: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    });
  };

  // Handle changes for inline adding
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save the new team member and refresh the list
  const onSaveAdd = async () => {
    if (
      IsEmpty(addFormData.name) ||
      IsEmpty(addFormData.position) ||
      IsEmpty(addFormData.bio)
    ) {
      ErrorToast("Name, position and bio are required.");
      return;
    }
    if (!window.confirm("Are you sure you want to add this team member?")) {
      return;
    }
    const transformedData = transformTeamData(addFormData);
    const result = await TeamAddRequest(transformedData);
    if (result) {
      await TeamListRequest();
      setIsAdding(false);
      setAddFormData({
        name: "",
        position: "",
        bio: "",
        image: "",
        facebook: "",
        twitter: "",
        linkedin: "",
      });
      SuccessToast("Team member added successfully.");
    } else {
      ErrorToast("Failed to add team member.");
    }
  };

  // Cancel adding a new team member
  const onCancelAdd = () => {
    setIsAdding(false);
    setAddFormData({
      name: "",
      position: "",
      bio: "",
      image: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    });
  };

  if (TeamList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <br />
      {/* Button to add a new team member */}
      <div className="flex mb-4">
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-block"
        >
          Add Team Member
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Team List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Social Links
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
                    name="name"
                    value={addFormData.name}
                    onChange={handleAddChange}
                    placeholder="Enter name"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="text"
                    name="position"
                    value={addFormData.position}
                    onChange={handleAddChange}
                    placeholder="Enter position"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <textarea
                    name="bio"
                    value={addFormData.bio}
                    onChange={handleAddChange}
                    placeholder="Enter bio"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="text"
                    name="image"
                    value={addFormData.image}
                    onChange={handleAddChange}
                    placeholder="Image URL"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <input
                    type="text"
                    name="facebook"
                    value={addFormData.facebook}
                    onChange={handleAddChange}
                    placeholder="Facebook URL"
                    className="w-full border rounded px-2 py-1 mb-1"
                  />
                  <input
                    type="text"
                    name="twitter"
                    value={addFormData.twitter}
                    onChange={handleAddChange}
                    placeholder="Twitter URL"
                    className="w-full border rounded px-2 py-1 mb-1"
                  />
                  <input
                    type="text"
                    name="linkedin"
                    value={addFormData.linkedin}
                    onChange={handleAddChange}
                    placeholder="LinkedIn URL"
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
            {/* Render team rows */}
            {TeamList.map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {editingId === item._id ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {editingId === item._id ? (
                    <input
                      type="text"
                      name="position"
                      value={editFormData.position}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.position
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {editingId === item._id ? (
                    <textarea
                      name="bio"
                      value={editFormData.bio}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.bio
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === item._id ? (
                    <input
                      type="text"
                      name="image"
                      value={editFormData.image}
                      onChange={handleEditChange}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {editingId === item._id ? (
                    <>
                      <input
                        type="text"
                        name="facebook"
                        value={editFormData.facebook}
                        onChange={handleEditChange}
                        placeholder="Facebook URL"
                        className="w-full border rounded px-2 py-1 mb-1"
                      />
                      <input
                        type="text"
                        name="twitter"
                        value={editFormData.twitter}
                        onChange={handleEditChange}
                        placeholder="Twitter URL"
                        className="w-full border rounded px-2 py-1 mb-1"
                      />
                      <input
                        type="text"
                        name="linkedin"
                        value={editFormData.linkedin}
                        onChange={handleEditChange}
                        placeholder="LinkedIn URL"
                        className="w-full border rounded px-2 py-1"
                      />
                    </>
                  ) : (
                    <>
                      <div>FB: {item.socialLinks?.facebook}</div>
                      <div>TW: {item.socialLinks?.twitter}</div>
                      <div>LI: {item.socialLinks?.linkedin}</div>
                    </>
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

export default TeamList;
