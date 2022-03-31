import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="w-full bg-slate-50 sticky top-0 left-0 bottom-0 shadow-md">
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
