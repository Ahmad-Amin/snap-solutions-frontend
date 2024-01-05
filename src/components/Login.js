import React, { useState, useRef } from "react";

import siteLogo from "../assets/siteLogo.png";
import LoginPageImage from "../assets/LoginPageImage.png";
import { InputField } from "./InputField";

const Login = ({ handleLogin }) => {

  const userSignIn = () => {
    handleLogin(checkboxRef.current.checked);
  };

  const checkboxRef = useRef(null);

  return (
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
                    for="email"
                    className="text-custom-blue text-base mb-1.5 block"
                  >
                    Email
                  </label>
                  <InputField
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    text="Email"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="text-custom-blue text-base mb-1.5 block"
                  >
                    password
                  </label>
                  <InputField
                    id="password"
                    placeholder="Enter your password"
                    type="password"
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
              <div className="flex flex-row gap-3">
                <input
                  className="bg-custom-blue text-white py-2 rounded-lg"
                  value="SuperAdmin LoginIn"
                  type="checkbox"
                  ref={checkboxRef}
                />
                <label>Sign In As super Admin</label>
              </div>

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
