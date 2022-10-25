import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import React from "react";

export default function Server() {
  return (
    <div className="">
      <div className="text-primary font-semibold p-4">
        <h1>REQUEST A SERVER</h1>
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
            <TextField label="Name" fullWidth variant="filled" required />
            <TextField label="Email" fullWidth variant="filled" required />
            <TextField
              label="Phone Number"
              fullWidth
              variant="filled"
              required
            />
            <TextField
              label="Cloud Server Required"
              fullWidth
              variant="filled"
              required
            />
            <TextField
              label="Duration in Hours"
              fullWidth
              variant="filled"
              required
            />
            <Button className="bg-primary">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
