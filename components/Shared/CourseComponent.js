import { Button, Divider } from "@mui/material";
import Image from "next/image";
import SaleIcon from "../../public/images/course/sale.png";
import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import { useRouter } from "next/router";
export default function CourseComponent({
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
  isLiveCourse,
}) {
  const router = useRouter();
  const handlePageRoute = () => {
    isLiveCourse
      ? router.push(`/live-courses/${id}`)
      : router.push(`/video-courses/${id}`);
  };
  return (
    <div
      className="w-[70vw] h-[38vh] bg-white pb-5 mb-5 mx-3 relative"
      onClick={handlePageRoute}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-full w-[70vw] rounded-md"
      />
      {isSale && (
        <div className="absolute top-4 left-0 z-30 w-12">
          <Image src={SaleIcon} alt="Sale"></Image>
        </div>
      )}
      <div className="h-[38vh] bg-gradient-to-b from-secondary to-primary clip absolute bottom-0 left-0 right-0 rounded-md">
        <div className="absolute top-[16vh] left-3 z-50 text-sm text-white">
          <div className="font-semibold mb-3 break-words">{name}</div>
          {duration && classType ? (
            <div>
              <CardDetail
                icon={<WatchLaterOutlinedIcon />}
                text={`${duration}h`}
              />
              <CardDetail
                icon={<RecordVoiceOverOutlinedIcon />}
                text={classType}
              />
            </div>
          ) : (
            <div className="flex flex-row w-12 items-center">
              <p className="text-lg pr-1">₹{discountedPrice}</p>
              <p className="text-sm line-through">₹{price}</p>
            </div>
          )}
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
