import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogStore from "../../../store/BlogStore";

const BlogAdd = () => {
  const { BlogAddRequest } = BlogStore();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.title.trim()) {
      console.error("Title is required");
      return;
    }
    if (!formData.content.trim()) {
      console.error("Content is required");
      return;
    }

    setLoading(true);
    try {
      // Replace '/api/blogs' with your actual API endpoint
      const response = await BlogAddRequest(formData);
      console.log("Blog added successfully:", response.data);
      // Navigate to dashboard or any page after successful addition
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Error adding blog:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-6"
      >
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter blog content"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {/* Image Field */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Optional: Enter image URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogAdd;
