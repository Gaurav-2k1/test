import Image from "next/image";
import React from "react";

export default function WhatweOffer({ name, img }) {
  return (
    <div className="p-5 h-[40vh] m-auto flex flex-col justify-between">
      <h1 className="text-center text-2xl">{name}</h1>
      <div className="relative w-full h-2/3 m-auto">
        <Image src={img} alt={name} layout="fill" objectFit="scale-down" />
      </div>
    </div>
  );
}
