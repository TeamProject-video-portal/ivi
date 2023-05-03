import Layout from "@/components/Layout";
import { LanguageProvider } from "@/customProvider/LanguageProvider";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </LanguageProvider>
  );
}

export default appWithTranslation(App);
