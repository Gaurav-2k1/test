import { isNull, isUndefined } from "lodash";
import React from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import VideoCourseComponent from "../../components/Shared/VideoCourseComponent";

import { fetchVideoCourses } from "../../service/video";

export default function VideoCourses() {
  const courses = useQuery("video-courses", fetchVideoCourses, {
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
          Explore Video Courses
        </div>
      </HeadImageWithText>

      <div className="flex flex-col gap-5 items-center mb-10">
        {isLoading ? (
          <LoaderIcon className="w-20 h-20" />
        ) : (
          courses.data.data.map((course) => (
            <VideoCourseComponent
              key={course.id}
              id={course.id}
              name={course.attributes.name}
              img={
                course.attributes.courseImage.data.attributes.formats.small.url
              }
              isSale={course.attributes.isSale}
              duration={course.attributes.duration}
              classType="Recorded Video Course"
              price={course.attributes.price.price_inr}
              discountedPrice={course.attributes.price.disc_price_inr}
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
