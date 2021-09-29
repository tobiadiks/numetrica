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
          content="All productivity numbers in one container"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
