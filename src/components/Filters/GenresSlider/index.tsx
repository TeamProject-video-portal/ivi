import { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { genres } from '@/data/filters';
import { Button } from '@/components/Button/Button';
import GenresButton from '../GenresButton';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from './index.module.scss'

const PrevButton: FC = (props: any) => {
  return (
    <Button className={`${styles.prev} ${props.className.includes('slick-disabled') && styles.disabled}`} onClick={props.onClick}> <BsChevronCompactLeft /></Button >
  )
}

const NextButton: FC = (props: any) => {
  return (
    <Button className={`${styles.next} ${props.className.includes('slick-disabled') && styles.disabled}`} onClick={props.onClick}><BsChevronCompactRight /></Button>
  )
}

const GenresSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
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
    <Slider {...settings} className={styles.container}>
      {genres.map((item, i) =>
        <GenresButton size="small" genres={item.title} id={item.id} />
      )}
    </Slider>
  );
};

export default GenresSlider;