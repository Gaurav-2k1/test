import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../public/logo.png";
import { theme } from "../../utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { getMenuToggle, setMenuToggle } from "../../store/modalSlice";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { ArrowDropDown, MoreVertOutlined } from "@mui/icons-material";

export default function Header() {
  const isMenuOpen = useSelector(getMenuToggle);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(setMenuToggle(!isMenuOpen));
  };

  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-30 shadow-md flex flex-row ">
      <div className="flex flex-row py-2 px-2 items-center">
        <div className="w-20 h-fit flex flex-row pl-4">
            <Image src={Logo} alt="Infodal Logo" />  
        </div>
        <div className="w-25 h-fit flex flex-row px-8">
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-primary px-8 rounded text-base font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">EXPLORE <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        </div>
      </div>
      
      <div className="flex flex-row py-2 px-2 items-center absolute top-0 right-0 px-4">
        <div className="w-25 h-fit flex flex-row px-4">
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-primary rounded font-bold px-4 py-2.5" type="button">LOGIN</button>
        </div>
        <div className="w-25 h-fit flex flex-row px-4">
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white rounded w-32 text-center font-bold bg-primary px-4 py-2.5" type="button">SIGN UP</button>
        </div>
        <div className="w-25 h-fit flex flex-row px-4 rounded">
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black border-2 border-indigo-500/100 rounded font-bold px-4 py-2.5 text-center inline-flex items-center" type="button">INDIAN RUPEES - INR</button>
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
