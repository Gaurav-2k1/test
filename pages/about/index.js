import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
        <div className="bg-purple-300 h-[15vh] lg:h-[20vh]">
          <h1 className="text-center text-2xl font-lg flex justify-center items-center h-full">
            About Us
          </h1>
        </div>
        <div className="flex flex-col justify-evenly m-auto lg:grid lg:grid-cols-2 lg:gap-4 p-4">
          <div className="relative w-[80vw] h-[80vw] lg:w-[20vw] lg:h-[20vw] m-auto">
            <Image
              src="/logo.png"
              alt="logo"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
          <div className="flex flex-col justify-around lg:h-[30vh] lg:w-3/4 mb-5 lg:m-0 text-center lg:text-left">
            <h1 className="text-3xl font-semibold mb-5 lg:m-0">
              What do we do?
            </h1>
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and type of
              setting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer too
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries. It has survived not only
              five centuries, but also the leap into the electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets of containing Lorem Ipsum
              passages.`}
            </p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
