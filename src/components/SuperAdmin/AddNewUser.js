import React from "react";
import { InputField } from "../InputField";

const AddNewUser = () => {
  return (
    <div className=" flex flex-col gap-6 px-12 py-12">
      <div>
        <label
          htmlFor="name"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Name
        </label>
        <InputField id="name" placeholder="Name" type="text" />
      </div>
      <div>
        <label
          htmlFor="email"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Email
        </label>
        <InputField id="email" placeholder="Email" type="text" />
      </div>
      <div>
        <label
          htmlFor="ph_number"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Phone Number
        </label>
        <InputField id="ph_number" placeholder="Email" type="text" />
      </div>
      <div>
        <label
          htmlFor="cp_name"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Company Name
        </label>
        <InputField id="cp_name" placeholder="Email" type="text" />
      </div>
      <div>
        <label
          htmlFor="invite_link"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Invite Link
        </label>
        <InputField id="invite_link" placeholder="Email" type="text" />
      </div>
      <div className=" flex justify-center items-center mt-8">
        <button className=" bg-custom-blue rounded  font-bold text-base text-white px-6 py-3 ">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddNewUser;
