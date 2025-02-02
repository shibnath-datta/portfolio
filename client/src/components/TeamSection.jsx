import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamSection = () => {
  return (
    <>
      <section className="bg-white py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h3 className="text-sm text-yellow-500 uppercase font-semibold mb-2">
              Our Team
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet the Team
            </h2>
            <p className="text-gray-600 mt-4">
              The professionals behind our success.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <img
                src="https://placehold.co/400"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Olivia Smith
              </h4>
              <p className="text-sm text-gray-600 mb-4">UI/UX Designer</p>
              {/* Social Media Links */}
              <div className="flex justify-center gap-4">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <FaFacebook />
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <FaTwitter />
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <img
                src="/img/team-member-2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Ethan Brown
              </h4>
              <p className="text-sm text-gray-600 mb-4">Software Engineer</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <img
                src="/img/team-member-2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Ethan Brown
              </h4>
              <p className="text-sm text-gray-600 mb-4">Software Engineer</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <img
                src="/img/team-member-2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Ethan Brown
              </h4>
              <p className="text-sm text-gray-600 mb-4">Software Engineer</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
