import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  BASE_URL,
  DEPLOYMENT_URL,
  razorpay_key_id,
} from "../../constants/constants";
import { createOrder, verifyIfOrderExists } from "../../service/payment";
import { getUserDetails } from "../../store/authSlice";
import { getCurrency } from "../../store/currencySlice";
import { setSignUpToggle } from "../../store/modalSlice";
import useIsAuthenticated from "../Hooks/useIsAuthenticated";

export default function PayButton({
  amount,
  course_id,
  course_type,
  coupon_code,
  primary
}) {
  const [orderDetails, setOrderDetails] = useState({
    order_token: "",
    order_id: "",
  });
  const currency = useSelector(getCurrency);
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserDetails);
  var paymentData = useQuery(
    ["create-order", course_id, course_type, currency, coupon_code],
    createOrder,
    { refetchOnWindowFocus: false, enabled: false }
  );

  const handlePayButtonClick = async (e) => {
    if (isAuthenticated) {
      await paymentData.refetch();
      e.target.form.submit();
    } else {
      dispatch(setSignUpToggle(true));
    }
  };

  var isExists = useQuery(
    [`verify-order-exists-${course_type}`, course_id, course_type],
    verifyIfOrderExists,
    { retry: false, enabled: false }
  );

  useEffect(() => {
    if (paymentData.isFetchedAfterMount) {
      setOrderDetails(paymentData.data);
    }
    isAuthenticated && isExists.refetch();
  }, [paymentData.isFetchedAfterMount]);

  const isLoadingPayment = paymentData.isFetching || paymentData.isLoading;

  const getCancelUrl = () => {
    switch (course_type) {
      case "live":
        return `live-courses/${course_id}`;
      case "video":
        return `video-courses/${course_id}`;
    }
  };
  return (
    <div className="h-full w-full flex flex-row justify-center">
      <form
        method="POST"
        action="https://api.razorpay.com/v1/checkout/embedded"
      >
        <input type="hidden" name="key_id" value={razorpay_key_id} />
        <input type="hidden" name="amount" value={Math.floor(amount * 100)} />
        <input type="hidden" name="order_id" value={orderDetails.order_token} />
        <input type="hidden" name="name" value="Infodal6 Trainings" />
        <input
          type="hidden"
          name="description"
          value="World's No.1 Professsional Training Platform"
        />
        <input
          type="hidden"
          name="image"
          value="https://infodal-ui-chandiwalaaadhar.vercel.app/logo.png"
        />

        <input type="hidden" name="prefill[email]" value={userDetails.email} />

        <input
          type="hidden"
          name="callback_url"
          value={`${BASE_URL}/payment/update`}
        />
        <input
          type="hidden"
          name="cancel_url"
          value={`${DEPLOYMENT_URL}/${getCancelUrl()}`}
        />
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
            className=
            {`  bg-white text-secondary 
                text-center p-2 my-2 font-semibold text-xl 
                border-solid border-black border-2 cursor-pointer
                hover:scale-105 transition-all ease-linear sm:p-2 sm:w-[60vw]`}
            onClick={handlePayButtonClick}
            disabled={isLoadingPayment}
          >
            {!isLoadingPayment ? "Buy Now" : "Fetching Payment Details.."}
          </Button>
        )}
      </form>
    </div>
  );
}
