import { QueryClientProvider } from "react-query";
import "../styles/globals.css";
import ThemeWrapper from "../wrappers/ThemeWrapper";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "../service/react-query";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      <ThemeWrapper>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            className: "toast",
          }}
        />
        <Component {...pageProps} />
      </ThemeWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
