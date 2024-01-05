import React from 'react'

const SingleChatBlock = ({image, name, msgHighlight, time, active}) => {
  return (
    <div className={`p-2 rounded-lg cursor-pointer hover:bg-neutral-100 ${active ? 'bg-neutral-200': ''}`}>
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <img src={image} />
          <div className="flex flex-col gap-1">
            <p className=" font-normal text-sm leading-5 text-black">{name}</p>
            <p className=" font-normal text-xs text-black opacity-40">
              {msgHighlight}
            </p>
          </div>
        </div>
        <p className=" font-normal text-xs text-black opacity-40">{time}</p>
      </div>
    </div>
  );
}

export default SingleChatBlock