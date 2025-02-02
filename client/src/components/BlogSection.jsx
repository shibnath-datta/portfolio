import React from "react";
import BlogStore from "../store/BlogStore";

const BlogSection = () => {
  const { BlogList } = BlogStore();
  console.log(BlogList);

  if (BlogList === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="bg-white py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-center md:text-left">
              <h3 className="text-sm text-gray-500">— Blogs</h3>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                <span className="text-yellow-500">Our</span> Latest Blog!
              </h2>
            </div>
          </div>

          {/* Blog Cards - 3 Per Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}

            {BlogList.map((item, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="mb-4 flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                    <a
                      href="#"
                      className="text-yellow-500 hover:text-yellow-600 font-semibold inline-block mt-4"
                    >
                      Learn more →
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default BlogSection;
