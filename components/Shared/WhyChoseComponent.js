import Image from "next/image";
import React from "react";
import WhySideIcon from "../../public/images/home/why/why-bg.png";

export default function WhyChoseComponent({ icon, title, description }) {
  return (
    <div className="w-[90vw] h-50 text-white rounded-md bg-secondary mb-4 md:w-[30vw] relative md:h-60">
      <div className="absolute px-4 py-3">
        <div className="z-30 h-7 w-7">
          <Image src={icon} alt="Icon" objectFit="contain" />
        </div>
        <p className="font-semibold py-4 text-lg md:w-max">{title}</p>
        <p className="pr-3 text-sm">{description}</p>
      </div>

      <Image
        src={WhySideIcon}
        alt="Illustration"
        className="-right-10 top-0 bottom-0"
        objectFit="contain"
      />
    </div>
  );
}
