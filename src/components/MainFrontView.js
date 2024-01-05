import React from "react";
import Graph from "../assets/graph.png";

const MainFrontView = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-orange-100 py-3 px-5 rounded-xl">
        <h1 className="font-medium 2xl:text-2xl lg:text-xl text-lg text-custom-blue">
          AV Seals labour group LLC,{" "}
          <span className="font-normal text-lg">Dashboard</span>
        </h1>
        <h3 className="font-medium 2xl:text-lg lg:text-base">
          Available Funds
        </h3>
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-between 2xl:my-4 md:my-2">
          <p className="font-medium 2xl:text-4xl lg:text-3xl text-2xl">
            $2,40,000
          </p>
          <div className="flex gap-3 flex-row md:flex-col lg:flex-row">
            <button className="bg-custom-blue text-white font-normal text-base md:text-sm 2xl:px-7 2xl:py-4 px-4 py-2 rounded-lg">
              Access Funds
            </button>
            <button className="text-base md:text-sm 2xl:px-7 2xl:py-4 px-4 py-2 rounded-lg font-normal text-custom-blue bg-transparent border border-custom-blue">
              Send Message
            </button>
          </div>
        </div>
        <p className="font-normal text-base text-red-500 my-3">100%</p>
      </div>
      <div className="border border-neutral-200 rounded-xl p-5">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <p className="font-medium 2xl:text-lg text-2xl lg:text-base mb-5">
              Available Credits
            </p>
            <p className="font-medium 2xl:text-5xl lg:text-4xl text-3xl 2xl:mb-8 xl:mb-6 mb-4 ">
              $44,00,000
            </p>
            <p className="font-normal text-xs text-stone-400">
              Details about the credit etcc....
            </p>
          </div>
          <div className="col-span-1 text-right">
            <div className="mb-5 flex justify-end">
              <img src={Graph} />
            </div>
            <p className=" bg-orange-200 p-2 font-normal text-xs inline-block rounded-lg">
              +2% Past month
            </p>
          </div>
        </div>
      </div>
      <div className="border border-neutral-200 rounded-xl lg:p-5 p-3">
        <div className="flex justify-between items-end">
          <p className="font-medium 2xl:text-lg lg:text-base">
            Transaction Details
          </p>
          <input className="text-sm lg:text-base" type="date" />
        </div>
        <div>
          <div className=" bg-neutral-50 border border-neutral-200 flex justify-between py-3 px-4 mt-4 rounded-md">
            <div>
              <p className="font-normal lg:text-base text-sm mb-1">
                Incomming wire from{" "}
                <span className="font-bold uppercase">MIRZA</span> xx978678678
              </p>
              <p className="text-neutral-400 text-xs font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="flex items-center font-medium lg:text-lg text-base">
              $5,000
            </p>
          </div>
          <div className=" bg-neutral-50 border border-neutral-200 flex justify-between py-3 px-4 mt-4 rounded-md">
            <div>
              <p className="font-normal lg:text-base text-sm mb-1">
                Incomming wire from{" "}
                <span className="font-bold uppercase">MIRZA</span> xx978678678
              </p>
              <p className="text-neutral-400 text-xs font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="flex items-center font-medium lg:text-lg text-base">
              $5,000
            </p>
          </div>
          <div className=" bg-neutral-50 border border-neutral-200 flex justify-between py-3 px-4 mt-4 rounded-md">
            <div>
              <p className="font-normal lg:text-base text-sm mb-1">
                Outgoing wire to{" "}
                <span className="font-bold uppercase">MaulaJutt</span> xx978678
              </p>
              <p className="text-neutral-400 text-xs font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="flex items-center font-medium lg:text-lg text-base">
              $5,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFrontView;
