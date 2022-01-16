
import "../css/index.css";
import 'react-quill/dist/quill.snow.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Head from "next/head";
import Layout from "@components/layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "context/store";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Head>
            <title>Notics</title>
            <meta
              name="Description"
              content="Turn feedbacks
into excellent products"
            />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
