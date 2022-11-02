import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ActionButton from "./ActionButton";

export default function Layout({ children }) {
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

      <body>
        {children}
        <ActionButton />
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/62875780b0d10b6f3e732f96/1g3garkem"
        />
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
