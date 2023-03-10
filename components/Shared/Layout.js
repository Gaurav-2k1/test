import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WhatsappLogo from "../../public/whatsapp.png";
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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <Script id="ms_clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ejduxsdgl0");`}
      </Script>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/25912002.js"
      />
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-27Y62T04VX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27Y62T04VX');`}
        </Script>

        {children}
        <div id="payment-form"></div>

        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/62875780b0d10b6f3e732f96/1g3garkem"
        />
        <div className="fixed w-16 h-16 z-50 left-4 bottom-4">
          <Image
            src={WhatsappLogo}
            alt="Connect on Whatsapp"
            objectFit="contain"
            onClick={() => {
              window.open(
                "https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F"
              );
            }}
          />
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
