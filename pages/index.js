import Head from "next/head";
import AvailableServers from "../components/Body/AvailableServers";
import LandingScreen from "../components/Body/LandingScreen";
import PopularCourses from "../components/Body/PopularCourses";
import WhyUs from "../components/Body/WhyUs";

import Header from "../components/Header/Header";
import LiveCourse from "../components/LiveCourse";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infodal</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>
      <div>
        <LandingScreen />
        <AvailableServers />
        <PopularCourses />
        <WhyUs />
      </div>
    </div>
  );
}
