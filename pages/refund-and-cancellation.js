import React from "react";
import classes from "../styles/pages/refunds.module.scss";

export default function RefundAndCancellation() {
  return (
    <div>
      <div className="p-4 lg:px-40">
        <h1 className="text-2xl font-semibold">
          Refund and Cancellation Policy
        </h1>
        <h2 className={classes.subheading}>Overview</h2>
        <p className={classes.paragraph}>
          {
            'This website is operated by Infodal1 Trainings Pvt Ltd. Throughout the site, the terms "we", "us" and "our" refer to Infodal Trainings Pvt Ltd. Infodal Trainings Pvt Ltd offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here'
          }
        </p>
        <h2 className="text-black text-2xl mt-5 font-semibold">
          Refund & Cancellation
        </h2>
        <p className={classes.paragraph}>
          Please refer to the refund policy below:
        </p>
        <h2 className={classes.subheading}>Instructor-led Online Course</h2>
        <ul className={classes.list}>
          <li>
            No Refund Policy - Live instructor-led course fees is
            non-refundable.
          </li>
        </ul>
        <h2 className={classes.subheading}>Video Course</h2>
        <ul className={classes.list}>
          <li>
            Following the guidelines outlined in the Swap and Wallet Refund
            Policy, no cash refunds will be issued after a video course has been
            paid for in full. Within seven days after the date of purchase,
            however, you can request either a course switch or a credit in your
            INFODAL wallet (in the form of a coupon). Before you buy the course,
            we kindly ask that you watch the introduction video first or get in
            touch with our support team if you have any questions about the
            content of the course.
          </li>
        </ul>
      </div>
    </div>
  );
}
