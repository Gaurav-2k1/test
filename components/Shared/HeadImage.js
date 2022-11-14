import Image from "next/image";
import React from "react";
import useIsDesktop from "../Hooks/useIsDesktop";

export default function HeadImage({ src, alt, className, children }) {
  const isDesktop = useIsDesktop();
  return (
    <div className={`w-full h-[25vh] md:h-[60vh] relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={isDesktop ? "contain" : "cover"}
      />
      <div>{children}</div>
    </div>
  );
}
