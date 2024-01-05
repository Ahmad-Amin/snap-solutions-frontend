import React from "react";

import MenuButtons from "../../components/MenuButtons";

import { LuLayoutDashboard } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

import { ImUsers } from "react-icons/im";
import { RiWallet3Fill } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import siteLogo from "../../assets/siteLogo.png";

const SuperSidebar = ({ handleLogOut }) => {
  return (
    <div>
      <img className="h-auto max-w-full" alt="Website logo" src={siteLogo} />
      <div className="px-7 py-9">
        <div id="mainmenu">
          <p className="uppercase text-xs font-medium py-2 text-neutral-600">
            main menu
          </p>
          <MenuButtons
            icon={<LuLayoutDashboard />}
            menuText="dashboard"
            color="#B2B2B2"
          />
          <MenuButtons icon={<ImUsers />} menuText="users" color="#B2B2B2" />
          <MenuButtons
            icon={<RiWallet3Fill />}
            menuText="accounts"
            color="#B2B2B2"
          />
          <MenuButtons
            icon={<IoIosStats />}
            menuText="statistics"
            color="#B2B2B2"
          />
        </div>

        <div id="otherSection" className="mt-10">
          <p className="uppercase text-xs font-medium py-2 text-neutral-600">
            Other
          </p>
          <MenuButtons icon={<IoMdSettings />} menuText="settings" />
          <div onClick={() => handleLogOut(false)}>
            <MenuButtons icon={<IoMdLogOut />} menuText="logOut" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperSidebar;
