import { Button } from "@mui/material";
import { isNull, isUndefined } from "lodash";
import Link from "next/link";
import React from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { liveCoursesList } from "../../config/config";
import { fetchLiveCourses } from "../../service/live";
import LiveCourseComponent from "../Shared/LiveCourseComponent";
import NewSection from "../Shared/NewSection";

export default function LiveCourses() {
  const courses = useQuery(["live-courses-top", 1, 5], fetchLiveCourses, {
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
      <NewSection
        title="LIVE INTERACTIVE COURSES"
        para1="One or two liner title: It helps the designer plan where the content
          will sit."
        para2="Sub-content: It helps in creating drafts of the content on the pages
          of the website. It originates from the Latin text but is seen as
          gibberish."
      />

      <div className="flex flex-row overflow-x-auto text-white mt-5">
        <div className="flex flex-row">
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
                    : course.attributes.courseImage.data.attributes.formats
                        .small.url
                }
                isSale={course.attributes.isSale}
                duration={course.attributes.duration}
                classType="Live 1 to 1 Interactive Course"
                price={course.attributes.price}
                rating={{
                  stars: course.attributes.ratings.Stars,
                  reviews: course.attributes.ratings.TotalReviews,
                }}
                width="70vw"
              />
            ))
          )}
        </div>
      </div>
      <div className="w-full flex flex-row justify-center mb-5">
        <Link href="/live-courses" passHref>
          <Button className="bg-primary">Explore All Live Courses</Button>
        </Link>
      </div>
    </div>
  );
}
