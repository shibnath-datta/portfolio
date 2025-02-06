import React, { useEffect } from "react";
import ServiceList from "./../components/dashboard/service/ServiceList";
import ServiceStore from "../store/ServiceStore";

const ServiceListPage = () => {
  const { ServiceListRequest } = ServiceStore();

  useEffect(() => {
    (async () => {
      await ServiceListRequest();
    })();
  }, []);
  return (
    <>
      {/*Service list Component*/}
      <ServiceList />
    </>
  );
};

export default ServiceListPage;
