import React, { useContext } from "react";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";

import siteLogo from "../assets/siteLogo.png";
import UserContext from "../store/user-context";

const NavigationBar = ({ showLogo }) => {
  const userCtx = useContext(UserContext);

  const { name, displayImage } = userCtx.user;

  const displayName = name || "No Name";

  return (
    <>
      <div className="flex ">
        <Link to={"/dashboard"}>{showLogo && <img src={siteLogo} alt="Site Logo" />}</Link>
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
              {displayImage ? (
                <img
                  src={displayImage}
                  alt="User Profile"
                  className=" w-11 h-11 rounded-full object-cover"
                />
              ) : (
                <div className=" w-11 h-11 rounded-full bg-pink-300 uppercase flex justify-center items-center">
                  {name?.substring(0, 2)}
                </div>
              )}

              <Link to={`/settings`}>{displayName}</Link>
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
