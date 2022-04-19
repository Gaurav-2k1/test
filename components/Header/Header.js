import { Twitter } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import {
  SwipeableDrawer,
  IconButton,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerPaths } from "../../config/config";
import { theme } from "../../utils/theme";
import image from "next/image";

export default function Header() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (bool) => {
    setIsOpen(bool);
  };

  return (
    <div className="w-full bg-slate-50 sticky top-0 left-0 right-0">
      <div className="h-8 bg-blue-700 w-full">
        <div className="m-auto flex flex-row w-1/3 lg:w-1/6 justify-between text-white items-center h-full">
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.facebook.com/Infodal-106882495314634",
                " _blank"
              )
            }
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open("https://twitter.com/infodal_", " _blank")
            }
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open("https://www.instagram.com/infodal_/", " _blank")
            }
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/84920320/admin/",
                " _blank"
              )
            }
          >
            <LinkedIn />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-row justify-between content-center">
        <div className="relative w-24 h-24 ml-5 lg:ml-[10vh] lg:w-28 lg:h-28">
          <Image
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="scale-down"
          />
        </div>
        {isDesktop ? (
          <div className="w-1/2 self-center flex flex-row justify-evenly font-semibold">
            {headerPaths.map((headerPath) => (
              <HeaderItem
                key={headerPath.name}
                name={headerPath.name}
                route={headerPath.path}
              />
            ))}
          </div>
        ) : (
          <div className="self-center">
            <IconButton size="large" onClick={() => toggleDrawer(true)}>
              <Menu />
            </IconButton>
          </div>
        )}
      </div>
      <div className="z-50">
        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onOpen={() => toggleDrawer(true)}
          onClose={() => toggleDrawer(false)}
          className="flex flex-col"
        >
          <div className="w-[70vw] text-center text-2xl bg-purple-200 h-full">
            <div className="flex flex-col justify-evenly h-[50vh]">
              {headerPaths.map((headerPath) => (
                <>
                  <HeaderItem
                    key={headerPath.path}
                    name={headerPath.name}
                    route={headerPath.path}
                  />
                  <Divider />
                </>
              ))}
            </div>
          </div>
        </SwipeableDrawer>
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
      className="cursor-pointer hover:underline underline-offset-8 decoration-purple-800"
      onClick={onClickHandler}
    >
      {name}
    </h1>
  );
}
