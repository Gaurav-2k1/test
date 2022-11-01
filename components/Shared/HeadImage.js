import Image from "next/image";
import React from "react";

export default function HeadImage({ src, alt, className, children }) {
  return (
    <div className={`w-full h-[25vh] relative ${className}`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <div>{children}</div>
    </div>
  );
}
