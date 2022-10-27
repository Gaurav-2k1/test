import React from "react";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import VideoCourseComponent from "../../components/Shared/LiveCourseComponent";
import { videoCoursesList } from "../../config/config";

export default function VideoCourses() {
  return (
    <div>
      <HeadImageWithText
        src=" bg-[url(/images/business/infodal-business.png)]"
        className="mb-10"
      >
        <div className="text-white text-xl p-5 font-semibold">
          Explore Video Courses
        </div>
      </HeadImageWithText>
      <div className="flex flex-col gap-5 items-center mb-10">
        {videoCoursesList.map((course, index) => (
          <VideoCourseComponent
            key={course.id}
            id={course.id}
            name={course.name}
            img={course.image}
            isSale={course.isSale}
            duration={course.duration}
            classType={course.classType}
            price={course.price}
            discountedPrice={course.discountedPrice}
            rating={{ stars: course.stars, reviews: course.reviewNos }}
            width="90vw"
          />
        ))}
      </div>
    </div>
  );
}
