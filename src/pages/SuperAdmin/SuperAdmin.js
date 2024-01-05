import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Sidebar from "../../components/Sidebar";
import AllUsers from '../SuperAdmin/AllUsers'

import Dashboard from "../Dashboard";
import Storage from "../Storage";
import MyAccount from "../MyAccount";
import EditAccount from "../EditAccount";
import SuperSidebar from "./SuperSideBar";
import SuperDashboard from "./SuperDashboard";

const SuperAdmin = ({ setUser }) => {
  return (
    <>
      <div className="xl:grid xl:grid-cols-6">
        <div className=" py-11 px-5 h-screen">
          <SuperSidebar setUser={setUser} />
        </div>

        <div className="md:py-6 md:px-12 py-3 px-6 xl:col-span-5 bg-neutral-100">
          <NavigationBar showLogo={false} />
          <div className="">
            <Routes>
              <Route
                path="/dashboard"
                index
                element={<SuperDashboard />}
              ></Route>
              <Route path="/users" index element={<AllUsers />}></Route>
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

export default SuperAdmin;
