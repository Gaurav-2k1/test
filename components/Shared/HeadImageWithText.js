import Image from "next/image";
import React from "react";

export default function HeadImageWithText({ src, children, className, image }) {
  return (
    <div className={`relative h-[30vh] ${className}`}>
      <Image src={image} alt="" layout="fill" objectFit="cover" />
      <div className="absolute bg-black/40 w-full top-0 left-0 h-full"></div>
      {children}
    </div>
  );
}
