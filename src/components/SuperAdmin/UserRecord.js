import React from "react";
import Avatar from "../../assets/Avatar.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserRecord = ({ name, email, id, investType, status, amount }) => {
  return (
    <tr className=" dark:bg-gray-80 hover:bg-gray-50 cursor-pointer font-normal text-base">
      <td
        scope="row"
        className=" font-medium text-gray-900 whitespace-nowrap py-4 min-w-60"
      >
        <div className="flex gap-4 items-center">
          <img src={Avatar} />
          <div>
            <p className=" font-medium text-sm leading-5 text-gray-900">
              {name}
            </p>
            <p className=" font-normal text-sm leading-5 text-neutral-500">
              {email}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 px-2 min-w-36 text-center " scope="row">
        <p className=" font-medium text-xs text-neutral-700 bg-neutral-200 rounded-2xl px-2 py-1 inline ">
          {id}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36" scope="row">
        <p className=" font-normal text-sm leading-5 text-neutral-700">
          {investType.name}
        </p>
        <p className=" font-normal text-xs leading-5 text-neutral-500">
          {investType.role}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 text-center" scope="row">
        <button className=" bg-green-100 text-green-600 rounded-2xl px-3 py-1 text-xs">
          {status}
        </button>
      </td>
      <td className="py-4 px-2 min-w-36 text-center" scope="row">
        <p className=" font-medium text-xs text-neutral-700 bg-neutral-200 rounded-2xl px-2 py-1 inline ">
          {amount}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 " scope="row">
        <Link to='/userChat' className="flex justify-end text-2xl">
          <BsThreeDotsVertical />
        </Link>
      </td>
    </tr>
  );
};

export default UserRecord;
