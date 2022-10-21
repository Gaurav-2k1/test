import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { liveCoursesList } from "../../config/config";
import CourseComponent from "../Shared/CourseComponent";
import NewSection from "../Shared/NewSection";

export default function LiveCourses() {
  return (
    <div>
      <NewSection
        title="LIVE INTERACTIVE COURSES"
        para1="One or two liner title: It helps the designer plan where the content
          will sit."
        para2="Sub-content: It helps in creating drafts of the content on the pages
          of the website. It originates from the Latin text but is seen as
          gibberish."
      />

      <div className="flex flex-row overflow-x-auto whitespace-nowrap mt-5">
        {liveCoursesList.map((course, index) => (
          <CourseComponent
            key={course.id}
            id={course.id}
            name={course.name}
            img={course.image}
            isSale={course.isSale}
            duration={course.duration}
            classType={course.classType}
            price={course.price}
            discountedPrice={course.discountedPrice}
            rating={{ stars: course.stars, reviews: course.reviews }}
            isLiveCourse={true}
          />
        ))}
      </div>
    </div>
  );
}
