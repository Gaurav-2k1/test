import { Button } from "@mui/material";
import React from "react";
import WhatweOffer from "./WhatweOffer";

export default function Offerings() {
  const offering = [
    {
      name: "Business Analyst",
      image: "/images/logo/business analyst.png",
    },
    {
      name: "Cloud Administrator",
      image: "/images/logo/cloud.png",
    },
    {
      name: "Data Engineer",
      image: "/images/logo/data engineer.png",
    },
    {
      name: "Data Scientist",
      image: "/images/logo/data scientiest.png",
    },
    {
      name: "Design Engineer",
      image: "/images/logo/design engineer.png",
    },
    {
      name: "Digital Marketer",
      image: "/images/logo/digital marketing.png",
    },
    {
      name: "Entrepreneur",
      image: "/images/logo/entrepre...png",
    },
    {
      name: "Project Manager",
      image: "/images/logo/project manager.png",
    },
    {
      name: "SAP/Oracle Consultant",
      image: "/images/logo/sap consultant.png",
    },
    {
      name: "Software Engineer",
      image: "/images/logo/software.png",
    },
    {
      name: "Technology Consultant",
      image: "/images/logo/tech consultant.png",
    },
    {
      name: "Web/App Developer",
      image: "/images/logo/web developer.png",
    },
  ];
  return (
    <div className="p-4 lg:px-20">
      <div className="text-center mb-5 lg:mb-12">
        <h1 className="text-2xl mb-2">What We Offer</h1>
        <h2 className="text-3xl mb-2">
          <b>Choose Your Career Path</b>
        </h2>
      </div>
      {/* <div className="grid place-items-center min-h-screen flex flex-col mt-5 bg-gray-100 justify-evenly items-stretch"> */}
      <div className="p-4 w-full flex flex-col gap-4 lg:grid lg:grid-cols-4  ">
        {offering.map((Offer) => (
          <div className="text-slate-600 w-100px" key={Offer.name}>
            <WhatweOffer name={Offer.name} img={Offer.image} />
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
