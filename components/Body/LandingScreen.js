import { Search } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LandingScreen() {
  return (
    <>
      <div className="w-full bg-[url('/images/bg.png')] bg-cover bg-center lg:bg-top h-[70vh]">
        <div className="flex flex-col h-1/2 justify-around">
          <h1 className=" font-bold text-4xl text-center lg:w-4/6 mx-auto">
            Global IT Training Provider for SAP, Oracle, Salesforce, AWS, Azure,
            more..
          </h1>
          <p className="text-blue-900 text-center p-4 bg-white bg-opacity-50">
            25000 Courses | 15000 Elite Tutors | Thousands of Students Trained
            worldwide!
          </p>
        </div>
        <div className="w-full lg:w-1/2 m-auto h-16 bg-white shadow flex flex-row justify-between">
          <input
            className="w-full focus:outline-none pl-5 bg-transparent"
            placeholder="Ex- Oracle, SAP, etc.."
          ></input>
          <IconButton className="p-2">
            <Search />
          </IconButton>
        </div>
        <div className="text-center mt-4 lg:w-1/2 m-auto">
          Blockchain | Business & CRM | Cloud Computing | Data Engineering |
          Data Science & ML | Design & Graphics | Digital Marketing & SEO |
          Google | IBM | Microsoft
        </div>
      </div>
      <div className="bg-blue-700 h-max w-full flex flex-col lg:flex-row justify-around lg:px-8 py-10">
        <Feature
          image="/images/why/self.png"
          title="Self Paced Video Courses"
          description="Learn at your own pace, with no pre-requisites."
        />
        <Feature
          image="/images/why/cloud.png"
          title="Cloud Server Access"
          description="Get Affordable Access to your Favourite Cloud Servers"
        />
        <Feature
          image="/images/why/tutor.png"
          title="Online Tutor Led Courses"
          description="Get your doubts solved by our experienced tutors."
        />
      </div>
      <div className="h-[50vh] w-full bg-[url('/images/why/discount.jpg')] bg-cover bg-center py-10">
        <h1 className="p-4 bg-white font-semibold w-fit text-3xl mb-3">
          Get 10% Off on your First Course
        </h1>
        <p className="p-4 bg-white w-fit text-xl mb-5 mx-3">
          Enter your email address below to receive your discount code.
        </p>
        <div className="w-full lg:w-1/2 m-auto h-16 bg-white shadow flex flex-row justify-between">
          <input
            className="w-full focus:outline-none pl-5 bg-transparent"
            placeholder="Enter your Email Address"
          ></input>
          <Button className="bg-blue-500 h-fit m-auto mr-3">Submit</Button>
        </div>
      </div>
    </>
  );
}

function Feature({ image, title, description }) {
  return (
    <div className="flex flex-row text-white text-2xl justify-start w-full">
      <div className="relative h-20 w-20 lg:h-[20vh] lg:w-[20vh]">
        <Image src={image} alt={title} layout="fill" />
      </div>
      <div className="flex flex-col justify-evenly">
        <h1 className="text-left">{title}</h1>
        <p className="text-left text-sm">{description}</p>
      </div>
    </div>
  );
}
