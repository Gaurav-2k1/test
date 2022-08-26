import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { headerPaths } from "../../config/config";
import { theme } from "../../utils/theme";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Phone } from "@mui/icons-material";

export default function Header() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (bool) => {
    setIsOpen(bool);
  };

  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-50">
      <div className="flex flex-row justify-between py-2 px-2 items-center">
        <div className=" w-20">
          <MenuIcon fontSize="large" className="justify-self-start" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Logo} alt="Infodal Logo" />
        </div>
        <div className="w-20 flex flex-row justify-around">
          <SearchOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export function HeaderItem({ name, route }) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(route);
  };

  return (
    <h1
      className="cursor-pointer underline-offset-8  lg:pt-3 lg:h-12 lg:pl-2 lg:pr-2 lg:border-x-2"
      onClick={onClickHandler}
    >
      {name}
    </h1>
  );
}
