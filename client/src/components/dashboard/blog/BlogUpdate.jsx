import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogStore from "../../../store/BlogStore";

const BlogUpdate = () => {
  const { BlogOneRequest, BlogUpdateRequest } = BlogStore();
  const { id } = useParams(); // blog _id from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch existing blog data using the blog _id
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setFetching(true);
        const response = await BlogOneRequest(id);
        console.log("Blog details:", response.title);
        // Assuming response.data contains the blog object
        setFormData({
          title: response.title,
          content: response.content,
          image: response.image,
        });
      } catch (error) {
        console.error(
          "Error fetching blog details:",
          error.response?.data || error.message
        );
      } finally {
        setFetching(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to update the blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update the blog using its _id
      const response = await BlogUpdateRequest(id, formData);
      console.log("Blog updated successfully:", response.data);
      // Navigate back to the dashboard or blog list
      navigate("/blog-list");
    } catch (error) {
      console.error(
        "Error updating blog:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="container mx-auto px-4 py-6">
        <p>Loading blog details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Update Blog</h1>
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
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogUpdate;
