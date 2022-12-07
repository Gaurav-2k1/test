import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfodalLogo from "../../public/logo.png";
export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="w-36 h-16 flex flex-row pl-4">
        <Image
          src={InfodalLogo}
          alt="Infodal Logo"
          objectFit="contain"
          className=""
        />
      </div>
    </Link>
  );
}
