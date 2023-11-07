import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Message = () => {
  return (
    <div className=" fixed right-5 bottom-5 w-[64px] h-[64px] rounded-full bg-blue-500 flex justify-center items-center animate-bounce">
      <AiFillMessage className="text-4xl text-white " />
    </div>
  );
};

export default Message;
