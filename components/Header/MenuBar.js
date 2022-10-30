import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrencyToggle,
  getMenuToggle,
  setCurrencyToggle,
  setMenuToggle,
} from "../../store/modalSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { menuList, topMenuList } from "../../config/config";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { getCurrency, setCurrency } from "../../store/currencySlice";
import { isEqual } from "lodash";
export default function MenuBar() {
  const isMenuOpen = useSelector(getMenuToggle);
  const isCurrencyToggleOpen = useSelector(getCurrencyToggle);
  const currency = useSelector(getCurrency);
  const dispatch = useDispatch();
  const toggleDrawer = (bool) => {
    dispatch(setMenuToggle(bool));
  };

  const toggleCurrencyDrawer = (bool) => {
    dispatch(setCurrencyToggle(bool));
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
        <div className="flex flex-row w-full justify-center py-2 px-5">
          <Button
            className="bg-primary"
            onClick={() => toggleCurrencyDrawer(true)}
          >
            Select Currency - {currency}
          </Button>
        </div>
        {/* <div className="flex flex-col justify-between items-center w-full h-20">
          <Button className="bg-primary w-[80vw]">Sign Up</Button>
          <Button className="bg-primary w-[80vw]">Login</Button>
        </div> */}
      </div>
      <SwipeableDrawer
        open={isCurrencyToggleOpen}
        onClose={() => toggleCurrencyDrawer(false)}
        onOpen={() => toggleCurrencyDrawer(true)}
      >
        <div className="w-[100vw]">
          <div className="flex flex-row justify-center py-4 px-2 items-center shadow-md">
            <div className="w-20 h-10">
              <Image src={Logo} alt="Infodal Logo" />
            </div>
            <IconButton
              onClick={() => toggleCurrencyDrawer(false)}
              className="absolute right-5"
            >
              <ClearIcon />
            </IconButton>
          </div>
          <div className="flex flex-col gap-3 px-3 py-5">
            <CurrencySelect
              currencyName="INR - Indian Rupees"
              currentCurrencyCode="INR"
              currentCurrency={currency}
            />
            <CurrencySelect
              currencyName="USD - US Dollars"
              currentCurrencyCode="USD"
              currentCurrency={currency}
            />
            <CurrencySelect
              currencyName="EUR - Euro"
              currentCurrencyCode="EUR"
              currentCurrency={currency}
            />
            <CurrencySelect
              currencyName="GBP - British Pound Sterling"
              currentCurrencyCode="GBP"
              currentCurrency={currency}
            />
          </div>
        </div>
      </SwipeableDrawer>
    </SwipeableDrawer>
  );
}
//
const CurrencySelect = ({
  currencyName,
  currentCurrency,
  currentCurrencyCode,
}) => {
  const dispatch = useDispatch();
  const handleCurrency = (currency) => {
    dispatch(setCurrency(currency));
    dispatch(setCurrencyToggle(false));
  };
  return (
    <div
      className={`w-full border text-center py-2 ${
        isEqual(currentCurrencyCode, currentCurrency)
          ? "border-primary text-primary"
          : ""
      }`}
      onClick={() => handleCurrency(currentCurrencyCode)}
    >
      {currencyName}
    </div>
  );
};
