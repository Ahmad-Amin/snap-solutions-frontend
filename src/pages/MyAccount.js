import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../store/user-context";

const MyAccount = () => {
  const userCtx = useContext(UserContext);

  const {
    additionalUserDetails: {
      description,
      roleDescription,
      companyName,
      companyAddress,
      phoneNumber,
      achievements,
      references,
    },
    email,
    displayImage,
    name
  } = userCtx.user;

  return (
    <div className="px-20">
      <p className="font-semibold text-3xl my-4">My Account</p>
      <div className=" flex flex-col gap-4 justify-center items-center">
        <img src={displayImage} className="w-40 h-40 rounded-full object-cover" />
        <p className=" font-bold text-xl">{ name}</p>
      </div>
      <div className="flex gap-2 flex-col">
        <p className=" font-medium text-xl">Decription</p>
        <textarea
          className="border border-neutral-300 px-3 py-5 rounded-lg"
          rows={6}
          readOnly
          disabled
          value={description}
        />
      </div>
      <div className="flex gap-2 flex-col">
        <p className=" font-medium text-xl mt-9">Role Description</p>
        <textarea
          className="border border-neutral-300 px-3 py-5 rounded-lg"
          rows={5}
          readOnly
          disabled
          value={roleDescription}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Company Name</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={companyName}
            readOnly
            disabled
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Email Address</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={email}
            readOnly
            disabled
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Company Address</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={companyAddress}
            readOnly
            disabled
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Phone Number</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={phoneNumber}
            readOnly
            disabled
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Achivements</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={achievements}
            readOnly
            disabled
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">References</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value={references}
            readOnly
            disabled
          />
        </div>
      </div>
      <div className="mt-10">
        <Link
          className="bg-custom-blue py-3 px-12 text-white float-right rounded-lg"
          to="/edit"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default MyAccount;
