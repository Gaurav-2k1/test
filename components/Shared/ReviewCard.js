import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export default function ReviewCard({ name, stars, designation, review }) {
  return (
    <div className="flex flex-col justify-between bg-secondary w-[70vw] h-[33vh] p-4 m-2 rounded-lg">
      <div className="flex flex-row w-20 items-center mt-2">
        {[...Array(stars)].map((x, i) => (
          <StarOutlinedIcon color="yellow" key={i} fontSize="small" />
        ))}
        {[...Array(5 - stars)].map((x, i) => (
          <StarBorderOutlinedIcon color="yellow" key={i} fontSize="small" />
        ))}
      </div>

      <p className="text-xs">{review}</p>
      <div>
        <p>{name}</p>
        <p>{designation}</p>
      </div>
    </div>
  );
}
