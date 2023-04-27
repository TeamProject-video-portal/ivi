import { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { countries } from '../FilterDropdown/CountriesDropdown';
import { Button } from '@/components/Button/Button';
import styles from './index.module.scss'

const CountriesSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    variableWidth: true,
    //centerMode: true,
    arrows: true,
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider  {...settings} className={styles.container}>
      {countries.map((item, i) => <Button className={styles.slide} key={i}>{item}</Button>)}
      {/* <Button className={styles.next}><BsChevronCompactRight /></Button>
        <Button className={styles.prev}><BsChevronCompactLeft /></Button> */}
    </Slider>
  );
};

export default CountriesSlider;