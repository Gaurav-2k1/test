import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LiveCourse({ name, image }) {
  return (
    <Card variant="outlined" className="bg-blue-100">
      <CardContent className="h-[30vh] flex flex-col justify-between">
        <div className="relative h-[15vh] w-full">
          <Image src={image} alt={name} layout="fill" objectFit="scale-down" />
        </div>
        <div className="text-center font-semibold">{name}</div>
      </CardContent>
    </Card>
  );
}
