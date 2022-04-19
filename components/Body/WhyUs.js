import { UsbRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div className="text-center lg:py-10 p-4 lg:px-40 gap-4">
      <div>
        <h1 className="text-3xl font-semibold">Why Choose Us?</h1>
        <p className="py-5 lg:pr-5">
          Scared of adapting to the new changes or worried about how to learn
          and pace with the digitally advanced society? Keep your worries aside
          as Infodal provides you with certified, digital, and pre-eminent best
          courses in the comfort of your home with practice exercises for the
          efficient value of the course. It is widely accessible for both
          individuals and digital companies in the vast market. Compiled
          together considering the need and use of the courses. We as one of the
          most renowned brands assure you to provide the best of the deals and
          courses on the virtual platform with all updated knowledge and
          applications at use.
        </p>

        <div className="lg:grid lg:grid-cols-2 gap-4">
          <ChoseUsSection
            heading=" Highly Trained Teachers"
            text="Infodal provides you with the best faculty and highly experiential
            trainers in all the domains of courses provided. With constant
            monitoring and help the trainers assure an aced learning of the
            user"
            image="/images/why/teacher.png"
          />
          <ChoseUsSection
            heading="Interactive Platform"
            text="With being virtual, Infodal ensures user-friendly interaction with the user in order to have a pre-dynamic interaction and platform."
            image="/images/why/interactive.png"
          />
          <ChoseUsSection
            heading="Your Go-to Platform"
            image="/images/why/goto.png"
            text="Name the course and its available here, ranging from basic to advanced all the needs of the individuals would be catered to at Infodal. We provide more than 1000+ courses, catering to the needs of all the individuals."
          />
          <ChoseUsSection
            heading="Budget-Friendly"
            image="/images/why/budget.png"
            text="With the vast courses available we ensure on providing budget-friendly courses in order to allow individuals to practice their interests and pursue their ambitions with Infodal."
          />
        </div>
      </div>
    </div>
  );
}

function ChoseUsSection({ heading, text, image }) {
  return (
    <div className="flex flex-col mt-5">
      <div className="relative h-[80vw] w-[80vw] lg:h-[20vh] lg:w-[20vh] m-auto">
        <Image src={image} alt="Why Infodal" layout="fill" />
      </div>
      <h1 className="text-purple-800 font-semibold text-lg">{heading}</h1>
      <p className="lg:pr-10">{text}</p>
    </div>
  );
}
