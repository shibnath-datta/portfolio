import React from "react";

function HeroSection() {
  return (
    <>
      <section className="bg-white py-10 md:py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-semibold text-yellow-500">
              Hello There!
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              I'm <span className="text-yellow-500">Shib Nath Datta</span>,
              <br />
              Software Developer Based in Bangladesh.
            </h1>
            <p className="text-gray-600 mt-4">
              I'm an experienced Software Developer with 10+ years in the field,
              collaborating with various companies and startups.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a href="/about">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-md flex items-center gap-2 shadow-lg hover:bg-yellow-600 cursor-pointer">
                  View My Portfolio
                  <span>▶️</span>
                </button>
              </a>
              <a href="/contact">
                <button className="bg-gray-800 text-white px-6 py-2 rounded-md shadow-lg hover:bg-gray-600 cursor-pointer">
                  Hire Me
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <div className="relative">
              <img
                src="/img/hero-image.png"
                alt="Hero"
                className="rounded-full shadow-lg"
              />
              {/* Badge */}
              <a href="/contact">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full transform translate-x-4 -translate-y-4 hover:bg-green-400">
                  Hire Me
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
