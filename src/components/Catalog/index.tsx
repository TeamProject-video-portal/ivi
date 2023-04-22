import React, { FC, useRef, useState } from "react";
import Poster from "../Poster";
import styles from "./index.module.scss";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IconContext } from "react-icons";

SwiperCore.use([Navigation]);

const Catalog: FC = () => {
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (
      typeof Swiper.params.navigation !== "boolean" &&
      Swiper.params.navigation !== undefined
    ) {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navPrevButton.current;
      navigation.nextEl = navNextButton.current;
    }
  };
  const renderSlides = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    return arr.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <Poster />
        </SwiperSlide>
      );
    });
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сериалы-новинки</h4>
      <div className={styles.Catalog}>
        <button ref={navPrevButton} className={styles.prev_button}></button>

        <div className={styles.container}>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={1}
            onBeforeInit={onBeforeInit}
          >
            {renderSlides()}
          </Swiper>
        </div>
        <button
          ref={navNextButton}
          className={styles.next_button}
          onClick={() => console.log(123)}
        ></button>
      </div>
    </div>
  );
};
export default Catalog;
