import React from "react";
import Image from "next/image";
import Udemy from "../../public//images/home/partners/udemy.png";
import Reed from "../../public//images/home/partners/reed.png";
import Liamoon from "../../public//images/home/partners/liamoon.png";
import Unisnacks from "../../public//images/home/partners/unisnacks.png";
import UrbanPro from "../../public//images/home/partners/up.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Partners() {
  return (
    <div>
      <div className="text-primary text-center text-base mt-4 w-full font-bold">
        OUR PARTNERS
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
          <Image src={Udemy} alt="Udemy Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Reed} alt="Reed Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Liamoon} alt="Liamoon Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Unisnacks} alt="Liamoon Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={UrbanPro} alt="Liamoon Logo" />
        </div>
      </Carousel>
    </div>
  );
}
