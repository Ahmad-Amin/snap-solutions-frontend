import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

import Frame from "../../assets/Frame.png";
import Dp1 from "../../assets/chatDp.svg";
import SmilyEmoji from "../../assets/IconSet.svg";
import ArrowSend from '../../assets/arrowSend.svg'


import { LuMic } from "react-icons/lu";
import { PiImageLight } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";


const ChatWindow = () => {
  return (
    <div className="p-4 border border-neutral-300 rounded-lg">
      <div className=" flex justify-between">
        <div className="flex gap-2">
          <img src={Dp1} alt="User Avater" />
          <div>
            <p className=" font-normal text-sm leading-5">ByeWind</p>
            <p className=" font-normal text-xs text-black opacity-40">
              byewind@twitter.com
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5 text-xl items-center">
          <FiPhone />
          <IoVideocamOutline />
          <BsThreeDots />
        </div>
      </div>
      <hr className="mt-4" />

      <div className=" p-7 pb-2">
        <div className=" flex justify-end">
          <p className=" text-white text-sm leading-5 bg-indigo-400 rounded-t-2xl max-w-96 rounded-bl-2xl py-3 px-5">
            hi ByeWind, I saw your work on Dribbble and it's awesome. I would
            like to know more about it. Could you send me your website?
          </p>
        </div>
        <p className=" font-normal text-sm text-black opacity-40 my-7 text-center">
          Today, 11:59 AM
        </p>
        <div className=" flex justify-start">
          <p className=" text-black text-sm leading-5 bg-indigo-100 max-w-96 rounded-t-2xl rounded-br-2xl py-3 px-5">
            Thank you. Of course. Just a moment, please.
          </p>
        </div>
        <div className=" flex justify-start flex-col w-7/12 mt-2">
          <img src={Frame} alt="User Avater" />
          <div className="p-4 bg-indigo-50 rounded-b-2xl">
            <p className=" font-normal text-sm leading-5 text-indigo-400">
              snow.byewind.com
            </p>
            <p className=" font-normal text-sm leading-5 text-black">
              Snow Dashboard UI Kit
            </p>
          </div>
        </div>
        <div className=" flex justify-end my-2">
          <p className=" text-white text-sm leading-5 bg-indigo-400 rounded-t-2xl max-w-96 rounded-bl-2xl py-3 px-5">
            Got it, thank you
          </p>
        </div>

        <div className=" flex justify-start">
          <div className="text-black text-sm leading-5 bg-indigo-100 max-w-96 rounded-t-2xl rounded-br-2xl py-3 px-5">
            <img src={SmilyEmoji} alt="User Avater" />
          </div>
        </div>

        <div className=" flex justify-between gap-4 py-3 px-5 rounded-lg bg-gray-50 mt-2">
          <div className="flex gap-4 text-2xl">
            <LuMic className="cursor-pointer" />
            <PiImageLight className="cursor-pointer" />
            <CiFaceSmile className="cursor-pointer" />
          </div>
          <input
            placeholder="Type message"
            type="text"
            className="flex-1 bg-transparent font-normal text-sm"
          />
          <img src={ArrowSend} alt="User Avater" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
