import React from "react";
import { Link } from "react-router-dom";

const MenuButtons = ({ icon, menuText, isEnabled }) => {  

  return (
    <>
      {isEnabled ? (
        <Link
          className="flex gap-6 py-4 text-neutral-500 hover:text-red-500 transition ease-in-out cursor-pointer"
          to={`/${menuText}`}
        >
          <div className="text-2xl">{icon}</div>
          <button className="text-inherit text-base capitalize">
            {menuText}
          </button>
        </Link>
      ) : (
        <button className="flex gap-6 py-4 text-neutral-500 hover:text-red-500 transition ease-in-out cursor-pointer">
          <div className="text-2xl">{icon}</div>
          <p className="text-inherit text-base capitalize">
            {menuText}
          </p>
        </button>
      )}
    </>
  );
};

export default MenuButtons;
