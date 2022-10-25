import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMenuToggle, setMenuToggle } from "../../store/modalSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { menuList, topMenuList } from "../../config/config";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
export default function MenuBar() {
  const isMenuOpen = useSelector(getMenuToggle);
  const dispatch = useDispatch();
  const toggleDrawer = (bool) => {
    dispatch(setMenuToggle(bool));
  };

  const router = useRouter();

  const routeToPage = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  return (
    <SwipeableDrawer
      open={isMenuOpen}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <div className="w-[100vw]">
        <div className="flex flex-row justify-center py-4 px-2 items-center shadow-md">
          <div className="w-20 h-10">
            <Image src={Logo} alt="Infodal Logo" />
          </div>
          <IconButton
            onClick={() => toggleDrawer(false)}
            className="absolute right-5"
          >
            <ClearIcon />
          </IconButton>
        </div>

        <div className="flex flex-col justify-evenly h-[70vh] p-4">
          {topMenuList.map((item, index) => (
            <div
              key={index}
              className="w-[60vw] flex flex-row"
              onClick={() => routeToPage(item.link)}
            >
              <div className="w-5 h-5 mr-2">
                <Image src={item.image} alt={item.name} />
              </div>
              {item.name}
            </div>
          ))}
          <Divider className="bg-slate" />
          {menuList.map((item, index) => (
            <div
              key={index}
              className="w-[60vw] flex flex-row"
              onClick={() => routeToPage(item.link)}
            >
              <div className="w-5 h-5 mr-2">
                <Image src={item.image} alt={item.name} />
              </div>
              {item.name}
            </div>
          ))}
          <Divider className="bg-slate" />
        </div>
        <div className="flex flex-col justify-between items-center w-full h-20">
          <Button className="bg-primary w-[80vw]">Sign Up</Button>
          <Button className="bg-primary w-[80vw]">Login</Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
}
