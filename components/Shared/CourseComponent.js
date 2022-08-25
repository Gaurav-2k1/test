import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
export default function CourseComponent({
  name,
  img,
  duration,
  classType,
  price,
  discountedPrice,
  rating,
  isSale,
  averageSalary,
}) {
  return (
    <div className="w-3/4 h-[30vh] bg-white pb-5 mb-5 relative overflow-hidden rounded-md">
      <div className="absolute top-32 left-3 z-50 text-sm text-white">
        <div className="font-semibold mb-3">{name}</div>
        <CardDetail icon={<WatchLaterOutlinedIcon />} text={`${duration}h`} />
        <CardDetail icon={<RecordVoiceOverOutlinedIcon />} text={classType} />
      </div>
      <div style={{ backgroundImage: `url(${img})` }} className="h-full"></div>
      <div className="w-[85vw] h-[25vh] -rotate-17 bg-gradient-to-b from-cardStart to-cardEnd absolute -bottom-9 -left-5"></div>
    </div>
  );
}

export function CardDetail({ icon, text }) {
  return (
    <div className="grid grid-cols-9 gap-1 text-white align-center justify-between">
      {icon}
      <div className="ml-2 col-span-8">{text}</div>
    </div>
  );
}
