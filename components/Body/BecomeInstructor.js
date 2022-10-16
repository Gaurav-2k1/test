import { TextField } from "@mui/material";
import { Divider } from "@mui/material";
import React from "react";

export default function BecomeInstructor() {
  return (
    <div className="relative w-full bg-[url('/images/home/instructor/instructor.png')] bg-cover bg-center h-[40vh] bg-blend-overlay bg-slate-900/60 p-3">
      <div className="text-lg font-semibold text-white">
        <span>Become an Instructor at</span>
        <span className="pl-2 text-primary">Infodal</span>
      </div>
      <Divider className="w-14 bg-primary h-2" />
      <div className="h-40 flex flex-col justify-evenly text-white">
        <p>
          One or two liner title: It helps the designer plan where the content
          will sit.
        </p>
        <p>
          Sub-content: It helps in creating drafts of the content on the pages
          of the website. It originates from the Latin text but is seen as
          gibberish.
        </p>
      </div>
    </div>
  );
}
