import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const option = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/login",
        {
          email: email,
          password: password,
        },
        option
      );
      toast.warn(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.warn(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account{" "}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email{" "}
                <label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>{" "}
              </label>{" "}
            </div>{" "}
            <div className="mt-4">
              <label className="block">
                Password{" "}
                <label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>{" "}
              </label>{" "}
            </div>{" "}
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
      <ToastContainer />
    </div>
  );
};

export default Login;
