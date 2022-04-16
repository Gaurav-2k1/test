import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ServerComponent({
  name,
  img,
  duration,
  shortDescription,
}) {
  return (
    <div className="rounded-md border-2 border-purple-800 p-5 h-[40vh] m-auto flex flex-col justify-between">
      <h1 className="text-center text-2xl">{name}</h1>
      <div className="relative w-full h-1/3 m-auto">
        <Image src={img} alt={name} layout="fill" objectFit="scale-down" />
      </div>
      <p className="text-center text-blue-500">
        SERVER ACCESS | {duration} MONTHS
      </p>
      <p className="text-center">{shortDescription}</p>
      {/* <Button className="text-lg h-8 mt-5 bg-purple-900">Know More</Button> */}
    </div>
  );
}
