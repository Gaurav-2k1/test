import React from "react";
import BusinessForm from "../../components/Forms/BusinessForm";
import HeadImageWithText from "../../components/Shared/HeadImageWithText";

export default function Business() {
  return (
    <div>
      <HeadImageWithText
        src="bg-[url(/images/business/infodal-business.png)]"
        className="flex flex-col justify-center p-5 text-white"
      >
        <p className="text-lg font-semibold">Infodal For Business</p>
        <div className="pt-5 w-full h-full">
          <div className="z-20 text-center text-justify">
            Infodal For Business is a customized training solution for colleges
            & universities, recruitment agencies, small & medium businesses, and
            large corporations. Infodal provides high-quality training across
            all technology domains. The training is conducted in two different
            formats
          </div>
          <p>a) Online Instructor-led classes</p>
          <p>b) Self-paced video courses</p>
        </div>
      </HeadImageWithText>
      <BusinessForm />
    </div>
  );
}
