import React from "react";
import LoginForm from "../components/LoginForm";
import { Toaster } from "react-hot-toast";

function LoginPage() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* LoginForm */}
      <LoginForm />
    </>
  );
}

export default LoginPage;
