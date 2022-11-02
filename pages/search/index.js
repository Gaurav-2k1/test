import { isEmpty, isNull, isUndefined } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { LoaderIcon } from "react-hot-toast";
import { useQuery } from "react-query";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";
import LiveCourseComponent from "../../components/Shared/LiveCourseComponent";
import NewSection from "../../components/Shared/NewSection";
import VideoCourseComponent from "../../components/Shared/VideoCourseComponent";
import { searchLiveCourse } from "../../service/live";
import { searchVideoCourse } from "../../service/video";

export default function Search() {
  const router = useRouter();

  const query = router.query.query;

  const searchLive = useQuery(["search-live", query], searchLiveCourse, {});
  const searchVideo = useQuery(["search-video", query], searchVideoCourse, {});

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
  return (
    <div>
      <HeadImageWithText
        src=" bg-[url(/images/business/infodal-business.png)]"
        className="mb-10"
      >
        <div className="text-white text-xl p-5 font-semibold">
          Search Results
        </div>
      </HeadImageWithText>

      <NewSection title="Video Courses" />
      {isLoadingVideo ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex flex-row overflow-x-auto text-white mt-5">
          {isEmpty(searchVideo.data.data) ? (
            <div className="text-md text-black p-4">
              No Results Found in Video Courses
            </div>
          ) : (
            <div className="flex flex-row">
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

      <NewSection title="Live Courses" />
      {isLoadingLive ? (
        <div className="flex flex-row justify-center p-5">
          <LoaderIcon className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex flex-row overflow-x-auto text-white mt-5">
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
    </div>
  );
}
