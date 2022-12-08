import { SearchOutlined } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { isNull, isUndefined } from "lodash";
import Router from "next/router";
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

  const [search, setSearch] = useState("");
  const handleSearchClick = () => {
    // !isEmpty(search) ? (
    Router.push({ pathname: "/search", query: { query: search } });
  };

  const handleKeyboardEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const isLoading =
    isUndefined(courses) ||
    isNull(courses) ||
    courses.isFetching ||
    courses.isLoading;

  return (
    <div>
      <HeadImageWithText
        image="/images/business/infodal-business.png"
        className="mb-10 flex justify-center flex-col items-center"
      >
        <div className="absolute top-1/4 md:text-3xl text-white text-center">
          Explore All Live Courses
        </div>

        <div className="flex flex-row justify-between items-center">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            className="m-3 bg-white align-center  md:w-[50vw] w-[70vw] rounded"
            size="normal"
            placeholder="What do you want to learn today?"
            onKeyDown={handleKeyboardEnter}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
          <Button className="bg-primary" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </HeadImageWithText>

      <div className="flex flex-col gap-5 items-center mb-10 md:grid md:grid-cols-3 lg:grid-cols-4 md:relative md:place-items-center md:px-10">
        {isLoading ? (
          <LoaderIcon className="w-20 h-20 md:absolute md:left-1/2" />
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
              width="md:w-full"
            />
          ))
        )}
      </div>
    </div>
  );
}
