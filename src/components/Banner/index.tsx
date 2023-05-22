import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import bannerImg from "../../images/banner__foto.jpeg";
import { settings } from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: FC = () => {
  const renderSlides = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    return arr.map((item, index) => {
      return (
        <div key={`${item}-${index}`} className={styles.slide}>
          <Image src={bannerImg} alt="" className={styles.slide_img} priority ></Image>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};
export default Banner;
