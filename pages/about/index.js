import Head from "next/head";
import React from "react";
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
      <div></div>
    </div>
  );
}
