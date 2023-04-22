import React, { FC, useEffect, useRef, useState } from "react";
import Poster from "../../Poster";
import styles from "./index.module.scss";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons/lib";

SwiperCore.use([Navigation]);

const CustomSwiper: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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

  const handleSlide = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className={styles.container}>
      <IconContext.Provider value={{ className: `${styles.prev}` }}>
        <button
          ref={navPrevButton}
          className={styles.prev_button}
          onClick={() => console.log(navPrevButton.current)}
        >
          {activeSlide !== 0 && <IoIosArrowBack />}
        </button>
      </IconContext.Provider>

      <div className={styles.container}>
        <Swiper
          slidesPerView={6}
          slidesPerGroup={1}
          onBeforeInit={onBeforeInit}
          spaceBetween={50}
          onSlidePrevTransitionStart={handleSlide}
          onSlideNextTransitionStart={handleSlide}
        >
          {renderSlides()}
        </Swiper>
      </div>
      <IconContext.Provider value={{ className: `${styles.prev}` }}>
        <button ref={navNextButton} className={styles.next_button}>
          {activeSlide !== 4 && <IoIosArrowForward />}
        </button>
      </IconContext.Provider>
    </div>
  );
};
export default CustomSwiper;
