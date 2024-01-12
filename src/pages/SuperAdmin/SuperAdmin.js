import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import AllUsers from "../SuperAdmin/AllUsers";

import SuperSidebar from "./SuperSideBar";
import SuperDashboard from "./SuperDashboard";
import UserChat from "./UserChat";
import { useLocation } from "react-router-dom";

const SuperAdmin = () => {
  const location = useLocation();
  const path = location.pathname;
  const noSideBarPaths = ["/userChat"];

  const hideSideBar = noSideBarPaths.some((allowedPath) =>
    path.includes(allowedPath)
  );

  return (
    <>
      <div className="xl:grid xl:grid-cols-6">
        {hideSideBar ? null : (
          <div className=" py-11 px-5 h-screen">
            <SuperSidebar />
          </div>
        )}

        <div
          className={`md:py-6 md:px-12 py-3 px-6 ${
            hideSideBar ? "xl:col-span-6" : "xl:col-span-5 bg-neutral-100"
          }`}
        >
          <NavigationBar showLogo={hideSideBar} />
          <div className="">
            <Routes>
              <Route
                path="/dashboard"
                index
                element={<SuperDashboard />}
              ></Route>
              <Route path="/users" index element={<AllUsers />}></Route>
              <Route path="/userChat" element={<UserChat />}></Route>
              {/* <Route path="support" element={<Dashboard />}></Route> */}
              {/* <Route path="settings" element={<Dashboard />}></Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdmin;
