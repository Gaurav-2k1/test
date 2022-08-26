import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
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
    <div className="w-3/4 h-[33vh] bg-white pb-5 mb-5 relative overflow-hidden rounded-md">
      <div className="absolute top-32 left-3 z-50 text-sm text-white">
        <div className="font-semibold mb-3">{name}</div>
        {duration && classType ? (
          <div>
            <CardDetail
              icon={<WatchLaterOutlinedIcon />}
              text={`${duration}h`}
            />
            <CardDetail
              icon={<RecordVoiceOverOutlinedIcon />}
              text={classType}
            />
          </div>
        ) : (
          <div className="flex flex-row w-12 ">
            <p className="text-lg">{discountedPrice}</p>
            <p className="text-sm">{price}</p>
          </div>
        )}
        <div className="flex flex-row w-20 items-center mt-2">
          {[...Array(rating.stars)].map((x, i) => (
            <StarOutlinedIcon color="yellow" key={i} fontSize="small" />
          ))}
          {[...Array(5 - rating.stars)].map((x, i) => (
            <StarBorderOutlinedIcon color="yellow" key={i} fontSize="small" />
          ))}
          {`(${rating.reviews})`}
        </div>
      </div>
      <div className="absolute bottom-0 z-50 w-full h-10 flex flex-col justify-evenly ">
        <Divider color="white" />
        <p className="text-white text-center">View Course</p>
      </div>
      <div style={{ backgroundImage: `url(${img})` }} className="h-full"></div>
      <div className="w-[85vw] h-[28vh] -rotate-17 bg-gradient-to-b from-cardStart to-cardEnd absolute -bottom-9 -left-5"></div>
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
