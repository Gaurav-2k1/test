import Head from "next/head";
import AvailableServers from "../components/Body/AvailableServers";
import LandingScreen from "../components/Body/LandingScreen";
import PopularCourses from "../components/Body/PopularCourses";
import WhyUs from "../components/Body/WhyUs";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

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
        <div className="fixed bottom-5 left-5">
          <a
            href="https://api.whatsapp.com/send?phone=919302584342&text=Hey%2C%20I%20wanted%20to%20connect%20regarding%20Courses%20on%20Infodal%20Website"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/images/logo/whatsapp logo.png"
              alt="Chat with us over Whatsapp for any assitance"
              width="50"
              height="50"
            />
          </a>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
