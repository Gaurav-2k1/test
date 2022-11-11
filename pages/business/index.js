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
        <p className="text-2xl font-semibold">Infodal For Business</p>
      </HeadImageWithText>
      <p className="p-5">
        INFODAL FOR BUSINESSES is an adaptable training solution that can be
        utilized by educational institutions such as colleges and universities,
        employment agencies, small and medium businesses, & large corporations.
        INFODAL offers high-standard training in all areas of the technology
        industry. The training by INFODAL is provided in two distinct formats:
        Live online classes led by an instructor Video lessons that students can
        watch at their own pace.
      </p>
      <p className="p-5">
        Please fill out the following form as it requires some of your details,
        or get in touch with us at contact@infodal.com to receive a quote that
        is tailored to your organizations specific needs.
      </p>
      <BusinessForm />
    </div>
  );
}
