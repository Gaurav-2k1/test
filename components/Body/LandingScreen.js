import { Search } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React from "react";

export default function LandingScreen() {
  return (
    <div className="w-full bg-purple-300 h-[80vh] p-4">
      <div className="flex flex-col h-1/2 justify-around">
        <h1 className="text-white font-bold text-4xl text-center lg:w-4/6 mx-auto">
          Global IT Training Provider for SAP, Oracle, Salesforce, AWS, Azure,
          more..
        </h1>
        <p className="text-purple-900 text-center">
          25000 Courses | 15000 Elite Tutors | Thousands of Students Trained
          worldwide!
        </p>
      </div>
      <div className="w-full lg:w-1/2 m-auto h-16 bg-purple-100 shadow flex flex-row justify-between">
        <input
          className="w-1/2 focus:outline-none pl-5 bg-transparent"
          placeholder="Ex- Oracle, SAP, etc.."
        ></input>
        <IconButton className="p-2">
          <Search />
        </IconButton>
      </div>
      <div className="text-center text-white mt-4 lg:w-1/2 m-auto">
        Blockchain | Business & CRM | Cloud Computing | Data Engineering | Data
        Science & ML | Design & Graphics | Digital Marketing & SEO | Google |
        IBM | Microsoft
      </div>
    </div>
  );
}
