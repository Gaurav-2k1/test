import { isNull, isUndefined } from "lodash";
import React, { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import LiveCourseComponent from "../../components/Shared/LiveCourseComponent";
import { fetchLiveCourses } from "../../service/live";
export default function LiveCourses() {
  const courses = useQuery("live-courses", fetchLiveCourses, {
    // onSuccess: (data) => {
    //   setCourse(data.data);
    // },
  });
  const isLoading =
    isUndefined(courses) ||
    isNull(courses) ||
    courses.isFetching ||
    courses.isLoading;

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
        {isLoading ? (
          <LoaderIcon className="w-20 h-20" />
        ) : (
          courses.data.data.map((course) => (
            <LiveCourseComponent
              key={course.id}
              id={course.id}
              name={course.attributes.name}
              img={
                isUndefined(
                  course.attributes.courseImage.data.attributes.formats.small
                )
                  ? course.attributes.courseImage.data.attributes.url
                  : course.attributes.courseImage.data.attributes.formats.small
                      .url
              }
              isSale={course.attributes.isSale}
              duration={course.attributes.duration}
              classType="Live 1 to 1 Interactive Course"
              price={course.attributes.price}
              rating={{
                stars: course.attributes.ratings.Stars,
                reviews: course.attributes.ratings.TotalReviews,
              }}
              width="90vw"
            />
          ))
        )}
      </div>
    </div>
  );
}
