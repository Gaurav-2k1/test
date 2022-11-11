import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function About() {
  return (
    <div>
      <div className="py-8 px-5 bg-secondary flex flex-col gap-4">
        <p className="text-primary">
          ONE STOP FOR YOUR TRAINING & LEARNING NEEDS
        </p>
        <p className="text-white text-justify">
          {`Are you concerned about the unknown or concerned about keeping up with
          today's technologically evolved society? Put your concerns to rest;
          INFODAL will give you the most excellent accredited, digital, and
          renowned courses right in the convenience of your own home, complete
          with practice exercises to ensure you get the most out of your time
          spent learning. There is a massive audience of potential users, from
          solo entrepreneurs to established digital enterprises. Courses were
          compiled after careful consideration of their usefulness and
          necessity. Being one of the industry's most well-known names, we
          guarantee you'll receive the most cutting-edge information and courses
          available anywhere online.`}
        </p>
      </div>

      <div className="p-8 text-center flex flex-col gap-5">
        <p className="text-primary font-semibold text-xl">CONNECT</p>
        <div className="flex flex-col gap-3 items-center">
          <EmailIcon color="primary" fontSize="large" />
          <a href="mailto:contact@infodal.com">contact@infodal.com</a>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <LocalPhoneIcon color="primary" fontSize="large" />
          <a href="tel:+447454666010">+44 7454 666 010</a>
          <a href="tel:+919302584342">+91 9302584342</a>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <PlaceRoundedIcon color="primary" fontSize="large" />
          <a>
            H-749 DIV Tech park, Republic of Whitefield, Bangalore, Karnataka,
            India
          </a>
        </div>
      </div>
      <div className="py-5 px-6">
        <form className="bg-gray-200 rounded w-full text-center p-3 flex flex-col justify-between gap-5">
          <p className="text-primary">GET IN TOUCH</p>
          <TextField label="Name" fullWidth variant="filled" required />
          <TextField label="Email" fullWidth variant="filled" required />
          <TextField label="Phone Number" fullWidth variant="filled" required />
          <TextField
            multiline
            minRows={5}
            fullWidth
            variant="filled"
            required
            label="Your Enquiry"
          />
          <Button className="bg-primary">Submit</Button>
        </form>
      </div>
    </div>
  );
}
