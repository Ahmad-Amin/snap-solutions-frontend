import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../store/user-context";

const EditAccount = () => {
  const userCtx = useContext(UserContext);

  const navigate = useNavigate();

  const { user } = userCtx;
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
    name,
    displayImage,
  } = user;

  const [userDetails, setUserDetails] = useState({
    description: description,
    roleDescription: roleDescription,
    companyName: companyName,
    companyAddress: companyAddress,
    phoneNumber: phoneNumber,
    achievements: achievements,
    references: references,
    name: name,
    email: email,
    displayImage: displayImage,
  });

  const handleEditFormSubmission = async (e) => {
    e.preventDefault();
    const transformedUser = {
      id: user._id,
      name: userDetails.name,
      email: userDetails.email,
      displayImage: userDetails.displayImage,
      additionalUserDetails: {
        description: userDetails.description,
        roleDescription: userDetails.roleDescription,
        companyName: userDetails.companyName,
        companyAddress: userDetails.companyAddress,
        phoneNumber: userDetails.phoneNumber,
        achievements: userDetails.achievements,
        references: userDetails.references,
      },
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/update-user`,
        transformedUser,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 && response.status !== null) {
        userCtx.saveUserData(response.data);
        toast.success("Successfully, Updated the Record");
        navigate("/settings");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error: ${error.response.data.error}`);
    }
  };

  const handleUserInputChange = (field, value) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="py-6 px-7 border border-neutral-300 rounded-2xl">
      <p className="font-semibold text-3xl my-4">Edit Account</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-8">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleUserInputChange("displayImage", e.target.files[0])
              }
            />
            {displayImage && (
              <img src={displayImage} alt="Preview" />
            )}
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Decription</p>
            <textarea
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              rows={6}
              placeholder="Description"
              value={userDetails.description}
              onChange={(e) =>
                handleUserInputChange("description", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl mt-9">Role Description</p>
            <textarea
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              rows={5}
              placeholder="Role Description"
              value={userDetails.roleDescription}
              onChange={(e) =>
                handleUserInputChange("roleDescription", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Last Companies</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="References"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Name</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={(e) => handleUserInputChange("name", e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Company Name</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Company Name"
              value={userDetails.companyName}
              onChange={(e) =>
                handleUserInputChange("companyName", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Company Address</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Company Address"
              value={userDetails.companyAddress}
              onChange={(e) =>
                handleUserInputChange("companyAddress", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Achivements</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Achivements"
              value={userDetails.achievements}
              onChange={(e) =>
                handleUserInputChange("achievements", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Email Address</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Email Address"
              value={userDetails.email}
              onChange={(e) => handleUserInputChange("email", e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Phone Number</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={(e) =>
                handleUserInputChange("phoneNumber", e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">References</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              value={userDetails.references}
              onChange={(e) =>
                handleUserInputChange("references", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-48">
        <div className="gap-6 text-right flex justify-end">
          <button className="text-custom-blue border border-custom-blue py-3 px-12 rounded-lg">
            Cancel
          </button>
          <button
            onClick={handleEditFormSubmission}
            className="bg-custom-blue py-3 px-12 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
