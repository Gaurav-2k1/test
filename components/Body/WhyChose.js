import { Divider } from "@mui/material";
import React from "react";
import WhyChoseComponent from "../Shared/WhyChoseComponent";
import { whyChoseUs } from "../../config/config";
export default function WhyChose() {
  return (
    <div className="bg-secondary py-5 px-2 w-full md:px-5">
      <p className="font-bold text-primary md:text-3xl">Why chose Infodal?</p>
      <Divider className="bg-primary w-8 h-1 md:w-20 md:h-2 md:mt-2" />
      <div className="flex flex-col items-center my-5 justify-between md:grid md:grid-cols-3 md:gap-4 md:py-5">
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
