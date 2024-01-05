import React from "react";
import { FaFolder } from "react-icons/fa6";

const RecentFilesFolder = ({ name }) => {
  return (
    <div className="border border-neutral-200 rounded-xl px-4 py-5 flex gap-4 cursor-pointer hover:shadow-md transition ease-in-out duration-150">
      <div className="text-xl text-neutral-400">
        <FaFolder />
      </div>
      <p className="font-medium text-sm text-neutral-500">{name}</p>
    </div>
  );
};

export default RecentFilesFolder;
