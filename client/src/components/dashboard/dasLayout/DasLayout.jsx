import React from "react";
import { DasMenu } from "./DasMenu";
import { Toaster } from "react-hot-toast";

const DasLayout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/*Dashboard MenuBar*/}
      <DasMenu />
      <div className="pt-[120px] sm:pt-[80px]">{children}</div>
    </>
  );
};

export default DasLayout;
