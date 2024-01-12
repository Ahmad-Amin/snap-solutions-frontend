import React from "react";
// import { Chart } from "react-google-charts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const OverviewCards = () => {
  // const overviewCardData = [
  //   {
  //     name: "User",
  //     userCount: "4,209",
  //     metrics: [
  //       {
  //         percentage: "62%",
  //         des: "New",
  //       },
  //       {
  //         percentage: "13%",
  //         des: "Returning",
  //       },
  //       {
  //         percentage: "23%",
  //         des: "Inactive",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Transactions",
  //     userCount: "1,302",
  //     metrics: [
  //       {
  //         percentage: "40%",
  //         des: "Paid",
  //       },
  //       {
  //         percentage: "60%",
  //         des: "Pending",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Total Amount",
  //     userCount: "$55,00,000",
  //     metrics: [
  //       {
  //         percentage: "40%",
  //         des: "Paid",
  //       },
  //       {
  //         percentage: "60%",
  //         des: "Received",
  //       },
  //     ],
  //   },
  // ];

  // const data = {
  //   labels: ["62% New", "13% Returning", "23% inactive"],
  //   datasets: [
  //     {
  //       label: "# of Users",
  //       data: [62, 13, 23],
  //       backgroundColor: [
  //         "rgba(27, 89, 248, 1)",
  //         "rgba(27, 89, 248, 0.46)",
  //         "rgba(0, 0, 0, 0.2)",
  //       ],
  //       borderWidth: 1,
  //       borderRadius: 5,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: {
  //       position: "left",
  //       rtl: false,
  //       labels: {
  //         usePointStyle: true,
  //         pointStyle: "circle",
  //         padding: 10,
  //         font: {
  //           size: 10,
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <div className="grid grid-cols-4 gap-7">
      <div className=" bg-white px-5 py-4 rounded-2xl">
        <div>
          <p className=" font-medium text-sm text-neutral-500">Users</p>
          <p className=" font-bold text-2xl">4,209</p>
        </div>
      </div>
      <div className=" bg-white px-5 py-4 rounded-2xl">
        <div>
          <p className="font-medium text-sm text-neutral-500">Transactions</p>
          <p className="font-bold text-2xl">1,302</p>
        </div>
      </div>
      <div className=" bg-white px-5 py-4 rounded-2xl">
        <div>
          <p className="font-medium text-sm text-neutral-500">Total Amount</p>
          <p className="font-bold text-2xl">$55,00,000</p>
        </div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="bg-white px-5 py-4 rounded-2xl">
          <p className="font-medium text-sm text-neutral-500">Revenue</p>
          <p className="font-bold text-2xl">$2.5B</p>
        </div>
        <div className="bg-white px-5 py-4 rounded-2xl">
          <p className="font-medium text-sm text-neutral-500">ARPU</p>
          <p className="font-bold text-2xl">$50m</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
