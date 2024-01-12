import React, { useContext, useEffect, useState } from "react";
import Card from "../../assets/Card.png";
import Spinner from "../../UI/Spinner";
import UserContext from "../../store/user-context";
import axios from "axios";
import Select from "react-select";
import CurrencyFormatter from "../../UI/CurrencyFormatter";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTransaction = ({ setModalShow }) => {
  const userCtx = useContext(UserContext);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [userOptions, setUserOptions] = useState([]);

  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    message: "",
    recipient: null,
    name: "",
  });

  useEffect(() => {
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          setSpinnerShow(false);
          userCtx.saveToGlobalStore(response.data);
        }
      } catch (error) {
        console.log(error);
        setSpinnerShow(false);
      }
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    const options = userCtx.allUsers.map((rec) => ({
      value: rec.id,
      label: rec.name,
    }));

    setUserOptions(options);
  }, [userCtx.allUsers]);

  const handleChange = (selectedOption) => {
    setFormData({
      ...formData,
      recipient: selectedOption.value,
      name: selectedOption.label,
    });
  };

  const handleUserInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    if (formData.recipient == null) {
      toast.error("Please Select the Recipient name");
      return;
    }

    if (formData.amount.length === 0) {
      toast.error("Please add the amount");
      return;
    }

    toast.success(`Successfully, Transfered the Funds to ${formData.name}`);
    setModalShow(false);
  };

  return spinnerShow ? (
    <div className=" w-28 h-60 flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <div className=" flex flex-col gap-4 p-7">
      <img src={Card} alt="Credit Card" />
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Phone Number
        </label>
        <PhoneInput
          inputStyle={{
            borderBottom: "1px solid rgb(212 212 212", // Keep the bottom border
            borderLeft: "none", // Remove left border
            borderRight: "none", // Remove right border
            borderTop: "none",
            width: "100%",
          }}
          type="text"
          country={"us"}
          value={formData.phoneNumber}
          onChange={(phoneNum) =>
            handleUserInputChange("phoneNumber", phoneNum)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Amount
        </label>
        <input
          className=" font-medium text-base text-neutral-900 border-b border-neutral-300"
          type="number"
          inputMode="none"
          value={formData.amount}
          onChange={(e) => handleUserInputChange("amount", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-xs text-neutral-600 block">
          Recipient Name
        </label>
        <Select
          className="font-medium text-base text-neutral-900 border-b border-neutral-300"
          value={formData.recipient?.label}
          onChange={handleChange}
          options={userOptions}
        />
      </div>
      <textarea
        className=" font-normal text-xs bg-gray-100 rounded-xl p-3 h-28 "
        placeholder="Message to the recipient"
        value={formData.message}
        onChange={(e) => handleUserInputChange("message", e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="text-white rounded-xl bg-indigo-500 py-4 text-base mt-2"
      >
        Transfer &nbsp;
        <CurrencyFormatter amount={formData.amount || 0} />
      </button>
    </div>
  );
};

export default NewTransaction;
