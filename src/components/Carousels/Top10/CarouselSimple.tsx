import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";
type Props = {};
const CarouselSimple: FC<Props> = ({}) => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    // centerMode: count === 1 ? true : false, // дополнительные свойства
    slidesToShow: 7,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((_, i) => (
          <Poster />
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default CarouselSimple;
