import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenresButton from "@/components/Filters/GenresButton";
import { settings } from "./../settings";
import { genres } from "@/data/filters";

const GenresSlider: FC = () => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 7,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {genres.map((item, i) => (
          <GenresButton key={i} size="big" genres={item.title} id={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default GenresSlider;
