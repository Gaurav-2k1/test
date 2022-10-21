import React from "react";
import { videoCoursesList } from "../../config/config";
import CourseComponent from "../Shared/CourseComponent";
import NewSection from "../Shared/NewSection";

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

      <div className="flex flex-row overflow-x-auto whitespace-nowrap mt-5">
        {videoCoursesList.map((course, index) => (
          <CourseComponent
            key={course.id}
            id={course.id}
            name={course.name}
            img={course.image}
            isSale={course.isSale}
            price={course.price}
            discountedPrice={course.discountedPrice}
            rating={{ stars: course.stars, reviews: course.reviewNos }}
            isLiveCourse={false}
          />
        ))}
      </div>
    </div>
  );
}
