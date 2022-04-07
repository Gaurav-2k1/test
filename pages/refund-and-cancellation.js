import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import classes from "../styles/pages/refunds.module.scss";

export default function RefundAndCancellation() {
  return (
    <div>
      <Head>
        <title>Infodal</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>

      <div className="p-4 lg:px-40">
        <h1 className="text-2xl font-semibold">
          Refund and Cancellation Policy
        </h1>
        <h2 className={classes.subheading}>Overview</h2>
        <p className={classes.paragraph}>
          {
            'This website is operated by Infodal Trainings Pvt Ltd. Throughout the site, the terms "we", "us" and "our" refer to Infodal Trainings Pvt Ltd. Infodal Trainings Pvt Ltd offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here'
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
            Refund Policy - Once a video course has been purchased, we will
            issue a refund into the back account provided, only within 7 days
            from the date of purchase,. Kindly watch the preview video of the
            course you want to purchase or talk to our team if you have any
            queries before buying the course.
          </li>
        </ul>
      </div>
    </div>
  );
}
