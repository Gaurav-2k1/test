import React from "react";
import { videoCoursesList } from "../../config/config";
import VideoCourseComponent from "../Shared/VideoCourseComponent";
import NewSection from "../Shared/NewSection";
import Link from "next/link";
import { Button } from "@mui/material";

export default function VideoCourses() {
  return (
    <div>
      <NewSection
        title="VIDEO COURSES"
        para1="One or two liner title: It helps the designer plan where the content
          will sit."
        para2="Sub-content: It helps in creating drafts of the content on the pages
          of the website. It originates from the Latin text but is seen as
          gibberish."
      />

      <div className="flex flex-row overflow-x-auto text-white mt-5">
        <div className="flex flex-row">
          {videoCoursesList.slice(0, 5).map((course, index) => (
            <VideoCourseComponent
              key={course.id}
              id={course.id}
              name={course.name}
              img={course.image}
              isSale={course.isSale}
              price={course.price}
              discountedPrice={course.discountedPrice}
              rating={{ stars: course.stars, reviews: course.reviewNos }}
              width="70vw"
            />
          ))}
        </div>
        <div className="w-full flex flex-row justify-center mb-5">
          <Link href="/video-courses" passHref>
            <Button className="bg-primary">Explore All Video Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
