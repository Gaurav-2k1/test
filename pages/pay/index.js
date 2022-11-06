import { cashfreeSandbox } from "cashfree-dropjs";
import { isUndefined } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Pay() {
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    let testCashfree = new cashfreeSandbox.Cashfree();
    if (typeof window !== "undefined" && !isUndefined(orderId)) {
      // your code with access to window or document object here
      let parent = document.getElementById("drop_in_container");
      console.log(parent);
      // parent.innerHTML = "";

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

        onSuccess: function (data) {
          //on payment flow complete
          if (data.order && data.order.status == "PAID") {
            router.back();
          }
        },
        onFailure: function (data) {
          console.log(data);
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
