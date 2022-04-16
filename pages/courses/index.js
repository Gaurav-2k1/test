import { Button, TextField } from "@mui/material";
import { isNil } from "lodash";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbComponent from "../../components/Shared/BreadCrumbComponent";
import { fetchLiveCourses } from "../../service/live";

export default function Courses() {
  const courses = useQuery("courses", fetchLiveCourses);

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
          {!isNil(courses) &&
            !courses.isLoading &&
            !courses.isError &&
            courses.data.data.result.map((course) => (
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
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/courses/${course._id}`);
  };
  return (
    <div className="p-4 border-2 rounded-sm mb-4 border-purple-800 h-auto flex flex-col justify-between">
      <div className="relative w-auto h-max">
        <Image
          src={`https://infodal.blob.core.windows.net/${
            process.env.NODE_ENV === "development" ? "dev" : "prod"
          }/${course.image}`}
          alt={course.name}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="fill"
        />
      </div>
      <h1 className="font-semibold text-2xl">{course.name}</h1>
      <p>{course.shortDescription}</p>
      <div className="flex flex-row justify-between h-[10vh]">
        <div className="w-1/3 h-1/3 rounded-full bg-blue-400 m-auto">
          <p className="text-center text-white">{course.duration} Hours</p>
        </div>
        <div className="w-1/3 h-1/3 rounded-full bg-blue-400 m-auto">
          <p className="text-center text-white">£ {course.fee}</p>
        </div>
      </div>
      <Button className="bg-blue-800 m-auto w-full" onClick={onClickHandler}>
        View More
      </Button>
    </div>
  );
};
