import { QueryClientProvider } from "react-query";
import "../styles/globals.css";
import ThemeWrapper from "../wrappers/ThemeWrapper";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "../service/react-query";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import Layout from "../components/Shared/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}

        <ThemeWrapper>
          <Layout>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 4000,
                className: "z-50",
              }}
            />
            <Component {...pageProps} />
          </Layout>
        </ThemeWrapper>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
