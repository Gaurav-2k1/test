import { TextField } from "@mui/material";
import { isEmpty, isNull, isUndefined } from "lodash";
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment } from "@mui/material";
import { React, useEffect, useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import LiveCourseComponent from "../../components/Shared/LiveCourseComponent";
import NewSection from "../../components/Shared/NewSection";
import VideoCourseComponent from "../../components/Shared/VideoCourseComponent";
import { searchLiveCourse } from "../../service/live";
import { searchVideoCourse } from "../../service/video";
import { Button } from "@mui/material";
import { ArrowLeft, ArrowLeftOutlined, ArrowRight, ArrowRightAlt } from "@mui/icons-material";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchEnable, setSearchEnable] = useState("");
  var query = router.query.query;

  const searchLive = useQuery(
    ["search-live", searchEnable],
    searchLiveCourse,
    {}
  );
  const searchVideo = useQuery(
    ["search-video", searchEnable],
    searchVideoCourse,
    {}
  );

  const isLoadingVideo =
    isUndefined(searchVideo) ||
    isNull(searchVideo) ||
    searchVideo.isFetching ||
    searchVideo.isLoading;

  const isLoadingLive =
    isUndefined(searchLive) ||
    isNull(searchLive) ||
    searchLive.isFetching ||
    searchLive.isLoading;

  useEffect(() => {
    setSearch(query);
    setSearchEnable(query);
  }, [query]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyboardEnter = (e) => {
    if (e.key === "Enter") {
      setSearchEnable(search);
    }
  };
  const handleSearchTrigger = () => {
    setSearchEnable(search);
  };

  return (
    <div>
      <HeadImageWithText
        src=" bg-[url(/images/business/infodal-business.png)]"
        className="mb-5"
      >
        <div className="text-white text-xl p-5 font-semibold">
          Search Results
        </div>
      </HeadImageWithText>
      <div className="flex flex-row gap-1 p-3 items-center">
        <TextField
          onKeyDown={handleKeyboardEnter}
          inputRef={(input) => input && input.focus()}
          value={search}
          onChange={handleSearchChange}
          variant="outlined"
          className="rounded w-full"
          size="normal"
          placeholder="What do you want to learn today?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button className="bg-primary h-10" onClick={handleSearchTrigger}>
          Search
        </Button>
      </div>
      <NewSection title="Video Courses" />
      {isLoadingVideo ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div id="videoCourse" className="flex flex-row overflow-x-auto text-white mt-5">
          {isEmpty(searchVideo.data.data) ? (
            <div className="text-md text-black p-4">
              No Results Found in Video Courses
            </div>
          ) : (
            <div className="flex flex-row" >
              {searchVideo.data.data.map((course) => (
                <VideoCourseComponent
                  key={course.id}
                  id={course.id}
                  name={course.attributes.name}
                  img={
                    isUndefined(
                      course.attributes.courseImage.data.attributes.formats
                        .small
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
          )}
          
        </div>

      )}

      <div className="flex flex-row gap-2 ml-3 pb-2">
        <Button onClick={() => {
            document.getElementById("videoCourse").scrollLeft -= 100;
          }}>
            <ArrowLeft />
          </Button>
          <Button onClick={() => {
            document.getElementById("videoCourse").scrollLeft += 100;
          }}>
            <ArrowRight />
        </Button>
      </div>


      <NewSection title="Live Courses" />
      {isLoadingLive ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div id="liveCourse" className="flex flex-row overflow-x-auto text-white mt-5">
          {isEmpty(searchLive.data.data) ? (
            <div className="text-md text-black p-4">
              No Results Found in Live Courses
            </div>
          ) : (
            <div className="flex flex-row">
              {searchLive.data.data.map((course) => (
                <LiveCourseComponent
                  key={course.id}
                  id={course.id}
                  name={course.attributes.name}
                  img={
                    isUndefined(
                      course.attributes.courseImage.data.attributes.formats
                        .small
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
              ))}
            </div>
          )}
        </div>
      )}

    <div className="flex flex-row gap-2 ml-3 pb-2">
        <Button onClick={() => {
          document.getElementById("liveCourse").scrollLeft -= 100;
        }}>
          <ArrowLeft />
        </Button>
        <Button onClick={() => {
          document.getElementById("liveCourse").scrollLeft += 100;
        }}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
