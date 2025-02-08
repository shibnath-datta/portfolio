import React from "react";
import ServiceStore from "../store/ServiceStore";

const ServiceSection = () => {
  const { ServiceList } = ServiceStore();
  console.log(ServiceList);

  if (ServiceList === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section className="bg-white py-10 md:py-20">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-sm text-gray-500">— Services</h3>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                  <span className="text-yellow-500">Services</span> I Provide
                </h2>
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              {ServiceList.map((item, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                    >
                      <div className="mb-4 flex justify-center">
                        <img
                          src={`/api/v1/upload/` + item.icon}
                          alt="UI/UX Design"
                          className="w-16 h-16"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
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
      </>
    );
  }
};

export default ServiceSection;
