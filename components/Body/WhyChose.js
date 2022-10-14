import { Divider } from "@mui/material";
import React from "react";
import WhyChoseComponent from "../Shared/WhyChoseComponent";
import { whyChoseUs } from "../../config/config";
export default function WhyChose() {
  return (
    <div className="bg-secondary py-5 px-2 w-full">
      <p className="font-bold text-primary">Why chose Infodal?</p>
      <Divider className="bg-primary w-8 h-1" />
      <div className="flex flex-col items-center my-5 justify-between">
        {whyChoseUs.map((item, idx) => (
          <WhyChoseComponent
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
