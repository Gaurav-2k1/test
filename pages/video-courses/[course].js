import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyAmounts } from "../../config/config";
import { isNull, isUndefined } from "lodash";
import { LoaderIcon } from "react-hot-toast";
import { fetchVideoCourseDetail } from "../../service/video";
import PayButton from "../../components/Shared/PayButton";
import ValidateCoupon from "../../components/Shared/ValidateCoupon";
import { remark } from "remark";
import remarkHtml from "remark-html";
import durationi from '../../public/images/course/duration.png'
import stream from '../../public/images/course/stream.png'
import type from '../../public/images/course/type.png'
import certificate from '../../public/images/course/certificate.png'

import CourseutilTile from "../../components/Shared/CourseutilTile";
import ShopButton from "../../components/Shared/ShopButton";
import PricingBox from "../../components/Shared/PricingBox";
import useIsDesktop from "../../components/Hooks/useIsDesktop";

export default function VideoCourses() {
  const router = useRouter();
  const { course } = router.query;
  const currency = useSelector(getCurrency);
  const dispatch = useDispatch();
  const [overview, setOverview] = useState("");
  const updatedCurrency = useSelector(getUpdatedCurrencyValue);
  const validatedCouponCode = useSelector(getValidatedCouponCode);
  var courseDetail = useQuery(["video-course", course], fetchVideoCourseDetail);
  const isDesktop = useIsDesktop();
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

  const contentHtml = async () => {
    const processedContent = await remark()
      .use(remarkHtml)
      .process(courseDetail.data.attributes.courseDetail.courseOverviewFinal);
    return processedContent.toString();
  };

  useEffect(async () => {
    var data = courseDetail && (await contentHtml());
    data =
      data === "" ? courseDetail.data.attributes.courseDetail.overview : data;
    setOverview(data);
    console.log(courseDetail)
  }, [courseDetail]);

  console.log(overview);
  return !isLoading ? (
    <div className="flex flex-row sm:flex-col">
      <div className="flex px-20 py-10 sm:px-10">
        <div>
          <div className="flex flex-col sm:flex-row">
            <p className="text-3xl font-semibold sm:text-lg">{courseDetail.data.attributes.name}</p>
            <span className="text-lg font-medium mt-1 sm:hidden">
              Learn IOT with Rasberryp,Arduino and Cloud
            </span>
            <span className="text-lg font-normal my-1 sm:mx-2 sm:text-base">
              4.5 ⭐ (0251)
            </span>
          </div>
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
            className="absolute left-0"
          />
          <div className="p-2">
            <div className="flex flex-row w-[40vw] h-[14vh] mb-4 justify-around sm:hidden">
              {/* <p className="text-secondary text-lg font-semibold">
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
                <p className="pl-2">Recorded Video Course</p>
              </p>
            </div> */}

              <CourseutilTile src={durationi} content="Duration" des={`${courseDetail.data.attributes.duration} Hours`} />
              <CourseutilTile src={type} content="Content Type" des="100% Online" />
              <CourseutilTile src={stream} content="Course Type" des="Live 1 to 1" />


            </div>
            {
              !isDesktop ? <PricingBox
                classs={true}
                courseDetail={courseDetail}
                currency={currency}
                prices={prices}
                durationi={durationi}
                type={type}
                stream={stream}
                certificate={certificate}
                updatedCurrency={updatedCurrency}
              /> : <></>

            }

          </div>

          <HorizontalMultiSection
            overview={overview}
            courseDetail={courseDetail}
            skillsCovered={courseDetail.data.attributes.skills}
            pdfUrl=""
            reviews={courseDetail.data.attributes.reviews}
            certificate={
              courseDetail.data.attributes.certificateImage.data.attributes.url
            }
          />

        </div>

        {/* {courseDetail.data.attributes.courseDetail.isPaymentAllowed && (
        <div>
          <ValidateCoupon courseId={course} courseType="video" />

          <PayButton
            amount={prices.discountedPrice}
            course_id={course}
            course_type="video"
            coupon_code={validatedCouponCode}
          />
        </div>
      )} */}


      </div>{
        isDesktop ? <PricingBox
          classs={true}
          courseDetail={courseDetail}
          currency={currency}
          prices={prices}
          durationi={durationi}
          type={type}
          stream={stream}
          certificate={certificate}
          updatedCurrency={updatedCurrency}
          amount={prices.discountedPrice}
          course_id={course}
          course_type="video"
          coupon_code={validatedCouponCode}
        /> : <></>
      }


    </div>

  ) : (
    <div className="h-[50vh] w-full flex flex-row justify-center items-center">
      <LoaderIcon className="w-20 h-20" />
    </div>
  );
}
