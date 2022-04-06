import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="relative w-full bg-slate-50 sticky top-0 left-0 bottom-0">
      <div className="h-8 bg-purple-700 w-full">
        <div className="m-auto flex flex-row w-1/2 lg:w-1/4 justify-between text-white items-center h-full">
          <Facebook />
          <Twitter />
          <Instagram />
          <WhatsApp />
        </div>
      </div>
      <div className="relative w-24 h-24 ml-5 lg:ml-[10vh] lg:w-28 lg:h-28">
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
