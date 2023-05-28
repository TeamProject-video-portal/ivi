import { FC } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import { useAppDispatch } from "@/hooks/hooks";
import { setCountries, setGenres, setYears } from "@/Redux/filter/actions";

const PrevButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.prev} ${props.className.includes("slick-disabled") && styles.disabled}`}
      onClick={props.onClick}
    >
      <BsChevronCompactLeft />
    </Button>
  );
};

const NextButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.next} ${props.className.includes("slick-disabled") && styles.disabled}`}
      onClick={props.onClick}
    >
      <BsChevronCompactRight />
    </Button>
  );
};

const Suggestion: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  const dispatch = useAppDispatch();

  return (
    <Slider {...settings} className={styles.container}>
      <Button className={styles.slide} key={0} onClick={() => dispatch(setYears([2022, 2022]))}>
        {"2022 год"}
      </Button>
      <Button className={styles.slide} key={1} onClick={() => dispatch(setYears([2021, 2021]))}>
        {"2021 год"}
      </Button>
      <Button className={styles.slide} key={2} onClick={() => dispatch(setYears([2020, 2020]))}>
        {"2020 год"}
      </Button>
      <Button className={styles.slide} key={3} onClick={() => dispatch(setYears([2019, 2019]))}>
        {"2019 год"}
      </Button>
      <Button className={styles.slide} key={4} onClick={() => dispatch(setYears([2018, 2018]))}>
        {"2018 год"}
      </Button>
      <Button className={styles.slide} key={5} onClick={() => dispatch(setCountries("Россия"))}>
        {"Русские фильмы"}
      </Button>
      <Button className={styles.slide} key={6} onClick={() => dispatch(setCountries("СССР"))}>
        {"Советские фильмы"}
      </Button>
      <Button className={styles.slide} key={7} onClick={() => dispatch(setCountries("США"))}>
        {"Американские фильмы"}
      </Button>
      <Button className={styles.slide} key={8} onClick={() => dispatch(setGenres("комедия"))}>
        {"Комедии"}
      </Button>
      <Button className={styles.slide} key={9} onClick={() => dispatch(setGenres("триллер"))}>
        {"Триллеры"}
      </Button>
      <Button className={styles.slide} key={10} onClick={() => dispatch(setGenres("детектив"))}>
        {"Детективы"}
      </Button>
      <Button className={styles.slide} key={11} onClick={() => dispatch(setGenres("приключения"))}>
        {"Приключения"}
      </Button>
      <Button className={styles.slide} key={12} onClick={() => dispatch(setGenres("фантастика"))}>
        {"Фантастические"}
      </Button>
      <Button className={styles.slide} key={13} onClick={() => dispatch(setGenres("драма"))}>
        {"Драмы"}
      </Button>
    </Slider>
  );
};

export default Suggestion;
