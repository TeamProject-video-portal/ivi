import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";
type Props = {
  elem: any;
  count: number;
};
const Carousel: FC<Props> = ({ elem, count }) => {
  console.log(count);
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: count === 1 ? true : false, // дополнительные свойства
    slidesToShow: count === 1 ? 1 : 7,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(count)].map((_, i) => (
          <div key={i}>{elem}</div>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default Carousel;
