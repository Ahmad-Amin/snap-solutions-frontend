import React from "react";
import { Outlet, Link } from "react-router-dom";

const MenuButtons = ({icon, menuText}) => {

  return (
    <Link className="flex gap-6 py-4 text-neutral-500 hover:text-red-500 transition ease-in-out cursor-pointer" to={`/${menuText}`}>
      <div className="text-2xl">
        {icon}
      </div>
      <button className="text-inherit text-base capitalize">{menuText}</button>
    </Link>
  );
};

export default MenuButtons;
