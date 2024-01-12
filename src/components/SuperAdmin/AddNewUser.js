import React, { useState } from "react";
import { InputField } from "../InputField";
import axios from "axios";

const AddNewUser = () => {
  const [newUserDetails, setNewUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    inviteLink: "",
  });

  const handleUserInputChange = (field, value) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/add-new-user`,
        newUserDetails
      );

      if (response.status === 200 && response.status !== null) {
        console.log(response)
      } else {
        console.log(response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col gap-6 px-12 py-12">
      <div>
        <label
          htmlFor="name"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Name
        </label>
        <input
          className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
          id="name"
          placeholder="Name"
          type="text"
          value={newUserDetails.name}
          onChange={(e) => handleUserInputChange("name", e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Email
        </label>
        <input
          className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
          id="email"
          placeholder="Email"
          type="text"
          value={newUserDetails.email}
          onChange={(e) => handleUserInputChange("email", e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="ph_number"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Phone Number
        </label>
        <input
          className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
          id="ph_number"
          placeholder="Phone Number"
          type="text"
          value={newUserDetails.phoneNumber}
          onChange={(e) => handleUserInputChange("phoneNumber", e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="cp_name"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Company Name
        </label>
        <input
          className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
          id="cp_name"
          placeholder="Company Name"
          type="text"
          value={newUserDetails.companyName}
          onChange={(e) => handleUserInputChange("companyName", e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="invite_link"
          className=" text-neutral-600 font-semibold text-base mb-2"
        >
          Invite Link
        </label>
        <input
          className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
          id="invite_link"
          placeholder="Invite Link"
          type="text"
          value={newUserDetails.inviteLink}
          onChange={(e) => handleUserInputChange("inviteLink", e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center mt-8">
        <button
          onClick={handleAddUser}
          className=" bg-custom-blue rounded  font-bold text-base text-white px-6 py-3 "
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddNewUser;
