import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "../settings";
type Props = {
  title: string;
};
const SimpleSlider: FC<Props> = (props) => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    // centerMode: count === 1 ? true : false, // дополнительные свойства
    slidesToShow: 7,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{props.title}</h4>
        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
      </div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((_, i) => (
          <Poster />
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SimpleSlider;
