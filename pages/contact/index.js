import { Alarm } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { Pin } from "@mui/icons-material";
import { Button, Card, CardContent, TextField } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbComponent from "../../components/Shared/BreadCrumbComponent";

export default function ContactUs() {
  return (
    <div>
      <BreadCrumbComponent>Contact Us</BreadCrumbComponent>
      <div className="h-40 lg:h-[40vh] w-3/4 m-auto flex flex-row justify-between items-center text-purple-900">
        <LocationOn className="h-[10vw] w-[10vw]" color="inherit" />
        <Alarm className="h-[10vw] w-[10vw]" color="inherit" />
        <Mail className="h-[10vw] w-[10vw]" color="inherit" />
      </div>
      <BreadCrumbComponent mobileHeight="h-[100vh]" desktopHeight="lg:h-[60vh]">
        <Card variant="outlined" className="w-4/5 lg:h-6/8">
          <CardContent className="flex flex-col lg:grid lg:grid-cols-2 bg-white lg:h-full">
            <div className="flex flex-col w-full h-full justify-between">
              <h1 className="font-semibold text-purple-900 text-left">
                Send us a message
              </h1>
              <div className="flex flex-col lg:w-3/4 justify-between gap-2">
                <TextField placeholder="Your Name" />
                <TextField placeholder="Your Email" />
                <TextField
                  multiline
                  minRows={5}
                  placeholder="Write a message"
                />
                <Button className="bg-purple-900">Submit</Button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-800 to-blue-700 w-full p-4 mt-5 lg:m-0">
              <h1 className="text-white font-semibold text-left">
                Get In Touch
              </h1>
              <div className="flex flex-col justify-between h-3/4">
                <div className="w-full flex flex-row justify-start text-white text-sm items-center pt-5">
                  <LocationOn color="inherit" fontSize="large" />
                  <p className="pl-4">
                    G28 Vita S.A, Pebble Mill Studios, Pershore Road, Birmingham
                    B29 7ES, United Kingdom
                  </p>
                </div>
                <div className="w-full flex flex-row justify-start text-white text-sm items-center pt-5">
                  <Call color="inherit" fontSize="large" />
                  <div className="flex flex-col">
                    <a href="tel: +44 7454 66601" className="pl-4">
                      +44 7454 666010
                    </a>
                    <a href="tel: +91 9302584342" className="pl-4">
                      +91 9302584342
                    </a>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start text-white text-sm items-center pt-5">
                  <Email color="inherit" fontSize="large" />
                  <a href="mailto: contact@infodal.com" className="pl-4">
                    contact@infodal.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </BreadCrumbComponent>
    </div>
  );
}
