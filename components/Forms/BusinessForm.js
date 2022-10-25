import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";

export default function BusinessForm() {
  return (
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
          label="Requirements"
        />
        <Button className="bg-primary">Submit</Button>
      </form>
    </div>
  );
}
