import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";

const Carousel: FC = () => {
  const renderSlides = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    return arr.map((item, index) => {
      return (
        <div key={index}>
          <Poster />
        </div>
      );
    });
  };

  return (
    <div>
      <Slider {...settings} className={styles.container}>
        {renderSlides()}
      </Slider>
      <></>
    </div>
  );
};

export default Carousel;
