import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let isLogin = Cookies.get("token");

  return !!isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
