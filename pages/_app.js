import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import { AppContext } from "context/state";
import { useEffect, useState, useContext } from "react";

function MyApp({ Component, pageProps }) {
  const [user, updateUser] = useState({});
  function setUser({ accessToken, company }) {
    updateUser({ accessToken, company });
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user"));
    if (!user.company) {
      if (storage) {
        setUser({ ...storage });
      }
    }
  }, [user.company]);

  return (
    <AppContext.Provider value={{ state: { user, setUser } }}>
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
    </AppContext.Provider>
  );
}

export default MyApp;
