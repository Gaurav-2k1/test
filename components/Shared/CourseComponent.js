import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CourseComponent({ name, img, shortDescription }) {
  return (
    <div className="lg:w-1/4 h-max bg-white pb-5 rounded-b-3xl mb-5">
      <div className="relative w-auto h-max">
        <Image
          src={img}
          alt={name}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="fill"
        />
      </div>
      <Divider className="mt-3" />
      <div className="py-5 px-2">
        <h1 className="text-center text-purple-800 text-xl pb-3">{name}</h1>

        <p className="text-center text-sm">{shortDescription}</p>
      </div>
    </div>
  );
}
