import { FC } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./index.module.scss"
import { Button } from "../Button/Button";

const filters = [
  '2022 год',
  '2021 год',
  '2020 год',
  '2019 год',
  '2018 год',
  'Бесплатные',
  'Русские фильмы',
  'Советские фильмы',
  'Американские фильмы',
  'Индийские фильмы',
  'Комедии',
  'Ужасы',
]

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

const Suggestion: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 7,
    variableWidth: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
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
    <Slider {...settings} className={styles.container}>
      {filters.map((item, i) => <Button className={styles.slide} key={i}>{item}</Button>)}
    </Slider>
  );
};

export default Suggestion;