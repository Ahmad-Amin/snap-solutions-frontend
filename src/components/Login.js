import React, { useState, useContext } from "react";

import siteLogo from "../assets/siteLogo.png";
import LoginPageImage from "../assets/LoginPageImage.png";
import axios from "axios";
import UserContext from "../store/user-context";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../UI/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinnerShow, setSpinnerShow] = useState(false);

  const navigate = useNavigate();

  const userCtx = useContext(UserContext);

  const userSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    try {
      setSpinnerShow(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        data
      );

      if (response.status === 200 && response.status !== null) {
        const user = response.data;
        navigate("/dashboard");
        userCtx.saveUserData(user);
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data.error}`);
      userCtx.logoutUser();
    } finally {
      setSpinnerShow(false);
    }

    setEmail("");
    setPassword("");
  };

  return spinnerShow ? (
    <Spinner />
  ) : (
    <div className="py-11 px-5">
      <img className="h-auto max-w-full" alt="Website logo" src={siteLogo} />
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center flex-col">
          <div>
            <h1 className="text-custom-blue  font-semibold text-4xl">
              Welome Back
            </h1>
            <p className="text-neutral-500 text-sm">
              Welome back! Please enter your details
            </p>

            <div className="mt-11 w-96">
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-custom-blue text-base mb-1.5 block"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
                    name="name"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-custom-blue text-base mb-1.5 block"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <button className="my-5 text-neutral-400 block text-center">
                Forgot Password
              </button>
              <button
                className="w-full bg-custom-blue text-white py-2 rounded-lg"
                onClick={userSignIn}
              >
                Sign In
              </button>

              <p className="text-neutral-400 my-4 text-center">
                Don't have an account?{" "}
                <button href="#" className="text-custom-blue">
                  Sign up for free
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            alt="Login Page"
            src={LoginPageImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
