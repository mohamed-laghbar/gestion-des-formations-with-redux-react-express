import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { ValidateEmail, validatePassword } from "../../utils/validation";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setEmailErr] = useState("");
  const [errPassword, setPasswordErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ValidateEmail(email)) {
      return setEmailErr("Invalid email format!");
    } else setEmailErr("");

    if (!validatePassword(password)) {
      return setPasswordErr("Password must be more then 2 caracteres");
    } else setPasswordErr("");

    try {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // login true
      const role = data?.role;
      const acces_token = data?.acces_token;
      console.log(data);

      setAuth({ acces_token, role });
      localStorage.setItem("role", role);
      localStorage.setItem("token", acces_token);

      navigate(`/${role}`);

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm 	 mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 bg-.messageamber-100	 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-4xl font-bold	 text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              {errEmail ? (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  {" "}
                  {errEmail}
                </div>
              ) : (
                ""
              )}
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              {errPassword ? (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  {" "}
                  {errPassword}
                </div>
              ) : (
                ""
              )}

              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              Did you forget your password, Don't worry <br></br>
              <a
                className="no-underline font-medium	 border-b border-grey-dark text-blue-900"
                href="/resetpassword"
              >
                <span className="font-bold	"> Reset from here </span>
              </a>
            </div>
            <div className="text-center text-sm text-grey-dark mt-4"></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
