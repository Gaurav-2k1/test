import React from "react";
import CourseComponent from "../Shared/CourseComponent";

export default function LiveCourses() {
  return (
    <div className="text-secondary text-sm px-4 w-full">
      <div className="text-primary text-base">LIVE INTERACTIVE COURSES</div>
      <br />
      <p>
        One or two liner title: It helps the designer plan where the content
        will sit.
      </p>
      <br />
      <p>
        Sub-content: It helps in creating drafts of the content on the pages of
        the website. It originates from the Latin text but is seen as gibberish.
      </p>
      <div className="mt-3">
        <CourseComponent
          name="Data Analysis Training"
          img="/images/temp/course.png"
          isSale
          duration="20"
          classType="1-1 Live Interactive Classes"
        />
      </div>
    </div>
  );
}
