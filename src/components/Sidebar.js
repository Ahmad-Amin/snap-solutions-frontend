import React from "react";
import siteLogo from "../assets/siteLogo.png";

import { LuLayoutDashboard } from "react-icons/lu";
import { RiDriveLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import MenuButtons from "./MenuButtons";
import { useContext } from "react";
import UserContext from "../store/user-context";

const Sidebar = () => {

  const userCtx = useContext(UserContext)

  const handleLogOut = () => {
    userCtx.logoutUser()
  }

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
            isEnabled={true}
          />
          <MenuButtons
            icon={<RiDriveLine />}
            menuText="drive"
            color="#B2B2B2"
            isEnabled={true}
          />
          <MenuButtons
            icon={<CgNotes />}
            menuText="overview"
            color="#B2B2B2"
            isEnabled={false}
          />
          <div onClick={handleLogOut}>
            <MenuButtons
              icon={<IoMdLogOut />}
              menuText="logOut"
              isEnabled={false}
            />
          </div>
        </div>

        <div id="otherSection" className="mt-10">
          <p className="uppercase text-xs font-medium py-2 text-neutral-600">
            Other
          </p>
          <MenuButtons
            icon={<BiSupport />}
            menuText="support"
            isEnabled={false}
          />
          <MenuButtons
            icon={<IoMdSettings />}
            menuText="settings"
            isEnabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
