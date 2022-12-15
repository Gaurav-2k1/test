import Image from "next/image";
import React from "react";
import useIsDesktop from "../Hooks/useIsDesktop";

export default function HeadImage({ src, alt, className, children }) {
  const isDesktop = useIsDesktop();
  return (
    <div className={`w-[40vw] h-[50vh] 
    my-2 mr-4 relative ${className} 
    sm:w-full`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={isDesktop ? "cover" : "contain"}
        quality={100}
      />
      <div>{children}</div>
    </div>
  );
}
