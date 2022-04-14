import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Servers() {
  return (
    <div>
      <Head>
        <title>Servers</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
