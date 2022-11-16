import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrencyToggle,
  getMenuToggle,
  setMenuToggle,
} from "../../store/modalSlice";
import { menuList, topMenuList } from "../../config/config";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";


export default function MenuBar() {

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
    <div>
      <div className="flex flex-col justify-evenly gap-6 px-4 py-5">
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
              className="w-[20vw] flex flex-row"
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
    </div>
  );
}
