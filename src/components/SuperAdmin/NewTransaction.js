import React from "react";
import Card from "../../assets/Card.png";

const NewTransaction = () => {
  return (
    <div className=" flex flex-col gap-4 p-7">
      <img src={Card} />
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Phone Number
        </label>
        <input
          className=" font-medium text-base text-neutral-900 border-b border-neutral-300"
          type="text"
          value="+995 559 72 88"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Amount
        </label>
        <input
          className=" font-medium text-base text-neutral-900 border-b border-neutral-300"
          type="text"
          value="100$"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Recipient Name
        </label>
        <input
          className=" font-medium text-base text-neutral-900 border-b border-neutral-300"
          type="text"
          value="Ahmed Hussain"
        />
      </div>
      <textarea
        className=" font-normal text-xs bg-gray-100 rounded-xl p-3 h-28 "
        placeholder="Message to the recipient"
      ></textarea>
      <button className="text-white rounded-xl bg-indigo-500 py-4 text-base mt-2">
        Transfer 100$
      </button>
    </div>
  );
};

export default NewTransaction;
