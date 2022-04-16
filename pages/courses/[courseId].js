import { Button, Divider, TextareaAutosize } from "@mui/material";
import { isNil } from "lodash";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbComponent from "../../components/Shared/BreadCrumbComponent";
import { fetchLiveCourseDetail } from "../../service/live";

export default function CourseDetail() {
  const router = useRouter();
  const { courseId } = router.query;

  const course = useQuery(["courseDetail", courseId], fetchLiveCourseDetail);

  if (isNil(course) || course.isLoading || course.isError) return null;
  const courseDetail = course.data.data.result;

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/courses/${courseId}`
    );
    toast.success("Link copied to clipboard");
  };

  return (
    <div>
      <Head>
        <title>Course Detail</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>
      <BreadCrumbComponent>Course/{courseDetail.name}</BreadCrumbComponent>
      <div className="p-4 lg:p-10">
        <div className="relative w-full lg:w-[60vw] h-max m-auto">
          <Image
            src={`https://infodal.blob.core.windows.net/${
              process.env.NODE_ENV === "development" ? "dev" : "prod"
            }/${courseDetail.image}`}
            alt={courseDetail.name}
            width="100%"
            height="60%"
            layout="responsive"
            objectFit="fill"
          />
        </div>
        <div className="lg:grid lg:grid-cols-4 gap-4 lg:px-32 py-10">
          <div className="lg:col-span-3 whitespace-pre-wrap text-justify mb-10 lg:mb-0">
            {courseDetail.description}
          </div>
          <div>
            <div className="bg-slate-300 w-full h-1/3 flex flex-col p-4 mb-3 justify-around">
              <h1 className="text-black font-semibold">
                Price: £ {courseDetail.fee}
              </h1>
              <Divider />
              <h1 className="text-black font-semibold">
                Duration: {courseDetail.duration} Hours
              </h1>
              <Divider />
              <Button>Buy Now</Button>
            </div>
            <div className="bg-purple-300 w-full h-fit flex flex-col p-4 mb-3">
              <h1 className="text-black font-semibold text-2xl mb-5">
                Share Course
              </h1>

              <Button className="bg-blue-800" onClick={copyLinkHandler}>
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
