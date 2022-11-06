import { cashfreeSandbox } from "cashfree-dropjs";
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
    let testCashfree = new cashfreeSandbox.Cashfree();
    if (typeof window !== "undefined" && !isUndefined(orderId)) {
      // your code with access to window or document object here
      let parent = document.getElementById("drop_in_container");

      testCashfree.initialiseDropin(parent, {
        components: [
          "order-details",
          "card",
          "netbanking",
          "app",
          "upi",
          "paylater",
          "creditcardemi",
          "cardlessemi",
        ],
        orderToken: orderId,

        onSuccess: async function (data) {
          //on payment flow complete
          console.log(data);

          setResponse(data);
          router.back();
        },
        onFailure: function (data) {
          setResponse(data);
          router.back();
          //on failure during payment initiation
        },
        style: {
          backgroundColor: "#ffffff",
          color: "#11385b",
          fontFamily: "Lato",
          fontSize: "14px",
          errorColor: "#ff0000",
          theme: "light", //(or dark)
        },
      });
    }
  }, [orderId, router]);

  return <div className="h-full w-full" id="drop_in_container"></div>;
}
