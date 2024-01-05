import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Storage from "../pages/Storage";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";

import EditAccount from "./EditAccount";

import { useLocation } from "react-router-dom";
import MyAccount from "./MyAccount";

export const AdminDashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  const noSideBarPaths = ["/settings", "/edit"];

  const hideSideBar = noSideBarPaths.some((allowedPath) =>
    path.includes(allowedPath)
  );
  return (
    <>
      <div className="xl:grid xl:grid-cols-6">  
        {hideSideBar ? null : (
          <div className="bg-neutral-100 py-11 px-5 h-screen">
            <Sidebar />
          </div>
        )}

        <div
          className={`md:py-6 md:px-12 py-3 px-6 ${
            hideSideBar ? "xl:col-span-6" : "xl:col-span-5"
          }`}
        >
          <NavigationBar showLogo={hideSideBar} />
          <div className="">
            <Routes>
              <Route path="/dashboard" index element={<Dashboard />}></Route>
              <Route path="/drive" element={<Storage />}></Route>
              <Route path="/settings" element={<MyAccount />}></Route>
              <Route path="/edit" element={<EditAccount />}></Route>
              {/* <Route path="overview" element={<Dashboard />}></Route> */}
              {/* <Route path="support" element={<Dashboard />}></Route> */}
              {/* <Route path="settings" element={<Dashboard />}></Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
