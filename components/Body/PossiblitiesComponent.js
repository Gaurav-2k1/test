import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function PossiblitiesComponent({
  name,
  img,
  shortDescription,
}) {
  return (
    <div className="rounded-md border-2 border-purple-800 p-5 mt-3 h-auto sm:h-[40vh] m-auto flex flex-col justify-between">
      <div className="relative w-full h-1/3 m-auto">
          <img className="display-block m-auto " src={img} />
  
      </div>
      <h1 className="text-center text-2xl">{name}</h1>
      <p className="text-center">{shortDescription}</p>
      {/* <Button className="text-lg h-8 mt-5 bg-purple-900">Know More</Button> */}
    </div>
  );
}