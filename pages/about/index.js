import { LinkedIn } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbComponent from "../../components/Shared/BreadCrumbComponent";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Infodal</title>
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
        <BreadCrumbComponent>About Us</BreadCrumbComponent>
        <div className="flex flex-col justify-evenly m-auto lg:grid lg:grid-cols-2 lg:gap-4 p-4">
          <div className="relative w-[90vw] h-[90vw] lg:w-[20vw] lg:h-[20vw] m-auto">
            <Image
              src="/images/about/1.png"
              alt="about"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
          <div className="flex flex-col justify-around lg:h-[40vh] lg:w-3/4 mb-5 lg:m-0 text-center lg:text-left">
            <h1 className="text-3xl font-semibold my-5 lg:m-0">
              What do we do?
            </h1>
            <p>
              Scared of adapting to the new changes or worried about how to
              learn and pace with the digitally advanced society? Keep your
              worries aside as Infodal provides you with certified, digital, and
              pre-eminent best courses in the comfort of your home with practice
              exercises for the efficient value of the course. It is widely
              accessible for both individuals and digital companies in the vast
              market. Compiled together considering the need and use of the
              courses. We as one of the most renowned brands assure you to
              provide the best of the deals and courses on the virtual platform
              with all updated knowledge and applications at use.
            </p>
            <whatweOffer />
          </div>
        </div>
        <div className="flex flex-col justify-evenly m-auto lg:grid lg:grid-cols-2 lg:gap-4 p-4">
          <div className="relative w-[90vw] h-[90vw] lg:w-[20vw] lg:h-[20vw] m-auto">
            <Image
              src="/images/about/anchit.jpeg"
              alt="about"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl font-semibold my-5 lg:m-0">
              Founder & Managing Director
            </h1>
            <p className="text-xl">Mr Anchit Agarwal</p>
            <a href="https://www.linkedin.com/in/anchit-agarwal-18576b11a">
              <LinkedIn fontSize="large" />
            </a>
            <whatweOffer />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
