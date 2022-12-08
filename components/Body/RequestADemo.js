import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import Instructor from "../../public/images/home/instructor/instructor.png";
export default function InstructorImage({ mainText, subText, para1, para2 }) {
  return (
    <div className="relative w-full h-[40vh] md:h-[60vh] md:w-1/2 p-3">
      <Image
        src={Instructor}
        alt="Instructor"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black/60"></div>
      <div className="absolute">
        <div className="text-lg font-semibold text-white">
          <span>{mainText}</span>
          <span className="pl-2 text-primary">{subText}</span>
        </div>
        <Divider className="w-14 bg-primary h-2" />
        <div className="h-40 flex flex-col justify-evenly text-white">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
}
