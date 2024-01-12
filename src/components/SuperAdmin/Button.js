import React from 'react'

const Button = ({ name }) => {

  const customClasses =
    name === "Done"
      ? "text-cyan-400 bg-cyan-200"
      : "text-yellow-400 bg-yellow-200";

  return (
    <div className="flex justify-center items-center ">
      <button className={`font-medium text-xs rounded-lg py-1 px-3 ${customClasses}`}>
        {name}
      </button>
    </div>
  );
}

export default Button