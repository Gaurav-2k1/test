import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ShowMore from "../../components/Shared/ShowMore";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import HorizontalMultiSection from "../../components/Shared/HorizontalMultiSection";
import HeadImage from "../../components/Shared/HeadImage";
import { useQuery } from "react-query";
import {
  getCurrency,
  getUpdatedCurrencyValue,
  getValidatedCouponCode,
  setUpdatedCurrencyValue,
  setValidatedCouponCode,
} from "../../store/currencySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyAmounts } from "../../config/config";
import { isNull, isUndefined } from "lodash";
import { LoaderIcon } from "react-hot-toast";
import { fetchVideoCourseDetail } from "../../service/video";
import PayButton from "../../components/Shared/PayButton";
import ValidateCoupon from "../../components/Shared/ValidateCoupon";

export default function VideoCourses() {
  const router = useRouter();
  const { course } = router.query;
  const currency = useSelector(getCurrency);
  const dispatch = useDispatch();

  const updatedCurrency = useSelector(getUpdatedCurrencyValue);
  const validatedCouponCode = useSelector(getValidatedCouponCode);
  var courseDetail = useQuery(["video-course", course], fetchVideoCourseDetail);

  const isLoading =
    isUndefined(courseDetail) ||
    isNull(courseDetail) ||
    courseDetail.isFetching ||
    courseDetail.isLoading;

  courseDetail = courseDetail && courseDetail.data;
  const prices =
    courseDetail &&
    getCurrencyAmounts(currency, courseDetail.data.attributes.price);

  useEffect(() => {
    return () => {
      dispatch(setUpdatedCurrencyValue(undefined));
      dispatch(setValidatedCouponCode(undefined));
    };
  }, [dispatch]);

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
              <p className="text-lg">
                {updatedCurrency ? updatedCurrency : prices.discountedPrice}
              </p>
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
          {courseDetail.data.attributes.courseDetail.description}
        </ShowMore>
      </div>
      <HorizontalMultiSection
        overview={courseDetail.data.attributes.courseDetail.overview}
        skillsCovered={courseDetail.data.attributes.skills}
        pdfUrl=""
        reviews={courseDetail.data.attributes.reviews}
        certificate={
          courseDetail.data.attributes.certificateImage.data.attributes.url
        }
      />
      {courseDetail.data.attributes.courseDetail.isPaymentAllowed && (
        <div>
          <ValidateCoupon courseId={course} courseType="video" />

          <PayButton
            amount={prices.discountedPrice}
            course_id={course}
            course_type="video"
            coupon_code={validatedCouponCode}
          />
        </div>
      )}
    </div>
  ) : (
    <div className="h-[50vh] w-full flex flex-row justify-center items-center">
      <LoaderIcon className="w-20 h-20" />
    </div>
  );
}
