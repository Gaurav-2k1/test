import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider } from "@mui/material";
import Link from "next/link";
import useIsDesktop from "../Hooks/useIsDesktop";
import Logo from "../Shared/Logo";

export default function Footer() {
  const isDesktop = useIsDesktop();
  return (
    <div>
      <div className="w-full flex flex-col items-center bg-secondary pb-10 md:grid md:grid-cols-4 md:p-10 md:items-start">
        <div className="flex flex-col items-center md:pl-10">
          <Logo />
          {!isDesktop && (
            <p className="text-center text-white w-2/3 mb-3">
              Address: H-749 DIV Tech park, Republic of Whitefield, Bangalore -
              560066
              <br />
              <div
                onClick={() => {
                  window.open(
                    "https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
                  );
                }}
              >
                +44 7454 666010
              </div>
              <br />
              <div
                onClick={() => {
                  window.open(
                    "https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
                  );
                }}
              >
                +91 93025 84342
              </div>
              <br />
              <a href="mailto:contact@infodal.com">contact@infodal.com</a>
            </p>
          )}

          <div className="flex flex-row justify-evenly w-1/2 md:justify-between md:w-max">
            <Link passHref href="https://facebook.com/Infodal-106882495314634">
              <a target="_blank" rel="noopener noreferrer">
                <FacebookOutlinedIcon color="primary" fontSize="medium" />
              </a>
            </Link>
            <Link
              passHref
              href="https://www.youtube.com/channel/UCIurBigscr4IRU55dXFgseg"
            >
              <a target="_blank" rel="noopener noreferrer">
                <YouTubeIcon color="primary" fontSize="medium" />
              </a>
            </Link>
            <Link
              passHref
              href="https://www.youtube.com/channel/UCIurBigscr4IRU55dXFgseg"
            >
              <a target="_blank" rel="noopener noreferrer">
                <TwitterIcon color="primary" fontSize="medium" />
              </a>
            </Link>
            <Link passHref href="https://www.instagram.com/infodal_/">
              <a target="_blank" rel="noopener noreferrer">
                <InstagramIcon color="primary" fontSize="medium" />
              </a>
            </Link>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="w-[90vw] z-50 bg-white my-4 md:hidden"
        />
        <div className="text-left text-white w-[90vw] md:w-auto">
          <p className="text-lg font-semibold">Company</p>
          <div className="flex flex-col justify-between mt-3">
            <Link href="/about" passHref>
              About Us/Contact Us
            </Link>
            {/* <Link href="/blog">Blog</Link> */}
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
          className="w-[90vw] z-50 bg-white my-4 md:hidden"
        />
        <div className="text-left text-white w-[90vw] md:w-auto">
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
          className="w-[90vw] z-50 bg-white my-4 md:hidden"
        />
        {isDesktop ? (
          <p className="text-center text-white w-2/3 mb-3 md:w-auto">
            <p className="text-lg font-semibold">Reach Out to Us</p>
            <br />
            <p>
              H-749 DIV Tech park, Republic of Whitefield, Bangalore - 560066
            </p>
            <br />
            <div
              onClick={() => {
                window.open(
                  "https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
                );
              }}
            >
              +44 7454 666010
            </div>
            <br />
            <div
              onClick={() => {
                window.open(
                  "https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
                );
              }}
            >
              +91 93025 84342
            </div>
            <br />
            <a href="mailto:contact@infodal.com">contact@infodal.com</a>
          </p>
        ) : (
          <p className="text-white p-4 text-xs text-center">
            © 2022 Infodal. All Rights Reserved. The certification names are the
            trademarks of their respective owners.
          </p>
        )}
      </div>
      {isDesktop && (
        <div className="bg-black text-white p-4">
          © 2022 Infodal. All Rights Reserved. The certification names are the
          trademarks of their respective owners.
        </div>
      )}
    </div>
  );
}
