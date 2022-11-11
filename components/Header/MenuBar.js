import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrencyToggle,
  getMenuToggle,
  setCurrencyToggle,
  setLoginToggle,
  setMenuToggle,
  setSignUpToggle,
} from "../../store/modalSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { menuList, topMenuList } from "../../config/config";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { getCurrency, setCurrency } from "../../store/currencySlice";
import { isEqual } from "lodash";
import { logout } from "../../store/authSlice";
import useIsAuthenticated from "../Hooks/useIsAuthenticated";

export default function MenuBar() {
  const isMenuOpen = useSelector(getMenuToggle);
  const isCurrencyToggleOpen = useSelector(getCurrencyToggle);
  const currency = useSelector(getCurrency);

  const dispatch = useDispatch();
  const toggleDrawer = (bool) => {
    dispatch(setMenuToggle(bool));
  };

  const setSignUpModalOpenHandler = () => {
    dispatch(setSignUpToggle(true));
  };

  const setLoginModalOpenHandler = () => {
    dispatch(setLoginToggle(true));
  };
  const toggleCurrencyDrawer = (bool) => {
    dispatch(setCurrencyToggle(bool));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();

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
        <div className="flex flex-row justify-center px-2 pt-2 items-center shadow-md">
          <div className="w-20 h-fit">
            <Image src={Logo} alt="Infodal Logo" />
          </div>
          <IconButton
            onClick={() => toggleDrawer(false)}
            className="absolute right-5"
          >
            <ClearIcon />
          </IconButton>
        </div>

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

        <div className="flex flex-col items-center w-full gap-2">
          <Button
            className="bg-secondary w-[80vw]"
            onClick={() => toggleCurrencyDrawer(true)}
          >
            Select Currency - {currency}
          </Button>
          {!isAuthenticated && (
            <Button
              className="bg-primary w-[80vw]"
              onClick={setSignUpModalOpenHandler}
            >
              Sign Up
            </Button>
          )}
          {!isAuthenticated && (
            <Button
              className="bg-primary w-[80vw]"
              onClick={setLoginModalOpenHandler}
            >
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button color="error" className="w-[80vw]" onClick={logoutHandler}>
              Logout
            </Button>
          )}
        </div>
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
    dispatch(setMenuToggle(false));
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
