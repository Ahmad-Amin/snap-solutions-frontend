import React from "react";
import Button from "./Button";
import CurrencyFormatter from "../../UI/CurrencyFormatter";

const Transaction = ({
  image,
  name,
  transactionType,
  status,
  date,
  amount,
}) => {
  const formatDate = (date) => {
    const originalDate = new Date(date);
    const formattedDate = originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <tr className=" dark:bg-gray-80 hover:bg-gray-50 cursor-pointer font-normal text-base ">
      <td className=" font-medium text-gray-900 whitespace-nowrap py-4 min-w-60">
        <div className="flex gap-4 items-center">
          <img src={image} alt="User Avatar" />
          <p>{name}</p>
        </div>
      </td>
      <td className="py-4 px-2 min-w-36 text-center uppercase">{transactionType}</td>
      <td className="py-4 px-2 min-w-60 text-center">
        <Button name={status} />
      </td>
      <td className="py-4 px-2 min-w-36 text-center">
        <p className=" font-normal text-base leading-5 text-black">
          {formatDate(date)}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 text-center">
        <p className=" font-bold text-base leading-5 text-black">
          <CurrencyFormatter amount={amount} />
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 text-center">
        <button className="text-neutral-600 border border-neutral-600 text-sm font-bold px-3 py-1 rounded-lg ">
          Details
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
