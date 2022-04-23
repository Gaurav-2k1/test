import { Button } from "@mui/material";
import React from "react";
import ServerComponent from "../Shared/ServerComponent";
import PossiblitiesComponent from "./PossiblitiesComponent";

export default function AvailableServers() {
  const possiblities = [
    {
      name: "Premium Courses",
      image: "/images/possiblities/premium-courses.jpg",
      shortDescription:
        "Browse job-oriented courses & certifications. Request a customized course for you.",
    },
    {
      name: "Instructor-Led Courses",
      image: "/images/possiblities/Instructor-led courses.jpg",
      shortDescription:
        "Enrol in an online instructor-led course. Learn 1:1 with a tutor in an online classroom.",
    },
    {
      name: "Self-paced Courses",
      image: "/images/possiblities/Self-paced courses.jpg",
      shortDescription:
        "Enrol in self-paced training with online video-based courses. Learn at your own pace.",
    },
    {
      name: "Diploma & Professional Certificate",
      image: "/images/possiblities/Diploma & Professional courses.jpg",
      shortDescription:
        "Get trained for professional certification. Enhance your CV with our Diploma or Professional Certificate.",
    },
    {
      name: "Unlimited Courses",
      image: "/images/possiblities/Unlimited courses.jpg",
      shortDescription:
        "Subscribe for unlimited training. Get access to Infodal's premium courses on IT, Data Science, SAP, Salesforce, MS Excel and more.",
    },
  ];
  return (
    <>
      <div className="p-4 lg:px-20">
        <div className="mt-40  sm:mt-5">
          <p className="text-center text-lg font-light pt-5   ">What We Do</p>
          <h1 className="text-center text-3xl mb-2 text-blue-700 mt-5 mb-10 sm:mb-10 ">
            {" "}
            Unlimited Possibilities
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-6 flex flex-col ">
          {possiblities.map((server, id) => (
            <PossiblitiesComponent
              key={id}
              name={server.name}
              img={server.image}
              shortDescription={server.shortDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
}
