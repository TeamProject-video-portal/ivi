import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import PosterTopTen from "@/components/Carts/TopTen";

const CarouselTop10: FC = () => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 5,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((item, i) => (
          <PosterTopTen num={i + 1} />
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default CarouselTop10;
