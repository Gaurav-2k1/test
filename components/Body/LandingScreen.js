import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment } from "@mui/material";
import mentorship from "../../public/images/home/mentorship.svg";
import success from "../../public/images/home/success.svg";
import userfriendly from "../../public/images/home/userfriendly.svg";
import { Button, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LandingScreen() {
  return (
    <div>
      <div className="w-full bg-[url('/images/home/landing-img.png')] bg-cover bg-center h-[40vh] bg-blend-screen bg-secondary">
        <div className="flex flex-col justify-end h-5/6 items-center">
          <Button className="bg-primary mb-4 text-white w-1/2 font-semibold">
            Sign Up
          </Button>
          <Button className="bg-primary text-white w-1/2 font-semibold">
            Explore Courses
          </Button>
        </div>
      </div>

      <div>
        <TextField
          variant="standard"
          fullWidth
          className="p-4 mt-3"
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
      </div>

      <div className="p-4 grid grid-cols-3 gap-2 justify-between">
        <Feature image={mentorship} title="1-1 Mentorship" />
        <Feature image={userfriendly} title="User Friendly" />
        <Feature image={success} title="Career Assistance" />
      </div>
    </div>
  );
}

function Feature({ image, title }) {
  return (
    <div className="flex flex-col w-full justify-center align-center rounded-md border-primary border h-20">
      <Image src={image} alt={title} height="20rem" width="20rem" />
      <p className="text-center text-secondary text-sm">{title}</p>
    </div>
  );
}
