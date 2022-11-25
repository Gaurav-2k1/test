import CheckIcon from "@mui/icons-material/Check";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

import ReviewCard from "./ReviewCard";
export default function HorizontalMultiSection({
  overview,
  skillsCovered,
  pdfUrl,
  reviews,
  certificate,
}) {
  const handleDownloadSyllabus = () => {
    console.log(pdfUrl);
    window.open(pdfUrl, "_blank");
  };
  return (
    <div>
      <ScrollingProvider offset={-120}>
        <StaticMenu />

        <div>
          <Section id="overview" className="p-5 whitespace-pre-wrap">
            <div>{overview}</div>
          </Section>

          <Section id="syllabus" className="p-5">
            <div className="border p-3 my-4">
              <p className="text-primary font-semibold">SKILLS COVERED</p>
              {skillsCovered.data.map((skill, index) => (
                <div className="flex flex-row pt-2" key={index}>
                  <CheckIcon color="primary" />
                  <p className="pl-2">{skill.attributes.name}</p>
                </div>
              ))}
            </div>
            {!(pdfUrl === "") && (
              <Button
                className="bg-primary z-10 mb-5 md:w-1/5 md:h-10"
                fullWidth
                onClick={handleDownloadSyllabus}
              >
                Download Syllabus
              </Button>
            )}
          </Section>

          <Section id="reviews">
            <div className="flex flex-row overflow-x-auto text-white">
              <div className="flex flex-row">
                {reviews.data.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    designation={review.designation}
                    stars={review.rating}
                    review={review.review}
                  />
                ))}
              </div>
            </div>
          </Section>

          <Section id="certification" className="bg-secondary">

            <div className="h-[40vh] bg-secondary text-primary md:h-auto ">
              <p className="text-lg font-bold md:text-2xl ml-2 text-primary">Certificate</p>
              <Divider className="h-1 bg-primary w-16 ml-2 mb-4" />

              <div className="md:w-full flex flex-row justify-center">
                <div className="w-full h-[30vh] relative md:h-[50vh]">
                <div className="md:certificate-clip w-full h-full">
                </div>
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
    <div onClick={onClick} selected={selected}>
      <p className={`${selected && "text-primary underline"}`}>{name}</p>
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
      <div className="flex flex-row justify-between md:justify-start md:gap-8 text-gray-800 p-3 cursor-pointer">
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
