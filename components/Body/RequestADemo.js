import { TextField } from "@mui/material";
import { Divider } from "@mui/material";
import React from "react";

export default function RequestADemo() {
  return (
    <div className="relative w-full bg-[url('/images/home/instructor/instructor.png')] bg-cover bg-center h-[40vh] bg-blend-overlay bg-slate-900/60 p-3">
      <div className="text-lg font-semibold text-white">
        <span>Request a Demo from</span>
        <span className="pl-2 text-primary">Infodal</span>
      </div>
      <Divider className="w-14 bg-primary h-2" />
      <div className="h-40 flex flex-col justify-evenly text-white">
        <p>
          Get a FREE demo for the your preferred IT course and get a feel, how
          the live training at Infodal works.
        </p>
        <p>
          You can fill up the form below with appropriate module name and your
          email address, our team will get in touch with you within 24 hours
          along with the details of the demo.
        </p>
      </div>
    </div>
  );
}
