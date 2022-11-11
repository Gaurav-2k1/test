import React from "react";
import Image from "next/image";
import AWS from "../../public//images/home/labs/1.png";
import AZURE from "../../public//images/home/labs/2.png";
import GCP from "../../public//images/home/labs/3.png";
import LINUX from "../../public//images/home/labs/4.png";
import SF from "../../public//images/home/labs/5.png";
import DEVOPS from "../../public//images/home/labs/6.png";
import SEC from "../../public//images/home/labs/7.png";
import K8S from "../../public//images/home/labs/8.png";
import TF from "../../public//images/home/labs/9.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Partners() {
  return (
    <div>
      <div className="text-primary text-center text-base mt-4 w-full font-bold px-2">
        Unlimited Access to 250+ Courses and 1800+ hands on labs
      </div>

      <Carousel
        axis="horizontal"
        swipeable
        className="mt-6"
        infiniteLoop
        autoPlay
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={30}
      >
        <div className="w-20 h-fit">
          <Image src={AWS} alt="AWS Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={AZURE} alt="Azure Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={GCP} alt="GCP Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={LINUX} alt="Linux Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={SF} alt="SF Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={DEVOPS} alt="Devops Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={SEC} alt="SEC Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={K8S} alt="K8s Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={TF} alt="Tensorflow Logo" />
        </div>
      </Carousel>
    </div>
  );
}
