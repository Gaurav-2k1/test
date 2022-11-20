import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { isUndefined } from "lodash";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { validateCoupon } from "../../service/payment";
import {
  getCurrency,
  setUpdatedCurrencyValue,
  setValidatedCouponCode,
} from "../../store/currencySlice";

export default function ValidateCoupon({ courseId, courseType }) {
  const [couponCode, setCouponCode] = useState("");
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency);
  const { data, refetch, isFetchedAfterMount, is } = useQuery(
    ["coupon", courseId, courseType, currency, couponCode],
    validateCoupon,
    { refetchOnWindowFocus: false, enabled: false, retry: false }
  );
  const handleApplyCoupon = () => {
    refetch();
  };
  useEffect(() => {
    if (isUndefined(data) && isFetchedAfterMount) {
      dispatch(setUpdatedCurrencyValue(undefined));
      dispatch(setValidatedCouponCode(undefined));
      toast.error("Invalid Coupon", { position: "top-center" });
    }
    if (!isUndefined(data) && isFetchedAfterMount) {
      dispatch(
        setUpdatedCurrencyValue(Math.round(data.finalPrice * 100) / 100)
      );
      dispatch(setValidatedCouponCode(couponCode));
      toast.success(
        `Coupon Applied, New Price is ${currency} ${
          Math.round(data.finalPrice * 100) / 100
        }`,
        { position: "top-center" }
      );
    }
  }, [isFetchedAfterMount]);

  return (
    <div className="flex flex-row items-center gap-4 mt-4 px-5 md:justify-center">
      <TextField
        placeholder="Enter Coupon Code"
        fullWidth
        className="md:w-1/3"
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <Button onClick={handleApplyCoupon}>Apply Coupon</Button>
    </div>
  );
}
