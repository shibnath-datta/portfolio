import React from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/*MenuBar*/}
      <MenuBar />
      <div className="pt-[120px] sm:pt-[80px]">{children}</div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
