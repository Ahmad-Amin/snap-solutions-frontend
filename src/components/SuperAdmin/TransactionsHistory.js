import React from "react";
import Button from "./Button";
import recentPaymentOne from "../../assets/rp-1.png";
import recentPaymentTwo from "../../assets/rp-2.png";
import Transaction from "./Transaction";

const TransactionsHistory = () => {
  const transactionDate = [
    {
      image: recentPaymentOne,
      name: "Emma Ryan",
      department: "IT",
      status: "Done",
      date: "Feb 19, 2023",
      amount: "$3,023",
    },
    {
      image: recentPaymentTwo,
      name: "Adrian Daren",
      department: "Vehicle",
      status: "Pending",
      date: "Jan 01, 2023",
      amount: "$1,003",
    },
    {
      image: recentPaymentOne,
      name: "Taszid Izaz",
      department: "Medical",
      status: "Done",
      date: "Apr 04, 2023",
      amount: "$10,000",
    },
  ];

  return (
    <div className="bg-white p-9 rounded-tl-2xl rounded-tr-2xl ">
      <h1 className=" font-bold text-2xl">Transactions</h1>
      <hr className="mt-4" />
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 font-medium">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                Reciever
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Type
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionDate.map((rec) => (
              <Transaction
                name={rec.name}
                image={rec.image}
                department={rec.department}
                status={rec.status}
                amount={rec.amount}
                date={rec.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsHistory;
