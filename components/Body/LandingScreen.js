import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import UpgradeImg from "../../public/images/home/subLanding/upgrade-img.png";
import { Button, TextField } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { React, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import Image from "next/image";
import Router from "next/router";
import useIsAuthenticated from "../Hooks/useIsAuthenticated";
import { useDispatch } from "react-redux";
import { setSignUpToggle } from "../../store/modalSlice";

export default function LandingScreen() {
  const [search, setSearch] = useState("");
  const handleSearchClick = () => {
    // !isEmpty(search) ? (
    Router.push({ pathname: "/search", query: { query: search } });
  };
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const handleSignUpModalOpen = () => {
    dispatch(setSignUpToggle(true));
  };
  return (
    <div>
      <div className="relative w-full bg-[url('/images/home/landing-img.png')] bg-cover bg-center md:h-[80vh] h-[40vh] bg-blend-screen bg-black">
        <div className="flex flex-col justify-end h-1/2 md:h-full items-center w-full text-white font-semibold text-xl text-center absolute bottom-0">
          <div className="p-3 md:absolute md:top-[35vh] md:text-3xl">
            <div>Learn, Upskill & Certify</div>
            <div className="flex flex-row justify-between items-center">
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
                className="m-3 bg-white align-center w-[70vw] rounded"
                size="normal"
                placeholder="What do you want to learn today?"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button className="bg-primary" onClick={handleSearchClick}>
                Search
              </Button>
            </div>
          </div>

          <div className="px-10 grid grid-cols-3 gap-2 justify-between align-center bg-black/80 w-full">
            <Feature icon={<GroupsIcon />} title="5000+" subtitle="Learners" />

            <Feature
              icon={<SmartDisplayIcon />}
              title="250+"
              subtitle="Courses"
            />

            <Feature icon={<PublicIcon />} title="56+" subtitle="Countries" />
          </div>
        </div>
      </div>
      <div className="my-4 md:flex md:flex-row">
        <div className="w-full bg-secondary text-white flex flex-row p-4">
          <div className="md:pt-5 md:px-5">
            <h1 className="font-bold text-lg md:text-3xl">{`Learn the latest digital skills for tomorrow's jobs`}</h1>
            <p className="text-sm my-3 md:text-lg">
              Learning without borders Begin, Switch or Enhance your career with
              more than 250+ online and self-paced courses, professional
              certificates, and job placements. Hassle free training & learning
              experience with world class trainers and mentorship.
            </p>
            {!isAuthenticated && (
              <Button
                className="bg-primary md:w-32 md:h-10"
                onClick={handleSignUpModalOpen}
              >
                Register Now
              </Button>
            )}
          </div>
        </div>
        <Image src={UpgradeImg} alt="Infodal" objectFit="contain" />
      </div>
    </div>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex flex-row justify-start items-center text-center text-primary text-sm font-normal md:justify-center">
      {icon}
      <div className="flex flex-col w-full justify-center align-center rounded-md h-20 md:w-fit md:pl-2 md:text-lg">
        <p>{title}</p>
        <p className="text-xs md:text-md">{subtitle}</p>
      </div>
    </div>
  );
}
