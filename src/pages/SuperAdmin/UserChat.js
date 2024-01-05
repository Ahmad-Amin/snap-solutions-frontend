import React from "react";
import PencilWrite from "../../assets/pencilWrite.svg";
import Gear from "../../assets/Gear.svg";
import { CiSearch } from "react-icons/ci";
import SingleChatBlock from "../../components/SuperAdmin/SingleChatBlock";
import Dp1 from "../../assets/chatDp.svg";
import Dp2 from "../../assets/ChatDp2.svg";

import ChatWindow from "../../components/SuperAdmin/ChatWindow";

const UserChat = () => {
  const ChatData = [
    {
      image: Dp1,
      name: "William Johnson",
      msgHighlight: "What about the second plan",
      time: "18:30",
      active: false,
    },
    {
      image: Dp2,
      name: "ByeWind",
      msgHighlight: "Are you free tonight?",
      time: "19:28",
      active: true,
    },
    {
      image: Dp1,
      name: "Drew Cano",
      msgHighlight: "Let's go fishing! – Hey, You wanna join...",
      time: "10:12",
      active: false,
    },
    {
      image: Dp1,
      name: "William Johnson",
      msgHighlight: "What about the second plan",
      time: "18:30",
      active: false,
    },
    {
      image: Dp2,
      name: "ByeWind",
      msgHighlight: "Are you free tonight?",
      time: "19:28",
      active: false,
    },
    {
      image: Dp1,
      name: "Drew Cano",
      msgHighlight: "Let's go fishing! – Hey, You wanna join...",
      time: "10:12",
      active: false,
    },
    {
      image: Dp1,
      name: "William Johnson",
      msgHighlight: "What about the second plan",
      time: "18:30",
      active: false,
    },
    {
      image: Dp2,
      name: "ByeWind",
      msgHighlight: "Are you free tonight?",
      time: "19:28",
      active: false,
    },
    {
      image: Dp1,
      name: "Drew Cano",
      msgHighlight: "Let's go fishing! – Hey, You wanna join...",
      time: "10:12",
      active: false,
    },
    {
      image: Dp1,
      name: "William Johnson",
      msgHighlight: "What about the second plan",
      time: "18:30",
      active: false,
    },
    {
      image: Dp2,
      name: "ByeWind",
      msgHighlight: "Are you free tonight?",
      time: "19:28",
      active: false,
    },
    {
      image: Dp1,
      name: "Drew Cano",
      msgHighlight: "Let's go fishing! – Hey, You wanna join...",
      time: "10:12",
      active: false,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1 overflow-y-scroll" style={{ height: "720px" }}>
        <div className="flex justify-between bg-neutral-100 p-2 rounded-lg">
          <div className="flex gap-3 flex-row">
            <img src={PencilWrite} />
            <img src={Gear} />
          </div>
          <div className=" border border-neutral-300 rounded-lg flex items-center gap-2 px-2 py-1 ">
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className=" font-normal text-sm leading-5 text-black opacity-20 w-32"
            />
          </div>
        </div>
        {ChatData.map((rec) => (
          <SingleChatBlock
            image={rec.image}
            active={rec.active}
            name={rec.name}
            msgHighlight={rec.msgHighlight}
            time={rec.time}
          />
        ))}
      </div>
      <div className="col-span-3 px-12">
        <ChatWindow />
      </div>
    </div>
  );
};

export default UserChat;
