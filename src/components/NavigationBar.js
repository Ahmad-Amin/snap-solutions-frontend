import React from "react";

import userImage from "../assets/userImage.png";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { InputField } from "./InputField";
import { Link } from "react-router-dom";

import siteLogo from "../assets/siteLogo.png";

const NavigationBar = ({ showLogo }) => {
  return (
    <>
      <div className="flex ">
        <Link to={"/dashboard"}>{showLogo && <img src={siteLogo} />}</Link>
        <div className="flex lg:flex-row flex-col gap-3 justify-between flex-1">
          <div className="flex items-center">
            <div className="flex flex-row gap-2 border border-neutral-300 px-4 py-1.5 rounded-lg bg-neutral-100">
              <input
                type="text"
                placeholder="search"
                className="border-none bg-transparent w-52 md:w-auto"
              />
              <div className="flex justify-start items-center mb-1">
                <CiSearch className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-row lg:gap-7 lg:justify-center gap-3 justify-end items-center">
            <IoIosNotifications className="text-2xl text-neutral-400 cursor-pointer" />
            <RiMessage2Fill className="text-2xl text-neutral-400 cursor-pointer" />
            <div className="flex justify-start items-center gap-3 cursor-pointer">
              <img src={userImage} alt="User Profile" />
              <Link to={`/settings`}>Admirra John</Link>
              <MdKeyboardArrowDown className="text-2xl text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-2 mb-4" />
    </>
  );
};

export default NavigationBar;
