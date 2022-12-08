import { Button } from "@mui/material";
import { isNull, isUndefined } from "lodash";
import Link from "next/link";
import React from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchLiveCourses } from "../../service/live";
import useIsDesktop from "../Hooks/useIsDesktop";
import LiveCourseComponent from "../Shared/LiveCourseComponent";
import NewSection from "../Shared/NewSection";

export default function LiveCourses() {
  const isDesktop = useIsDesktop();
  const courses = useQuery(
    ["live-courses-top", 1, isDesktop ? 8 : 5],
    fetchLiveCourses,
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
        title="LIVE INTERACTIVE COURSES"
        para1="Take specialized courses with a live instructor to enhance your skills."
        para2="You'll learn new skills in a specific area with our live 1:1 instructor-led training. Take a series of in-depth classes to improve your practical skills. Get a recognized digital certificate and show potential employers your new skills and accomplishments."
      />
      {isLoading ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex flex-row overflow-x-auto w-full md:justify-center mt-5 px-2 md:overflow-auto">
          <div className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 md:place-items-center md:gap-4 justify-between">
            {courses.data.data.map((course, idx) => (
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
                width="md:w-full"
              />
            ))}
          </div>
        </div>
      )}
      <div className="w-full flex flex-row justify-center mb-5 md:pt-4">
        <Link href="/live-courses" passHref>
          <Button className="bg-primary md:text-lg mt-3">
            Explore All Live Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
