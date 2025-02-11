import React, { useState } from "react";
import ContactStore from "../store/ContactStore";

const ContractSection = () => {
  const { ContactAddRequest } = ContactStore();
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      ContactAddRequest(addFormData);
      setAddFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
    console.log(addFormData);
  };

  return (
    <>
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h3 className="text-sm text-yellow-500 uppercase font-semibold mb-2">
              Contact Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-4">
              Have questions or want to work together? Drop us a message below.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to us via email or phone.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <i className="fas fa-phone-alt text-yellow-500 text-lg"></i>
                  <span className="text-gray-700">+88 01710403033</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-envelope text-yellow-500 text-lg"></i>
                  <span className="text-gray-700">info@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-map-marker-alt text-yellow-500 text-lg"></i>
                  <span className="text-gray-700">
                    140/A, Uttara, Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} action="#" method="POST">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    value={addFormData.name}
                    onChange={handleInputChange}
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    value={addFormData.email}
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={addFormData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-medium py-3 rounded-lg hover:bg-yellow-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractSection;
