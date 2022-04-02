import "../styles/globals.css";
import ThemeWrapper from "../wrappers/ThemeWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
