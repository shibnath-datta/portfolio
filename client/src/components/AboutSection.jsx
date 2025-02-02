import React from "react";

const AboutSection = () => {
  return (
    <d>
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/img/about-image.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-sm text-yellow-500 uppercase font-semibold mb-4">
              About Us
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              We Are Creative Designers & Developers
            </h2>
            <p className="text-gray-600 mb-6">
              With over 10+ years of experience, we specialize in creating
              high-quality websites, applications, and user experiences. Our
              focus is on delivering innovative solutions to help businesses
              grow in the digital landscape.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </d>
  );
};

export default AboutSection;
