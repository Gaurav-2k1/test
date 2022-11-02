import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Divider } from "@mui/material";

export default function ActionButton() {
  return (
    <div className="sticky bottom-0 left-0 right-0 h-20 bg-white flex flex-row justify-around items-center z-20 drop-shadow">
      <div
        className="flex flex-row items-center w-1/2 justify-center"
        onClick={() => {
          window.open(
            "https://wa.me/9302584342?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
          );
        }}
      >
        <WhatsAppIcon color="secondary" fontSize="large" />
        <p className="text-secondary text-sm ml-4">Connect on Whatsapp</p>
      </div>
      <Divider orientation="vertical" />
      <div
        className="flex flex-row items-center w-1/2 justify-center"
        onClick={() => {
          void Tawk_API.toggle();
        }}
      >
        <ChatOutlinedIcon color="secondary" fontSize="large" />
        <p className="text-secondary text-sm ml-4">Live Chat</p>
      </div>
    </div>
  );
}
