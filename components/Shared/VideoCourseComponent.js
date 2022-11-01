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
      className={`w-[${width}] h-[38vh] bg-white pb-5 mx-3 mb-3 relative`}
      onClick={handlePageRoute}
    >
      <Image
        src={img}
        alt={name}
        layout="responsive"
        width={width}
        height="38vh"
        objectFit="cover"
        className="rounded"
      />
      {isSale && (
        <div className="absolute top-4 left-0 z-20 w-12">
          <Image src={SaleIcon} alt="Sale"></Image>
        </div>
      )}
      <div className="h-[38vh] bg-gradient-to-b from-secondary to-primary clip absolute bottom-0 left-0 right-0 rounded-md">
        <div className="absolute top-[16vh] left-3 z-50 text-sm text-white">
          <div className="font-semibold mb-3 break-words">{name}</div>
          <div className="pb-1">
            <CardDetail
              icon={<WatchLaterOutlinedIcon />}
              text={`${duration}h`}
            />
            <CardDetail
              icon={<RecordVoiceOverOutlinedIcon />}
              text={classType}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-lg pr-1">{`${currency} ${prices.discountedPrice}`}</p>
            <p className="text-sm line-through">{`${currency} ${prices.price}`}</p>
          </div>

          <div className="flex flex-row w-20 items-center mt-2">
            {[...Array(rating.stars)].map((x, i) => (
              <StarOutlinedIcon color="yellow" key={i} fontSize="small" />
            ))}
            {[...Array(5 - rating.stars)].map((x, i) => (
              <StarBorderOutlinedIcon color="yellow" key={i} fontSize="small" />
            ))}
            {`(${rating.reviews})`}
          </div>
        </div>
        <div className="absolute bottom-0 z-50 w-full h-[5vh] flex flex-col justify-evenly ">
          <Divider color="white" />
          <p className="text-white text-center">View Course</p>
        </div>
      </div>
    </div>
  );
}

export function CardDetail({ icon, text }) {
  return (
    <div className="grid grid-cols-9 gap-1 text-white align-center justify-between">
      {icon}
      <div className="ml-2 col-span-8">{text}</div>
    </div>
  );
}
