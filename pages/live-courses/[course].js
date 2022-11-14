import { useRouter } from "next/router";
import React from "react";
import ShowMore from "../../components/Shared/ShowMore";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import HorizontalMultiSection from "../../components/Shared/HorizontalMultiSection";
import HeadImage from "../../components/Shared/HeadImage";
import { useQuery } from "react-query";
import { fetchLiveCourseDetail } from "../../service/live";
import { getCurrency } from "../../store/currencySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyAmounts } from "../../config/config";
import { isNull, isUndefined } from "lodash";
import { LoaderIcon } from "react-hot-toast";
import useIsAuthenticated from "../../components/Hooks/useIsAuthenticated";
import PayButton from "../../components/Shared/PayButton";

export default function LiveCourse() {
  const router = useRouter();
  const { course } = router.query;
  const dispatch = useDispatch();

  const currency = useSelector(getCurrency);
  const isAuthenticated = useIsAuthenticated();
  var courseDetail = useQuery(
    ["live-course", course],
    fetchLiveCourseDetail,
    {}
  );

  const isLoading =
    isUndefined(courseDetail) ||
    isNull(courseDetail) ||
    courseDetail.isFetching ||
    courseDetail.isLoading;

  courseDetail = courseDetail && courseDetail.data;
  const prices =
    courseDetail &&
    getCurrencyAmounts(currency, courseDetail.data.attributes.price);
  return !isLoading ? (
    <div>
      <HeadImage
        src={
          isUndefined(
            courseDetail.data.attributes.courseImage.data.attributes.formats
              .medium
          )
            ? courseDetail.data.attributes.courseImage.data.attributes.url
            : courseDetail.data.attributes.courseImage.data.attributes.formats
                .medium.url
        }
        alt={courseDetail.data.attributes.name}
        className=""
      />
      <div className="p-5">
        <div className="flex flex-col h-[14vh] justify-between mb-2">
          <p className="text-secondary text-lg font-semibold">
            {courseDetail.data.attributes.name}
          </p>
          <div>
            <div className="flex flex-row gap-2 items-center">
              <p>{currency}</p>
              <p className="line-through">{prices.price}</p>
              <p className="text-lg">{prices.discountedPrice}</p>
            </div>
            <div className="flex flex-row">
              <WatchLaterOutlinedIcon />
              <p className="pl-2">
                {courseDetail.data.attributes.duration} Hours
              </p>
            </div>
            <p className="flex flex-row">
              <ConnectWithoutContactOutlinedIcon />
              <p className="pl-2">1-1 Live Interactive Classes</p>
            </p>
          </div>
        </div>
        <ShowMore showMoreText={"READ MORE"} hideText="HIDE">
          {courseDetail.data.attributes.courseOverview.description}
        </ShowMore>
      </div>
      <HorizontalMultiSection
        overview={courseDetail.data.attributes.courseOverview.overview}
        skillsCovered={courseDetail.data.attributes.skills}
        pdfUrl={courseDetail.data.attributes.coursePdf.data.attributes.url}
        reviews={courseDetail.data.attributes.reviews}
        certificate={
          courseDetail.data.attributes.certificateImage.data.attributes.url
        }
      />

      {courseDetail.data.attributes.courseOverview.isPaymentAllowed && (
        <PayButton
          amount={prices.discountedPrice}
          course_id={course}
          course_type="live"
        />
      )}
    </div>
  ) : (
    <div className="h-[50vh] w-full flex flex-row justify-center items-center">
      <LoaderIcon className="w-20 h-20" />
    </div>
  );
}
