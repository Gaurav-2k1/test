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
  className,
  overview,
  skillsCovered,
  reviews,
  certificate,
}) {
  return (
    <div>
      <ScrollingProvider offset={-120}>
        <StaticMenu />

        <div>
          <Section id="overview" className="p-5">
            <div>{overview}</div>
          </Section>

          <Section id="syllabus" className="p-5">
            <div className="border p-3 my-4">
              <p className="text-primary font-semibold">SKILLS COVERED</p>
              {skillsCovered.map((skill) => (
                <div className="flex flex-row pt-2">
                  <CheckIcon color="primary" />
                  <p className="pl-2">{skill}</p>
                </div>
              ))}
            </div>
            <Button className="bg-primary z-10 mb-5" fullWidth>
              Download Syllabus
            </Button>
          </Section>

          <Section id="reviews">
            <div className="flex flex-row overflow-x-auto text-white">
              <div className="flex flex-row">
                {reviews.map((review) => (
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

          <Section id="certification">
            <div className="h-[40vh] bg-secondary text-primary py-4 px-3">
              <p className="text-lg font-bold">Certificate</p>
              <Divider className="h-1 bg-primary w-16" />
              <div className="w-full h-[30vh] relative mt-4">
                <Image src={certificate} alt="Certificate" layout="fill" />
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
    <div className="flex flex-row justify-between bg-secondary text-white p-3 sticky top-16 z-20">
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
  );
};
