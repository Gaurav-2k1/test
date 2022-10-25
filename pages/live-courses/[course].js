import { isEqual, isUndefined } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ShowMore from "../../components/Shared/ShowMore";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import { liveCoursesList } from "../../config/config";
import HorizontalMultiSection from "../../components/Shared/HorizontalMultiSection";
import HeadImage from "../../components/Shared/HeadImage";

export default function LiveCourse() {
  const router = useRouter();
  const { course } = router.query;
  const [courseDetail, setCourseDetail] = useState();

  useEffect(() => {
    setCourseDetail(
      liveCoursesList.find((arr) => isEqual(arr.id, Number(course)))
    );
  }, [course]);

  return courseDetail ? (
    <div>
      <HeadImage
        src={courseDetail.image}
        alt={courseDetail.name}
        className=""
      />
      <div className="p-5">
        <div className="flex flex-col h-[14vh] justify-between mb-2">
          <p className="text-secondary text-lg font-semibold">
            {courseDetail.name}
          </p>
          <div>
            <div className="flex flex-row">
              <WatchLaterOutlinedIcon />
              <p className="pl-2">{courseDetail.duration} Hours</p>
            </div>
            <p className="flex flex-row">
              <ConnectWithoutContactOutlinedIcon />
              <p className="pl-2">1-1 Live Interactive Classes</p>
            </p>
          </div>
        </div>
        <ShowMore showMoreText={"READ MORE"} hideText="HIDE">
          {courseDetail.description}
        </ShowMore>
      </div>
      <HorizontalMultiSection
        overview={courseDetail.overview}
        skillsCovered={courseDetail.skillsCovered}
        reviews={courseDetail.reviews}
        certificate={courseDetail.certificateImg}
      />
    </div>
  ) : (
    <div></div>
  );
}
