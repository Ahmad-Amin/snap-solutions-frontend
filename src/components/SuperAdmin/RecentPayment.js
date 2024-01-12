import React from 'react'
import recentPaymentOne from '../../assets/rp-1.png';
import recentPaymentTwo from '../../assets/rp-2.png';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Button from './Button';

const RecentPayment = () => {
  return (
    <div>
      <h1 className="font-medium text-xl leading-5 mb-4">Recent Payments</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className=" bg-white rounded-2xl flex justify-between py-4 px-3">
          <div className="flex gap-5">
            <div className="flex justify-center items-center">
              <img src={recentPaymentOne} alt="User Profile" />
            </div>
            <div>
              <p className=" font-medium text-base">Emma Ryan Jr.</p>
              <p className=" font-normal text-xs text-neutral-500">
                Mar 9, 2023
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className=" font-bold text-xl">$4,823</p>
          </div>
          <Button name="Done" />
          <div className="flex justify-center items-center text-3xl ">
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <div className=" bg-white rounded-2xl flex justify-between py-4 px-3">
          <div className="flex gap-5">
            <div className="flex justify-center items-center">
              <img src={recentPaymentTwo} alt="User Profile" />
            </div>
            <div>
              <p className=" font-medium text-base">Justin Weber</p>
              <p className=" font-normal text-xs text-neutral-500">
                Mar 2, 2023
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className=" font-bold text-xl">$3,937</p>
          </div>
          <Button name="Pending" />
          <div className="flex justify-center items-center text-3xl ">
            <BiDotsHorizontalRounded />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPayment