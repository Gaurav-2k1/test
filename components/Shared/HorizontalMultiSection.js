import { Divider } from "@mui/material";
import React from "react";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";
export default function HorizontalMultiSection({ className }) {
  return (
    <div className={className}>
      <ScrollingProvider>
        <StaticMenu />

        <div className="p-5">
          <Section id="overview">
            <div className="h-[30vh]">overview</div>
          </Section>
          <Section id="syllabus">
            <div className="h-[30vh]">syllabus</div>
          </Section>
          <Section id="reviews">
            <div className="h-[30vh]">reviews</div>
          </Section>
          <Section id="certification">
            <div className="h-[30vh]">certificate</div>
          </Section>
        </div>
      </ScrollingProvider>
    </div>
  );
}

export function MenuItem({ name, onClick, selected }) {
  return (
    <div onClick={onClick} selected={selected}>
      <p className={`${selected && "text-primary underline"}`}>{name}</p>
    </div>
  );
}

const StaticMenu = () => {
  const overview = useScrollSection("overview");
  const syllabus = useScrollSection("syllabus");
  const reviews = useScrollSection("reviews");
  const certification = useScrollSection("certification");
  return (
    <div className="flex flex-row justify-between bg-secondary text-white p-3 sticky top-16">
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
