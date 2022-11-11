import { isEmpty, isUndefined } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { updateStatus } from "../../service/payment";

export default function Pay() {
  const router = useRouter();
  const { orderId, id } = router.query;
  const [orderResponse, setResponse] = useState({});
  var paymentData = useQuery(
    ["update-order", id, orderResponse],
    updateStatus,
    { refetchOnWindowFocus: false, enabled: false }
  );

  useEffect(() => {
    console.log(isEmpty(orderResponse));
    if (!isEmpty(orderResponse)) {
      console.log("chala");
      console.log(orderResponse);
      paymentData.refetch();
    }
  }, [orderResponse]);

  useEffect(() => {
    if (typeof window !== "undefined" && !isUndefined(orderId)) {
      // your code with access to window or document object here
    }
  }, [orderId, router]);

  return <div className="h-full w-full" id="drop_in_container"></div>;
}
