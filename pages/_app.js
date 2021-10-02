import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>nuMETRICA</title>
        <meta
          name="Description"
          content="Turn feedbacks
into excellent products"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
