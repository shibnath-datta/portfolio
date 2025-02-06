import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { ErrorToast, IsEmpty } from "../utility/Helper.js";
import UserStore from "../store/UserStore";

const LoginForm = () => {
  const { LoginRequest } = UserStore();

  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [data, setData] = useState({ email: "", password: "" });

  //login Function
  const submitData = async () => {
    // Validate email and password fields
    if (IsEmpty(data.email)) {
      ErrorToast("Email is required");
      return;
    }
    if (IsEmpty(data.password)) {
      ErrorToast("Password is required");
      return;
    }

    console.log(data.email, data.password);
    setLoading(true);
    // Login Api function is called here
    try {
      const result = await LoginRequest(data);

      if (result === true) {
        // Navigate without reloading the window
        navigate("/dashboard");
        // If you want to force reload, you could use:
        // window.location.href = "/";
      } else {
        console.log(result);
        ErrorToast("Password Incorrect or Email Incorrect");
      }
    } catch (error) {
      console.error("Login error details:", error.response);
      console.log(error.response.data.message);
      setLoading(false);
      ErrorToast(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section class="bg-gray-100 min-h-screen flex justify-center items-center ">
      {loading && <Loading />}

      <div className="relative py-3">
        <div class="rounded-md p-2 bg-white">
          <div class="flex items-center justify-center">
            <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
              <form class="mt-5">
                <div class="space-y-4">
                  <div>
                    <label class="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div class="mt-2">
                      <input
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        placeholder="Email"
                        type="email"
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between">
                      <label class="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div class="mt-2">
                      <input
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        placeholder="Password"
                        type="password"
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={submitData}
                      class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="button"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
              <div class="mb-2"></div>
              <p class="mt-2 text-base text-gray-600">
                <Link
                  to="/register"
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  href="#"
                >
                  Not have an account? Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
