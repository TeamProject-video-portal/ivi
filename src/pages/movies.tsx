import Carousel from "@/components/Carousel";
import Head from "next/head";

const MoviesPage = () => {
  return (
    <>
      <Head>
        <title>Поиск фильмов</title>
      </Head>
      <h1>Films</h1>
      <Carousel />
    </>
  );
};

export default MoviesPage;
