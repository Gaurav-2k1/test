import React from "react";

import { TextField } from "@mui/material";
import { Divider } from "@mui/material";

export default function BecomeInstructor() {
  return (
    <div className="relative w-full bg-[url('/images/home/instructor/instructor.png')] bg-cover bg-center h-[40vh] bg-blend-overlay bg-slate-900/60 p-3">
      <div className="text-lg font-semibold text-white">
        <span>Request a Demo from</span>
        <span className="pl-2 text-primary">Infodal</span>
      </div>
      <Divider className="w-14 bg-primary h-2" />
    </div>
  );
}
