import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import React from "react";

export default function RequestCourse() {
  return (
    <div className="">
      <div className="text-primary font-semibold p-4">
        <h1>REQUEST A COURSE</h1>
        <Divider className="h-1 w-20 bg-primary" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#03045E"
          fillOpacity="1"
          d="M0,224L120,197.3C240,171,480,117,720,117.3C960,117,1200,171,1320,197.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-secondary">
        <div className="py-5 px-6">
          <form className="bg-gray-200 rounded w-full text-center p-3 flex flex-col justify-between gap-4">
            <p className="text-primary">What do you want to learn?</p>
            <p className="">
              Call us at +44 7454666010 or +91 9302584342 or Email to
              contact@infodal.com or Browse our Live Courses
            </p>
            <TextField label="Name" fullWidth variant="filled" required />
            <TextField label="Email" fullWidth variant="filled" required />
            <TextField
              label="Phone Number"
              fullWidth
              variant="filled"
              required
            />
            <TextField label="Topic" fullWidth variant="filled" required />
            <Button className="bg-primary">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
