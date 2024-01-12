import React from "react";
import MainFrontView from "../components/MainFrontView";
import RightSideBar from "../components/RightSideBar";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-5 lg:gap-8 gap-4">
      <div className="md:col-span-3">
        <MainFrontView />
      </div>
      <div className="md:col-span-2">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
