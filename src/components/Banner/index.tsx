import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import bannerImg from "../../images/banner__foto.jpeg";

SwiperCore.use([Autoplay]);
const Banner: FC = () => {
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

  return (
    <div className={styles.container}>
      <IconContext.Provider value={{ className: `${styles.prev}` }}>
        <button
          ref={navPrevButton}
          className={styles.prev_button}
          onClick={() => console.log(navPrevButton.current)}
        >
          <IoIosArrowBack />
        </button>
      </IconContext.Provider>

      <Swiper
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        onBeforeInit={onBeforeInit}
        speed={2000}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
      >
        <SwiperSlide>
          <Image src={bannerImg} alt="" className={styles.slide}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImg} alt="" className={styles.slide}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImg} alt="" className={styles.slide}></Image>
        </SwiperSlide>
      </Swiper>

      <IconContext.Provider value={{ className: `${styles.prev}` }}>
        <button ref={navNextButton} className={styles.next_button}>
          <IoIosArrowForward />
        </button>
      </IconContext.Provider>
    </div>
  );
};
export default Banner;
