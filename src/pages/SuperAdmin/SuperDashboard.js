import React, { useState} from "react";
import { FaPlus } from "react-icons/fa";
import OverviewCards from "../../components/SuperAdmin/OverviewCards";
import RecentPayment from "../../components/SuperAdmin/RecentPayment";
import TransactionsHistory from "../../components/SuperAdmin/TransactionsHistory";
import NewTransaction from "../../components/SuperAdmin/NewTransaction";
import Modal from '../../UI/Modal'

const SuperDashboard = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleAddTransaction = () => {
    setModalShow(true);
  };

  return (
    <div className="">
      <h1 className="font-medium text-2xl mb-4">Report Overview</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className=" border border-neutral-300 px-4 rounded-3xl font-medium text-base text-neutral-600 bg-white">
            Timeframe
            <select className="bg-transparent pr-12 py-2 text-black">
              <option className="">All-time</option>
            </select>
          </div>
          <div className=" border border-neutral-300 px-4 rounded-3xl font-medium text-base text-neutral-600 bg-white">
            Client
            <select className="bg-transparent pr-12 py-2 text-black">
              <option className="">All</option>
            </select>
          </div>
        </div>
        <div
          className="flex flex-row gap-4 border border-neutral-400 rounded-md justify-center items-center py-3 px-5 cursor-pointer"
          onClick={handleAddTransaction}
        >
          <FaPlus className="text-2xl" />
          <p className="font-normal text-xs">Add Transaction</p>
        </div>
      </div>
      <div className="mt-8">
        <OverviewCards />
      </div>
      <div className="mt-6">
        <RecentPayment />
      </div>
      <div className="mt-8">
        <TransactionsHistory />
      </div>
      {modalShow && (
        <Modal onhideDetails={() => setModalShow(false)}>
          <NewTransaction setModalShow={setModalShow} />
        </Modal>
      )}
    </div>
  );
};

export default SuperDashboard;
