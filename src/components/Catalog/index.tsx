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
    <div className={styles.Catalog}>
      <button ref={navPrevButton} className={styles.prev_button}>
        <IconContext.Provider
          value={{
            className: `${styles.prev}`,
            color: "blue",
          }}
        >
          <GrPrevious />
        </IconContext.Provider>
      </button>

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
      >
        <IconContext.Provider
          value={{
            className: `${styles.next}`,
          }}
        >
          <GrNext />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Catalog;
