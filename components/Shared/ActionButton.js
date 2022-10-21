import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Divider } from "@mui/material";

export default function ActionButton() {
  return (
    <div className="sticky bottom-0 left-0 right-0 h-20 bg-white flex flex-row justify-around items-center z-30 drop-shadow">
      <div className="flex flex-row items-center w-1/2 justify-center">
        <CallOutlinedIcon color="secondary" fontSize="large" />
        <p className="text-secondary text-sm ml-4">Request a Callback</p>
      </div>
      <Divider orientation="vertical" />
      <div className="flex flex-row items-center w-1/2 justify-center">
        <ChatOutlinedIcon color="secondary" fontSize="large" />
        <p className="text-secondary text-sm ml-4">Live Chat</p>
      </div>
    </div>
  );
}
