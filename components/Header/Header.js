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
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerPaths } from "../../config/config";
import { theme } from "../../utils/theme";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


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
      <div className="lg:flex  flex-row gap-40 justify-around">
        <div className="hidden lg:flex relative w-24 h-24  lg:mt-2 lg:ml-2 lg:w-30 lg:h-30 ">
          <Image
            className="lg:w-30"
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="scale-down"
          />
        </div>
        <div className="hidden lg:flex  lg:self-center ">
 <div className="text-base  font-bold mt-2 ml-5 lg:justify-items-center  ">
            <CallIcon className="text-3xl " />
            +44 7454 666010
            <br />
            <div className="lg:mt-2">
              <CallIcon className="text-3xl" />
              +91 93025 84342
            </div>
 </div>
          <div className="text-base font-bold lg:self-center  lg:ml-10"> <EmailIcon className="text-3xl" />contact@infodal.com</div>
          <div className="lg:self-center" >
          <Button className="bg-orange-500 underline hover:bg-red-500 hover:no-underline text-white font-medium text-base lg:px-7 lg:py-1 rounded-sm  lg:ml-12 ">
              Register
            </Button>
            
          </div>
          <div className="lg:self-center">
          <Button className="bg-green-500 underline hover:bg-red-500 hover:no-underline text-white font-medium text-base lg:px-7 lg:py-1 rounded-sm  lg:ml-12">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div className=" lg:bg-blue-700	">
        {isDesktop ? (
          <div className="w-2/2  self-center  text-white font-normal   flex flex-rows-4  lg:w-15  justify-evenly display:block m-auto text-sm ">
            {headerPaths.map((headerPath) => (
              <HeaderItem
                key={headerPath.name}
                name={headerPath.name}
                route={headerPath.path}
              />
            ))}
          </div>
        ) : (
         <>

         <div className="flex flex-row w-full justify-between">
           <div className="relative w-24 h-24 ml-5 lg:self-center lg:ml-[15vh]">
              <Image
            className="lg:w-1/3"
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="scale-down"
          /></div>
         
           
            <div className="relative self-center ">
            <IconButton size="large" onClick={() => toggleDrawer(true)}>
              <Menu />
            </IconButton>
            </div>
            
          
        

         </div>
        
        
         </>
         
        )}
      </div>
      <div className="z-50">

        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onOpen={() => toggleDrawer(true)}
          onClose={() => toggleDrawer(false)}
          className=""
        >

          <div className="text-center text-2xl  h-full">

            <div className="flex flex-col justify-evenly h-[60vh]">

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
            <div className=" lg:flex flex-row gap-4 ">
               
                <div className="text-base  font-bold mt-2 ml-5 lg:ml-12  ">
                  <CallIcon className="text-3xl" />
                  +44 7454 666010
                  <br />
                  <div className="lg:mt-2">
                    <CallIcon className="text-3xl" />
                    +91 93025 84342
                  </div>

                </div>
                <div className="text-base font-bold  lg:mt-8 lg:ml-10"> <EmailIcon className="text-3xl" />contact@infodal.com</div>
                <div >
                <Button className="bg-orange-500 px-2 py-2 w-30 h-10 underline hover:bg-red-500 hover:no-underline text-white font-medium text-base lg:px-7 lg:py-1 rounded-sm  lg:ml-12 lg:mt-8">
                    Register
                  </Button>
                </div>
                <div>

                <Button className="bg-green-500 mt-3 px-3 py-2 w-30 h-10 underline hover:bg-red-500 hover:no-underline text-white font-medium text-base lg:px-7 lg:py-1 rounded-sm  lg:ml-12 lg:mt-8">
                    Sign In
                  </Button>
                    
                  
                </div>
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
      className="cursor-pointer hover:bg-red-500 underline-offset-8  lg:pt-3 lg:h-12 lg:pl-2 lg:pr-2 lg:border-x-2"
      onClick ={onClickHandler}
    >
      {name}
    </h1>
  );
}
