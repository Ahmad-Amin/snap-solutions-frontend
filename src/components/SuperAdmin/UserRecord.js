import React, { useState} from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CurrencyFormatter from "../../UI/CurrencyFormatter";

const UserRecord = ({
  name,
  email,
  id,
  investType,
  status,
  amount,
  displayImage,
  onDelete,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDeleteClick = (userId) => {
    // onDelete(userId); 
    console.log(userId)
    setShowDropdown(false); 
  };

  return (
    <tr className=" cursor-pointer font-normal text-base">
      <td className=" font-medium text-gray-900 whitespace-nowrap py-4 min-w-60">
        <div className="flex gap-4 items-center">
          {displayImage ? (
            <img
              src={displayImage}
              className=" w-11 h-11 rounded-full object-cover"
              alt="User Avatar"
            />
          ) : (
            <div className=" w-11 h-11 rounded-full bg-pink-300 uppercase flex justify-center items-center">
              {name && name.substring(0, 2)}
            </div>
          )}
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
      <td className="py-4 px-2 min-w-36 text-center ">
        <p className=" font-medium text-xs text-neutral-700 bg-neutral-200 rounded-2xl px-2 py-1 inline ">
          {id}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36">
        <p className=" font-normal text-sm leading-5 text-neutral-700">
          {investType?.name}
        </p>
        <p className=" font-normal text-xs leading-5 text-neutral-500">
          {investType?.role}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 text-center">
        {status && (
          <button className=" bg-green-100 text-green-600 rounded-2xl px-3 py-1 text-xs">
            {status}
          </button>
        )}
      </td>
      <td className="py-4 px-2 min-w-36 text-center">
        <p className=" font-medium text-xs text-neutral-700 rounded-2xl px-2 py-1 inline ">
          {amount && <CurrencyFormatter amount={amount} />}
        </p>
      </td>
      <td className="py-4 px-2 min-w-36 relative ">
        <button
          onClick={handleDropdownClick}
          className="flex justify-end text-2xl "
        >
          <BsThreeDotsVertical />
        </button>
        {showDropdown && (
          <div className="bg-white p-3 absolute -top-4 right-0 w-32">
            <p
              className="text-red-600 bg-white text-right hover:bg-gray-100"
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRecord;
