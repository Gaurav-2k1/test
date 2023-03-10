import {
  Button,
  Divider,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrency, setCurrency } from "../../store/currencySlice";
import MenuBar, { CurrencySelect } from "./MenuBar";
import { AccountCircle } from "@mui/icons-material";
import useIsAuthenticated from "../Hooks/useIsAuthenticated";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { menuList, topMenuList } from "../../config/config";

import {
  getCurrencyToggle,
  getMenuToggle,
  setCurrencyToggle,
  setLoginToggle,
  setMenuToggle,
  setSignUpToggle,
} from "../../store/modalSlice";

import { isEqual } from "lodash";
import { logout } from "../../store/authSlice";
import useIsDesktop from "../Hooks/useIsDesktop";
import Logo from "../Shared/Logo";

export default function Header() {
  const isMenuOpen = useSelector(getMenuToggle);
  const currency = useSelector(getCurrency);

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

  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(setMenuToggle(!isMenuOpen));
  };

  const routeToPage = (path) => {
    router.push(path);
    toggleDrawer(false);
  };

  useEffect(() => {});
  var isDesktop = useIsDesktop();
  var isAuth = useIsAuthenticated();

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {isDesktop && (
        <div className="bg-white z-50 shadow-md w-full">
          <div className="flex flex-row py-2 px-2 items-center">
            <Logo />

            <div className="w-25 h-fit flex flex-row px-8 relative group">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="text-white w-32 bg-primary md:w-auto px-8 rounded font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-4 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                EXPLORE
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute z-10 mt-10 hidden bg-grey-200 group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div className="flex flex-col justify-evenly gap-6 px-4 py-5">
                    {topMenuList.map((item, index) => (
                      <div
                        key={index}
                        className="w-[20vw] flex flex-row cursor-pointer"
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
                        className="w-[20vw] flex flex-row cursor-pointer"
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
              </div>
            </div>

            {!isAuth && (
              <div className="flex flex-row py-2 px-2 items-center absolute top-0 right-0 px-4">
                <div className="w-25 h-fit flex flex-row px-4">
                  <button
                    onClick={setLoginModalOpenHandler}
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    className="text-primary rounded font-bold px-4 py-2.5"
                    type="button"
                  >
                    LOGIN
                  </button>
                </div>
                <div className="w-25 h-fit flex flex-row px-4">
                  <button
                    onClick={setSignUpModalOpenHandler}
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    className="text-white rounded text-center font-bold bg-primary px-4 py-2.5"
                    type="button"
                  >
                    SIGN UP
                  </button>
                </div>
                <CurrencyComponentDesktop currency={currency} />
              </div>
            )}

            {isAuth && (
              <div className="flex flex-row py-2 px-2 items-center absolute top-0 right-0 px-4">
                <CurrencyComponentDesktop currency={currency} />
                <div className="relative group h-fit px-4 rounded">
                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    className="text-white rounded-full w-20 text-center font-bold px-4 py-2.5 "
                    type="button"
                  >
                    <AccountCircle fontSize="large" color="primary" />
                  </button>
                  <div className="absolute hidden bg-grey-200 group-hover:block">
                    <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                      <Button onClick={logoutHandler} className="bg-red-600">
                        LOGOUT
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!isDesktop && (
        <div className="bg-white z-30 shadow-md">
          <div className="flex flex-row justify-between py-2 px-2 items-center">
            <div className="w-20">
              <MenuIcon
                fontSize="large"
                className="justify-self-start"
                onClick={toggleDrawer}
              />
              <MenuBar />
            </div>
            <Logo />
            <div className="w-20 flex flex-row justify-end">
              <Link href="/search?query=" passHref>
                <SearchOutlinedIcon />
              </Link>
              {/* <ShoppingCartOutlinedIcon /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CurrencyComponentDesktop({ currency }) {
  return (
    <div className="w-25 h-fit flex flex-row px-4 rounded relative group">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black border-2 border-indigo-500/100 rounded font-bold px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Select Currency - {currency}
      </button>

      <div className="absolute pt-8 mt-3 hidden bg-grey-200 group-hover:block">
        <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
          <div className="flex flex-col gap-3 px-3 py-5 cursor-pointer">
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
