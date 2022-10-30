import { isNull, isUndefined } from "lodash";
import React, { useState } from "react";
import { useQuery } from "react-query";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import LiveCourseComponent from "../../components/Shared/LiveCourseComponent";
import { liveCoursesList } from "../../config/config";
import { fetchLiveCourses } from "../../service/live";
export default function LiveCourses() {
  const courses = useQuery("live-courses", fetchLiveCourses, {
    // onSuccess: (data) => {
    //   setCourse(data.data);
    // },
  });
  if (
    isUndefined(courses) ||
    isNull(courses) ||
    courses.isFetching ||
    courses.isLoading
  )
    return <div></div>;

  console.log(courses.data.data);
  return (
    <div>
      <HeadImageWithText
        src=" bg-[url(/images/business/infodal-business.png)]"
        className="mb-10"
      >
        <div className="text-white text-xl p-5 font-semibold">
          Explore Live Courses
        </div>
      </HeadImageWithText>
      <div className="flex flex-col gap-5 items-center mb-10">
        {courses.data.data.map((course) => (
          <LiveCourseComponent
            key={course.id}
            id={course.id}
            name={course.attributes.name}
            img={course.attributes.courseImage.data.attributes.url}
            isSale={course.attributes.isSale}
            duration={course.attributes.duration}
            classType="Live 1 to 1 Interactive Course"
            price={course.attributes.price.price_inr}
            discountedPrice={course.attributes.price.disc_price_inr}
            rating={{
              stars: course.attributes.ratings.Stars,
              reviews: course.attributes.ratings.TotalReviews,
            }}
            width="90vw"
          />
        ))}
      </div>
    </div>
  );
}
