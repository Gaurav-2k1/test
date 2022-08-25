import Head from "next/head";

import LandingScreen from "../components/Body/LandingScreen";

import Footer from "../components/Footer/Footer";
import Image from "next/image";

import Header from "../components/Header/Header";
import ActionButton from "../components/Shared/ActionButton";
import Partners from "../components/Body/Partners";
import LiveCourses from "../components/Body/LiveCourses";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infodal</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <div>
        <LandingScreen />

        <Partners />
        <LiveCourses />
        <ActionButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
