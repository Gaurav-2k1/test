import Image from "next/image";
import Logo from "../../public/logo.png";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-secondary pb-10">
      <div className="my-5">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-row justify-evenly w-1/2">
        <FacebookOutlinedIcon color="primary" fontSize="medium" />
        <YouTubeIcon color="primary" fontSize="medium" />
        <TwitterIcon color="primary" fontSize="medium" />
        <InstagramIcon color="primary" fontSize="medium" />
      </div>
    </div>
  );
}
