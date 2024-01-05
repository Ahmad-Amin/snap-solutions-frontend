import React from "react";

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="text-white bg-indigo-700 rounded-lg overflow-hidden">
        <p className="font-medium text-lg px-6 py-3">Account Details</p>
        <div className="bg-custom-blue px-6 pt-3 pb-5 flex flex-col gap-y-3">
          <div className="text-sm flex justify-between">
            <p className="font-normal">Account no</p>
            <p className="font-bold text-base">76543276525</p>
          </div>
          <div className="text-sm flex justify-between">
            <p className="font-normal">Expiry Date:</p>
            <p className="font-bold text-base">26-11-2024</p>
          </div>
        </div>
      </div>
      <div className="border border-neutral-200 rounded-xl lg:p-5 p-3">
        <div className="flex justify-between items-end">
          <p className="font-medium text-lg">Account Activity</p>
          <input className="text-sm lg:text-base" type="date" />
        </div>
        <div className="mt-4">
          <p className="font-normal text-xs text-neutral-500 mb-2">
            Last Statement Balance
          </p>
          <div className=" bg-neutral-50 border border-neutral-200 py-3 px-4 rounded-md">
            <p className=" font-normal text-base mb-2">N/A</p>
            <p className="flex items-center font-normal text-xs text-neutral-500">
              Today - 11.30 AM
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-normal text-xs text-neutral-500 mb-2">
            Last Payment Date
          </p>
          <div className=" bg-neutral-50 border border-neutral-200 py-3 px-4 rounded-md">
            <p className=" font-normal text-base mb-2">N/A</p>
            <p className="flex items-center font-normal text-xs text-neutral-500">
              Today - 10.30 AM
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-normal text-xs text-neutral-500 mb-2">
            Next Payment Date
          </p>
          <div className=" bg-neutral-50 border border-neutral-200 py-3 px-4 rounded-md">
            <p className=" font-normal text-base mb-2">N/A</p>
            <p className="flex items-center font-normal text-xs text-neutral-500">
              Today - 10.30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
