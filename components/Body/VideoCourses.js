import React from "react";
import VideoCourseComponent from "../Shared/VideoCourseComponent";
import NewSection from "../Shared/NewSection";
import Link from "next/link";
import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { LoaderIcon } from "react-hot-toast";
import { isNull, isUndefined } from "lodash";
import { fetchVideoCourses } from "../../service/video";
import useIsDesktop from "../Hooks/useIsDesktop";

export default function VideoCourses() {
  const isDesktop = useIsDesktop();
  const courses = useQuery(
    ["video-courses-top", 1, isDesktop ? 8 : 5],
    fetchVideoCourses,
    {
      // onSuccess: (data) => {
      //   setCourse(data.data);
      // },
    }
  );
  const isLoading =
    isUndefined(courses) ||
    isNull(courses) ||
    courses.isFetching ||
    courses.isLoading;

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
      {isLoading ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex flex-row overflow-x-auto md:justify-center text-white mt-5 md:overflow-auto">
          <div className="flex flex-row md:grid md:grid-cols-4 md:gap-4">
            {courses.data.data.map((course) => (
              <VideoCourseComponent
                key={course.id}
                id={course.id}
                name={course.attributes.name}
                img={
                  isUndefined(
                    course.attributes.courseImage.data.attributes.formats.small
                  )
                    ? course.attributes.courseImage.data.attributes.url
                    : course.attributes.courseImage.data.attributes.formats
                        .small.url
                }
                isSale={course.attributes.isSale}
                duration={course.attributes.duration}
                classType="Recorded Video Course"
                price={course.attributes.price}
                rating={{
                  stars: course.attributes.ratings.Stars,
                  reviews: course.attributes.ratings.TotalReviews,
                }}
                width="70vw"
              />
            ))}
          </div>
        </div>
      )}
      <div className="w-full flex flex-row justify-center mb-5">
        <Link href="/video-courses" passHref>
          <Button className="bg-primary md:text-lg">
            Explore All Video Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
