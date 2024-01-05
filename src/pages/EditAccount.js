import React from "react";

const EditAccount = () => {
  return (
    <div className="py-6 px-7 border border-neutral-300 rounded-2xl">
      <p className="font-semibold text-3xl my-4">Edit Account</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Decription</p>
            <textarea
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              rows={6}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl mt-9">Role Description</p>
            <textarea
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              rows={5}
              placeholder="Role Description"
            ></textarea>
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
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Company Name</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Company Address</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Company Address"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Achivements</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Achivements"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Email Address</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">Phone Number</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <p className=" font-medium text-xl">References</p>
            <input
              className="border border-neutral-300 px-3 py-5 rounded-lg"
              type="text"
              value="References"
            />
          </div>
        </div>
      </div>
      <div className="mt-48">
        <div className="gap-6 text-right flex justify-end">
          <button className="text-custom-blue border border-custom-blue py-3 px-12 rounded-lg">
            Cancel
          </button>
          <button className="bg-custom-blue py-3 px-12 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
