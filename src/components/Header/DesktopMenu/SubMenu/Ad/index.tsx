import { FC, useState } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings1, settings2, settings3 } from "./settings";
import Image from "next/image";
import icon from "../../../../../images/icons/logo.svg";

const posters = [
  "https://lifehacker.ru/wp-content/uploads/2018/12/Kak-fotografirovat-kotikov-19-sovetov-ot-professionala_1544744286.jpg",
  ,
  "https://lifehacker.ru/wp-content/uploads/2018/12/Kak-fotografirovat-kotikov-19-sovetov-ot-professionala_1544744286.jpg",
  "https://lifehacker.ru/wp-content/uploads/2018/12/Kak-fotografirovat-kotikov-19-sovetov-ot-professionala_1544744286.jpg",
];
const Ad: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = () => {
    return posters.map((poster, index) => {
      return (
        <div key={index} className={styles.slide}>
          <img src={poster} alt={`Poster ${index}`} />
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliders}>
        <div className={styles.container_slider}>
          <Slider {...settings1} className={styles.no_active}>
            {renderSlides()}
          </Slider>
          <Slider {...settings2}>{renderSlides()}</Slider>
          <Slider {...settings3} className={styles.no_active}>
            {renderSlides()}{" "}
          </Slider>
        </div>
      </div>
      <div className={styles.offer}>
        <Image
          src={icon}
          alt=""
          width={300}
          height={300}
          className={styles.logo}
        ></Image>
        <div className={styles.title}>
          <h4>Подписка Иви</h4>
          <p> от 3,58$ за месяц </p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
