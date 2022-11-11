import Image from "next/image";
import Logo from "../../public/logo.png";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-secondary pb-10">
      <div className="w-20 h-fit my-5">
        <Image src={Logo} alt="Infodal Logo" />
      </div>
      <p className="text-center text-white w-2/3 mb-3">
        Address: H-749 DIV Tech park, Republic of Whitefield, Bangalore - 560066
        <br />
        <a href="tel:+44 7454 666010">+44 7454 666010</a>
        <br />
        <a href="tel:+91 9302584342">+91 93025 84342</a>
        <br />
        <a href="mailto:contact@infodal.com">contact@infodal.com</a>
      </p>
      <div className="flex flex-row justify-evenly w-1/2">
        <FacebookOutlinedIcon color="primary" fontSize="medium" />
        <YouTubeIcon color="primary" fontSize="medium" />
        <TwitterIcon color="primary" fontSize="medium" />
        <InstagramIcon color="primary" fontSize="medium" />
      </div>
      <Divider
        orientation="horizontal"
        className="w-[90vw] z-50 bg-white my-4"
      />
      <div className="text-left text-white w-[90vw]">
        <p className="text-lg font-semibold">Company</p>
        <div className="flex flex-col justify-between mt-3">
          <Link href="/about" passHref>
            About Us
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="request-a-course" passHref>
            Request a Course
          </Link>
          <Link href="/refund-and-cancellation">Refund and Cancellation</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="https://merchant.razorpay.com/policy/KeEJbH2eaH8gm4/shipping">
            Shipping & Delivery policy
          </Link>
        </div>
      </div>
      <Divider
        orientation="horizontal"
        className="w-[90vw] z-50 bg-white my-4"
      />
      <div className="text-left text-white w-[90vw]">
        <p className="text-lg font-semibold">Trending Courses</p>
        <div className="flex flex-col justify-between mt-3">
          <p>Data Science</p>
          <p>Machine Learning</p>
          <p>AWS Certified Solutions Architect Certification</p>
          <p>DevOps Training</p>
        </div>
      </div>
      <Divider
        orientation="horizontal"
        className="w-[90vw] z-50 bg-white my-4"
      />
      <p className="text-white p-4 text-xs text-center">
        © 2022 Infodal. All Rights Reserved. The certification names are the
        trademarks of their respective owners.
      </p>
    </div>
  );
}
