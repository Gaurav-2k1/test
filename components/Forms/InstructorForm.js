import { Button, TextField } from "@mui/material";
import React from "react";

export default function InstructorForm() {
  return (
    <div className="py-5 px-6 md:w-1/2 self-center">
      <form className="bg-gray-200 rounded w-full text-center p-3 flex flex-col justify-between gap-3">
        <p className="text-primary">BECOME AN INSTRUCTOR</p>
        <TextField label="Name" fullWidth variant="filled" required />
        <TextField label="Email" fullWidth variant="filled" required />
        <TextField label="Phone Number" fullWidth variant="filled" required />
        <TextField
          label="Specialization"
          fullWidth
          variant="filled"
          required
          className="mb-3"
        />
        <Button className="bg-primary">Submit</Button>
      </form>
    </div>
  );
}
