import React from "react";
import LoginForm from "../components/LoginForm";
import { Toaster } from "react-hot-toast";

function LoginPage() {
  return (
    <>
      <Toaster />
      {/* LoginForm */}
      <LoginForm />
    </>
  );
}

export default LoginPage;
