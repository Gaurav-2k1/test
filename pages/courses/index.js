import { Button, TextField } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbComponent from "../../components/Shared/BreadCrumbComponent";
import { coursesList } from "../../config/config";

export default function Courses() {
  return (
    <div>
      <Head>
        <title>All Courses</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>
      <BreadCrumbComponent>Courses</BreadCrumbComponent>
      <div className="lg:px-12 px-8">
        <div className="w-full h-40 lg:h-auto py-8 flex lg:flex-row flex-col justify-evenly">
          <TextField
            className="lg:w-3/4"
            placeholder="Search Courses"
          ></TextField>
          <Button className="bg-purple-900">Search</Button>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-4">
          {coursesList.map((course) => (
            <CourseTile key={course.name} course={course} />
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const CourseTile = ({ course }) => {
  return (
    <div className="p-4 border-2 rounded-sm mb-4 border-purple-800 h-[60vh] flex flex-col justify-between">
      <img src={course.image} alt={course.name} className="m-auto" />
      <h1 className="font-semibold text-2xl">{course.name}</h1>
      <p>{course.shortDescription}</p>
      <div className="flex flex-row justify-between h-[10vh]">
        <div className="w-1/3 h-1/3 rounded-full bg-blue-400 m-auto">
          <p className="text-center text-white">{course.duration}</p>
        </div>
        <div className="w-1/3 h-1/3 rounded-full bg-blue-400 m-auto">
          <p className="text-center text-white">{course.fee}</p>
        </div>
      </div>
      <Button className="bg-purple-800 m-auto w-full">Buy Now</Button>
    </div>
  );
};
