import React, { useEffect } from "react";
import ServiceSection from "../components/ServiceSection";
import ServiceStore from "../store/ServiceStore";

const ServicePage = () => {
  const { ServiceListRequest } = ServiceStore();

  useEffect(() => {
    (async () => {
      await ServiceListRequest();
    })();
  }, []);
  return (
    <>
      {/*Service Page*/}
      <ServiceSection />
    </>
  );
};

export default ServicePage;
