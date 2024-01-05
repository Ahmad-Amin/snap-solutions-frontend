import React from "react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="px-20">
      <p className="font-semibold text-3xl my-4">My Account</p>
      <div className="flex gap-2 flex-col">
        <p className=" font-medium text-xl">Decription</p>
        <textarea
          className="border border-neutral-300 px-3 py-5 rounded-lg"
          rows={6}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like)."
        </textarea>
      </div>
      <div className="flex gap-2 flex-col">
        <p className=" font-medium text-xl mt-9">Role Description</p>
        <textarea
          className="border border-neutral-300 px-3 py-5 rounded-lg"
          rows={5}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publis).
        </textarea>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Company Name</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="Infinity Express"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Email Address</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="myemail@gmail.com"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Company Address</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="Street 45, Lane 10, Downtown City , London "
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Phone Number</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="+147837480847"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">Achivements</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="Globe Award, Fin Award  "
          />
        </div>
        <div className="flex gap-2 flex-col">
          <p className=" font-medium text-xl mt-9">References</p>
          <input
            className="border border-neutral-300 px-3 py-5 rounded-lg"
            type="text"
            value="References"
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
