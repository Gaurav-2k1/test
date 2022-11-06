import { QueryClientProvider } from "react-query";
import "../styles/globals.css";
import ThemeWrapper from "../wrappers/ThemeWrapper";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/integration/react";
import queryClient from "../service/react-query";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "../store";
import Layout from "../components/Shared/Layout";
import ModalWrapper from "../components/Modals/ModalWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}

          <ThemeWrapper>
            <Layout>
              <ModalWrapper />
              <Toaster
                position="bottom-center"
                toastOptions={{
                  duration: 4000,
                }}
              />
              <Component {...pageProps} />
            </Layout>
          </ThemeWrapper>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default MyApp;
