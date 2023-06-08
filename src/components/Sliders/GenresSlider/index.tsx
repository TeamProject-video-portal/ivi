import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenresButton from "@/components/Filters/GenresButton";
import { settings } from "./../settings";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { genresIcons } from "@/data/filters";
import { setGenres } from "@/Redux/filter/actions";
import { useRouter } from "next/router";

const GenresSlider: FC = () => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 7,
  };

  const { genresRu, genresEn } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const genres = lang === "en" ? genresEn : genresRu;

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {genres.map((item, i) => {
          const findItem = genresIcons.find((elem) => elem.title === item.name);
          //console.log(findItem?.title, item);
          return (
            <GenresButton
              key={item.id}
              size="big"
              genres={item.name}
              id={findItem?.id || 1}
              onClick={() => dispatch(setGenres(item.name))}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default GenresSlider;
