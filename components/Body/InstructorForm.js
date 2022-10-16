import { Button, TextField } from "@mui/material";
import React from "react";

export default function InstructorForm() {
  const styles = (theme) => ({
    field: {
      margin: "10px 0",
    },
    countryList: {
      ...theme.typography.body1,
    },
  });
  return (
    <div className="py-5 px-6">
      <form className="bg-gray-200 rounded w-full text-center p-3 flex flex-col justify-between h-[40vh]">
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
