import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="relative w-full bg-slate-50 sticky top-0 left-0 bottom-0 shadow-md">
      <div className="absolute h-full w-full px-2 lg:px-4 flex flex-row justify-between items-center lg:justify-around">
        <span className="flex flex-col items-start">
          <h1 className="font-semibold">United Kingdom</h1>
          <a href="tel:+44 7457 666010" className="underline">
            +44 7457 666010
          </a>
        </span>
        <span className="flex flex-col items-end">
          <h1 className="font-semibold">India</h1>
          <a href="tel:+91 9302 584 342" className="underline">
            +91 9302 584 342
          </a>
        </span>
      </div>
      <div className="relative w-24 h-24 m-auto lg:w-28 lg:h-28">
        <Image
          src="/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="scale-down"
        />
      </div>
    </div>
  );
}
