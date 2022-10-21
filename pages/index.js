import Head from "next/head";

import LandingScreen from "../components/Body/LandingScreen";

import Footer from "../components/Footer/Footer";
import Image from "next/image";

import Header from "../components/Header/Header";
import ActionButton from "../components/Shared/ActionButton";
import Partners from "../components/Body/Partners";
import LiveCourses from "../components/Body/LiveCourses";
import VideoCourses from "../components/Body/VideoCourses";
import WhyChose from "../components/Body/WhyChose";
import BecomeInstructor from "../components/Body/BecomeInstructor";
import InstructorForm from "../components/Body/InstructorForm";

export default function Home() {
  return (
    <div>
      <LandingScreen />
      <WhyChose />
      <Partners />
      <LiveCourses />
      <VideoCourses />
      <BecomeInstructor />
      <InstructorForm />
    </div>
  );
}
