import CheckIcon from "@mui/icons-material/Check";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import ShowMore from "./ShowMore";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

import ReviewCard from "./ReviewCard";
export default function HorizontalMultiSection({
  overview,
  courseDetail,
  skillsCovered,
  pdfUrl,
  reviews,
  certificate,
}) {
  console.log(reviews);
  const handleDownloadSyllabus = () => {
    console.log(pdfUrl);
    window.open(pdfUrl, "_blank");
  };
  return (
    <div>
      <ScrollingProvider offset={-120}>
        <StaticMenu />

        <div>
          <Section id="overview" className="p-5 whitespace-pre-wrap w-[45vw] sm:w-full">
            <div className="text-3xl font-bold pb-5">
              Learn Basics of IOT
            </div>
            <ShowMore showMoreText={"READ MORE"} hideText="HIDE">
              {courseDetail.data.attributes.courseDetail.description}
            </ShowMore>
            <div className="text-3xl font-semibold pb-5 mt-5">
              What You will learn ?
            </div>
            <div dangerouslySetInnerHTML={{ __html: overview }} />
            <div>
              <div className="text-3xl font-semibold pb-5 mt-5">
                Requirements
              </div>
              <ul className="pl-10">
                <li className="font-normal text-base">
                  Microcontroller etc
                </li>
                <li className="font-normal text-base">
                  Basics of C
                </li><li className="font-normal text-base">
                  IDE
                </li>
                <li className="font-normal text-base">
                  Arrays
                </li><li className="font-normal text-base">
                  Functions
                </li>
              </ul>
            </div>
          </Section>

          <Section id="syllabus" className="p-5">
            <div className="border-2 border-solid border-secondary w-[25vw] pl-10 my-5 rounded-lg 
            sm:w-full">
              <p className="text-3xl font-semibold pb-5 mt-5 text-secondary">The Skill you will cover</p>
              <ul className="pl-10 mb-5">
                <li className="font-normal text-base">
                  Basic Concepts of Programming
                </li>
                <li className="font-normal text-base">
                  Basic of C
                </li><li className="font-normal text-base">
                  String
                </li><li className="font-normal text-base">
                  Arrays
                </li><li className="font-normal text-base">
                  Functions
                </li>

              </ul>
            </div>
            <div className="border p-3 my-4">
              <p className="text-primary font-semibold">SKILLS COVERED</p>

              {skillsCovered.data.map((skill, index) => (
                <div className="flex flex-row pt-2" key={index}>
                  <CheckIcon color="primary" />
                  <p className="pl-2">{skill.attributes.name}</p>

                </div>
              ))}
            </div>
            {(pdfUrl === "") && (
              <Button
                className="bg-secondary z-10 w-[20vw] mb-5 text-base p-3 sm:w-full"
                fullWidth
                onClick={handleDownloadSyllabus}
              >
                Download Syllabus
              </Button>
            )}
            <div>
              <p>Detailed overview of the course is shown here</p>
              
            </div>
          </Section>


          <Section id="reviews">
            <div className="flex flex-row overflow-x-auto text-white md:w-fit md:gap-3">
              <div className="flex flex-row">
                {reviews.data.map((review) => (
                  <ReviewCard
                    key={review.attributes.id}
                    name={review.attributes.name}
                    designation={review.attributes.designation}
                    stars={review.attributes.rating}
                    review={review.attributes.review}
                  />
                ))}
              </div>
            </div>
          </Section>


          <Section id="certification" className="bg-secondary">
            <div className="h-[40vh] bg-secondary text-primary md:h-auto ">
              <p className="text-lg font-bold md:text-2xl ml-2 text-primary">
                Certificate
              </p>
              <Divider className="h-1 bg-primary w-16 ml-2 mb-4" />

              <div className="md:w-full flex flex-row justify-center">
                <div className="w-full h-[30vh] relative md:h-[50vh]">
                  <div className="md:certificate-clip w-full h-full"></div>
                  <Image
                    src={certificate}
                    alt="Certificate"
                    layout="fill"
                    objectFit="contain"
                    className="md:mb-4"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </ScrollingProvider>
    </div>
  );
}

const MenuItem = ({ name, onClick, selected }) => {
  return (
    <div onClick={onClick} selected={selected} className={`mt-5 ${selected ? "bg-primary" : ""} p-3 rounded-lg text-black sm:p-1`}>
      <p className={`${selected && "text-white"} font-semibold`}>{name}</p>
    </div>
  );
};

const StaticMenu = () => {
  const overview = useScrollSection("overview");
  const syllabus = useScrollSection("syllabus");
  const reviews = useScrollSection("reviews");
  const certification = useScrollSection("certification");
  return (
    <div className="bg-white shadow-none sticky top-20 z-20 md:top-14">
      <div className="flex flex-row justify-between md:justify-start md:gap-8 text-gray-800 p-3 cursor-pointer ">
        <MenuItem
          onClick={overview.onClick}
          selected={overview.selected}
          name="OVERVIEW"
        />
        <MenuItem
          onClick={syllabus.onClick}
          selected={syllabus.selected}
          name="SYLLABUS"
        />
        <MenuItem
          onClick={reviews.onClick}
          selected={reviews.selected}
          name="REVIEWS"
        />
        <MenuItem
          onClick={certification.onClick}
          selected={certification.selected}
          name="CERTIFICATE"
        />
      </div>
    </div>
  );
};
