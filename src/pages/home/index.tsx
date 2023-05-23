import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import { useTranslation } from "next-export-i18n";
import { FC } from "react";
import { useRouter } from "next/router";
import SliderTopTen from "@/components/Sliders/SliderTopTen";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import Ad from "@/components/Header/DesktopMenu/SubMenu/Ad";
import dataFilms from "@/data/Search_films_v2.json";
import movieData from "@/data/One_film_response_v2.json";
import { GetStaticProps } from "next";
import { ISimpleMovie, IMovie } from "@/types/types";

const inter = Inter({ subsets: ["latin"] });
// {params: {lang}}:{
// params: { lang: Locale }
// }
const Home: FC = () => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>IVI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <SliderContinueBrowsing
        title={t("sliders_title.continue_browsing")}
        type={"summary"}
      />
      <SliderTopTen films={dataFilms as ISimpleMovie[]} />

      <SimpleSlider
        title={t("sliders_title.modern_cartoons")}
        films={dataFilms as ISimpleMovie[]}
      />
    </>
  );
};

export default Home;
