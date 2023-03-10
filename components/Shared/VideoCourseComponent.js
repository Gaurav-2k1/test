import { Button, Divider } from "@mui/material";
import Image from "next/image";
import SaleIcon from "../../public/images/course/sale.png";
import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getCurrency } from "../../store/currencySlice";
import { getCurrencyAmounts } from "../../config/config";
import CourseComponentCardDetail from "./CourseComponentCardDetail";
export default function VideoCourseComponent({
  id,
  name,
  img,
  duration,
  classType,
  price,
  discountedPrice,
  rating,
  isSale,
  averageSalary,
  width,
  className,
}) {
  const router = useRouter();
  const currency = useSelector(getCurrency);
  const prices = getCurrencyAmounts(currency, price);
  console.log(prices);
  const handlePageRoute = () => {
    router.push(`/video-courses/${id}`);
  };

  return (
    <div
      className={`relative bg-slate-100 rounded-md w-[85vw] bg-white mx-3 h-[47vh] shadow ${width}`}
    >
      <div className="relative w-full h-1/2">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          objectPosition="top"
        />
        <div className="absolute right-0 bottom-0 flex flex-row px-1 mb-1 items-center text-white bg-secondary rounded">
          {rating.stars}
          <StarOutlinedIcon color="yellow" fontSize="small" />

          {`(${rating.reviews})`}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="font-semibold text-lg">{name}</div>
        <div>
          <CourseComponentCardDetail
            icon={<WatchLaterOutlinedIcon />}
            text={`${duration}h`}
          />
          <CourseComponentCardDetail
            icon={<RecordVoiceOverOutlinedIcon />}
            text={classType}
          />
          <div className="flex flex-row gap-1 items-center">
            <p className="text-lg pr-1">{`${currency} ${prices.discountedPrice}`}</p>
            <p className="text-sm line-through">{`${currency} ${prices.price}`}</p>
          </div>
        </div>
      </div>
      <div className="px-4 w-full absolute bottom-2">
        <p
          className="text-white bg-secondary py-1 text-center border-2 rounded-lg border-secondary hover:bg-primary hover:text-white hover:cursor-pointer"
          onClick={handlePageRoute}
        >
          View Course
        </p>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className="relative w-[85vw] md:w-[22vw] cursor-pointer bg-white mx-3 h-[35vh] md:h-[42vh]"
  //     onClick={handlePageRoute}
  //   >
  //     <div className="relative w-full h-1/2">
  //       <Image
  //         src={img}
  //         alt={name}
  //         layout="fill"
  //         objectFit="cover"
  //         objectPosition="top"
  //         className="rounded"
  //       />
  //     </div>
  //     {isSale && (
  //       <div className="absolute top-4 left-0 z-20 w-12">
  //         <Image src={SaleIcon} alt="Sale"></Image>
  //       </div>
  //     )}
  //     <div className="absolute h-full bg-gradient-to-b from-secondary to-primary clip bottom-0 left-0 right-0 rounded-md">
  //       <div className="flex flex-col-reverse h-full gap-1 md:gap-1 z-30 text-sm text-white">
  //         <div className="z-50 w-full h-8 hover:cursor-pointer">
  //           <Divider color="white" />
  //           <p className="text-white text-center">View Course</p>
  //         </div>

  //         <div className="flex flex-row w-20 items-center pl-2">
  //           {[...Array(rating.stars)].map((x, i) => (
  //             <StarOutlinedIcon color="yellow" key={i} fontSize="small" />
  //           ))}
  //           {[...Array(5 - rating.stars)].map((x, i) => (
  //             <StarBorderOutlinedIcon color="yellow" key={i} fontSize="small" />
  //           ))}
  //           {`(${rating.reviews})`}
  //         </div>
  //         <div className="flex flex-row gap-1 items-center pl-2">
  //           <p className="text-lg pr-1">{`${currency} ${prices.discountedPrice}`}</p>
  //           <p className="text-sm line-through">{`${currency} ${prices.price}`}</p>
  //         </div>

  //         <div className="pl-2">
  //           <CardDetail
  //             icon={<WatchLaterOutlinedIcon />}
  //             text={`${duration}h`}
  //           />
  //           <CardDetail
  //             icon={<RecordVoiceOverOutlinedIcon />}
  //             text={classType}
  //           />
  //         </div>

  //         <div className="font-semibold truncate pl-2">{name}</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
