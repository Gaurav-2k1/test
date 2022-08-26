import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Partners() {
  return (
    <div>
      <div className="text-primary text-center text-base mt-4 w-full">
        OUR PARTNERS
      </div>

      <Carousel
        axis="horizontal"
        swipeable
        className="mt-6"
        dynamicHeight
        infiniteLoop
        autoPlay
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={30}
      >
        <div className="w-20 h-fit">
          <Image src={Logo} alt="Infodal Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Logo} alt="Infodal Logo" />
        </div>
        <div className="w-20 h-fit">
          <Image src={Logo} alt="Infodal Logo" />
        </div>
      </Carousel>
    </div>
  );
}
