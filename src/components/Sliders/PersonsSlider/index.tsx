import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenresButton from "@/components/Filters/GenresButton";
import { settings } from "./../settings";
import { IPerson } from "@/types/types";
import PosterPerson from "@/components/PosterPerson";
import { useAppSelector } from "@/hooks/hooks";
import { selectPersons } from "@/Redux/persons/selectors";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";

const PersonsSlider: FC = () => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 7,
  };

  const { actors } = useAppSelector(selectPersons);
  const { popularActors } = useAppSelector(selectPersons);
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";

  return (
    <div>
      {!popularActors ? (
        <Loader className={styles.loading_simple} />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {popularActors.map((item, i) => (
            <PosterPerson key={i} person={item} lang={lang} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PersonsSlider;
