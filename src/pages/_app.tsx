import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default App;
