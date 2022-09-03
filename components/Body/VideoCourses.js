import React from "react";
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
        <CourseComponent
          name="Data Analysis Training"
          img="/images/temp/course.png"
          isSale
          duration="20"
          classType="1-1 Live Interactive Classes"
          rating={{ stars: 4, reviews: 132 }}
        />
        <CourseComponent
          name="Data Analysis Training"
          img="/images/temp/course.png"
          isSale
          duration="20"
          classType="1-1 Live Interactive Classes"
          rating={{ stars: 4, reviews: 132 }}
        />
        <CourseComponent
          name="Data Analysis Training"
          img="/images/temp/course.png"
          isSale
          duration="20"
          classType="1-1 Live Interactive Classes"
          rating={{ stars: 4, reviews: 132 }}
        />
      </div>
    </div>
  );
}
