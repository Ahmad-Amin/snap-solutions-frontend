import React from "react";

import { FaPlus } from "react-icons/fa";
import MenuKebab from "../assets/Menukebab.svg";
import CheckoutImage from "../assets/Textout.svg";

const RecentFile = ({ imageName, accessibleTo, day, folderName, docSize }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-80 hover:bg-gray-50 cursor-pointer font-normal text-base ">
      <td className=" font-medium text-gray-900 whitespace-nowrap py-4 min-w-60">
        {imageName}
      </td>
      <td className="py-4 px-2 min-w-36">{accessibleTo}</td>
      <td className="py-4 px-2 min-w-60">{day}</td>
      <td className="py-4 px-2 min-w-36">{folderName}</td>
      <td className="py-4 px-2 min-w-36">{docSize}</td>
      <td className="py-4 px-2 min-w-60">
        <div className=" flex justify-center items-center gap-4 ">
          <div className="cursor-pointer">
            <FaPlus />
          </div>
          <div className="cursor-pointer">
            <img src={CheckoutImage} alt="Checkout" />
          </div>
          <div className="cursor-pointer">
            <img src={MenuKebab} alt="Kebab Menu" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RecentFile;
