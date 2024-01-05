import React from "react";

export const InputField = ({id, type, placeholder}) => {
  return (
    <div>
      <input
        type={type}
        className="border border-neutral-400 text-neutral-400 rounded-lg py-1.5 px-4 w-full"
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};
