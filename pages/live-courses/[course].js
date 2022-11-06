import { useRouter } from "next/router";
import React, { useEffect } from "react";
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
import { Button } from "@mui/material";
import useIsAuthenticated from "../../components/Hooks/useIsAuthenticated";
import { setSignUpToggle } from "../../store/modalSlice";
import { createOrder, verifyIfOrderExists } from "../../service/payment";

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

  var paymentData = useQuery(
    ["create-order", course, "live", currency],
    createOrder,
    { refetchOnWindowFocus: false, enabled: false }
  );

  var isExists = useQuery(
    ["verify-order-exists-live", course, "live"],
    verifyIfOrderExists,
    { retry: false, refetchOnWindowFocus: true }
  );

  const isLoadingPayment = paymentData.isFetching || paymentData.isLoading;

  const handlePay = async () => {
    if (isAuthenticated) {
      await paymentData.refetch();
    } else {
      dispatch(setSignUpToggle(true));
    }
  };

  useEffect(() => {
    paymentData.isFetchedAfterMount &&
      router.push(
        `/pay?orderId=${paymentData.data.order_token}&id=${paymentData.data.order_id}`
      );
  }, [paymentData.isFetchedAfterMount]);

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
              .small
          )
            ? courseDetail.data.attributes.courseImage.data.attributes.url
            : courseDetail.data.attributes.courseImage.data.attributes.formats
                .small.url
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
      <div className="flex flex-row w-full justify-center">
        {isAuthenticated &&
        isExists.isFetchedAfterMount &&
        isExists.data &&
        isExists.data.purchased ? (
          <div className="text-sm p-4">
            You have already purchased this course, please check your email for
            further details
          </div>
        ) : (
          <Button
            className="bg-primary my-4 text-white w-[90vw]"
            onClick={handlePay}
            disabled={isLoadingPayment}
          >
            {!isLoadingPayment ? "Pay" : "Fetching Payment Details.."}
          </Button>
        )}
      </div>
    </div>
  ) : (
    <div className="h-[50vh] w-full flex flex-row justify-center items-center">
      <LoaderIcon className="w-20 h-20" />
    </div>
  );
}
