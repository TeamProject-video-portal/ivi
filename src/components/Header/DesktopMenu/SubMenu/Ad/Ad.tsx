import { FC, useState } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings1, settings2, settings3 } from "./settings";

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
      <Slider {...settings1} className={styles.no_active}>
        {renderSlides()}
      </Slider>
      <Slider {...settings2}>{renderSlides()}</Slider>
      <Slider {...settings3} className={styles.no_active}>
        {renderSlides()}{" "}
      </Slider>
    </div>
  );
};

export default Ad;
