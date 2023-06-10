import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import { useTranslation } from "next-export-i18n";
import { FC, useEffect, useState } from "react";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import main_banner from "@/data/Main_banner.json";
import { ISimpleMovie, MoviesForSlidersOnHomePageT } from "@/types/types";
import { connect, useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/Redux/store";
import { DATA_BANNER } from "@/Redux/banner/action-types";
import { selectBanner } from "@/Redux/banner/selectors";
import { RootState } from "@/Redux/RootState";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import { Loader } from "@/components/Loader";
import styles from "./Home.module.scss";
import { getDataBanner } from "@/Redux/banner/actions";
import { getDataHomePage } from "@/Redux/homePage/actions";
import SliderTopTen from "@/components/Sliders/SliderTopTen";
const inter = Inter({ subsets: ["latin"] });
type Props = {
  startMovies: any;
  error: any;
};

const Home: FC<Props> = (context: any) => {
  // const [data, setData] = useState(startMovies);
  const dataBanner = useSelector(selectBanner);
  const { t } = useTranslation();
  const put = useDispatch();
  const moviesForSliders: MoviesForSlidersOnHomePageT = useSelector(
    (store: RootState) => store.homePage
  );
  const [isLoading, setIsLoading] = useState(false);
  const res = main_banner;

  useEffect(() => {
    try {
      put(getDataBanner(res));
      put(getDataHomePage());
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>IVI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <Banner movies={dataBanner.data} />
      <SliderContinueBrowsing
        title={t("sliders_title.continue_browsing")}
        type={"summary"}
      />

      <SliderTopTen />
      {isLoading && <Loader type="loading_page" />}
      <SimpleSlider
        title={t("sliders_title.best_films")}
        films={moviesForSliders.bestFilmsSet as ISimpleMovie[]}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <SimpleSlider
        title={t("sliders_title.family_comedies")}
        films={moviesForSliders.familyFriendlyComediesSet as ISimpleMovie[]}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <SimpleSlider
        title={t("sliders_title.best_fantasy_films")}
        films={moviesForSliders.bestFantasyFilmsSet as ISimpleMovie[]}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};
export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    return { props: {} };
  }
);
export default connect((state) => state)(Home);
