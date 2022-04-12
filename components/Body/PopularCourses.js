import React from "react";
import CourseComponent from "../Shared/CourseComponent";

export default function PopularCourses() {
  return (
    <div className="bg-blue-600 w-full p-4 lg:px-40">
      <h1 className="text-white text-3xl font-semibold w-full text-center ">
        Popular Courses
      </h1>
      <p className="text-white w-full text-center mt-3">
        Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce
        faucibus nulla sed finibus egestas. Vestibulum purus magna.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row justify-between">
        <CourseComponent
          name="WordPress Plugin Development"
          shortDescription="Everything you need to become hirable WordPress Developer.Learn how to building a professional."
          img="/images/oracle/apex.png"
        />
        <CourseComponent
          name="WordPress Plugin Development"
          shortDescription="Everything you need to become hirable WordPress Developer.Learn how to building a professional."
          img="/images/oracle/apex.png"
        />
        <CourseComponent
          name="WordPress Plugin Development"
          shortDescription="Everything you need to become hirable WordPress Developer.Learn how to building a professional."
          img="/images/oracle/apex.png"
        />
      </div>
    </div>
  );
}
