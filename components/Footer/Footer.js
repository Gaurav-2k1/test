import Image from "next/image";
import React from "react";
import { headerPaths } from "../../config/config";
import { HeaderItem } from "../Header/Header";

export default function Footer() {
  return (
    <div className="lg:h-[30vh] bg-gradient-to-r from-purple-400 to-blue-300 w-full flex flex-col items-center lg:flex-row lg:justify-evenly">
      <div className="relative w-24 h-28 ml-5 lg:ml-[10vh] lg:w-28 lg:h-full lg:m-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="scale-down"
        />
      </div>

      <div className="flex flex-row justify-around w-full lg:w-2/3 mb-4">
        <div className="flex flex-col justify-between font-semibold h-[30vh] lg:h-[25vh] w-1/2 pl-5">
          <h1 className="text-2xl text-white">Navigation</h1>
          {headerPaths.map((headerPath) => (
            <HeaderItem
              key={headerPath.path}
              name={headerPath.name}
              route={headerPath.path}
            />
          ))}
        </div>
        <div className="flex flex-col justify-between font-semibold h-[30vh] lg:h-[25vh] lg:w-[20vw] w-1/2  pr-5">
          <h1 className="text-2xl font-semibold text-white">Contact Us</h1>
          <p>
            Address: G28 Vita S.A, Pebble Mill Studios, Pershore Road,
            Birmingham B29 7ES, United Kingdom
          </p>
          <a href="mailto: contact@infodal.com">Email: contact@infodal.com</a>
          <a href="tel: +44 7454 666010">Phone: +44 7454 666010</a>
          <a href="tel: +91 93025 84342">Phone: +91 93025 84342</a>
        </div>
      </div>
    </div>
  );
}
