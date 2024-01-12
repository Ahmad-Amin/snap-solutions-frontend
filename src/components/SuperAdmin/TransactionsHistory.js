import React, { useEffect, useState } from "react";
import recentPaymentOne from "../../assets/rp-1.png";
import Transaction from "./Transaction";
import axios from "axios";

const TransactionsHistory = () => {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        // setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/get-all-transactions`
        );
        if (response.status === 200 && response.data !== null) {
          // setuserList(response.data);
          setTransactionsData(response.data);
          // setSpinnerShow(false);
        }
      } catch (error) {
        console.log(error);
        // setSpinnerShow(false);
      }
    };

    getAllTransactions();
  }, []);

  return (
    <div className="bg-white p-9 rounded-tl-2xl rounded-tr-2xl ">
      <h1 className=" font-bold text-2xl">Transactions</h1>
      <hr className="mt-4" />
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 font-medium">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Reciever
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((rec, index) => (
              <Transaction
                key={index}
                name={rec.receiverName}
                image={recentPaymentOne}
                transactionType={rec.transactionType}
                status={rec.status}
                amount={rec.amount}
                date={rec.transactionDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsHistory;
