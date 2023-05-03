import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardMovie from "@/components/CardMovie";
import { settings } from "./settings";

type Props = {};
const data = {
  title: "1. Возвращение в Простоквашино. Часть 1",
  text: "В жизни дяди Федора произошли серьезные перемены. У него появилась маленькая сестренка – Вера Павловна. И потому мама и папа уделяют сыну совсем мало внимания. А ему, между тем, требуется поддержка родителей. Дядя Федор получает известие из Простоквашино. На ферме Матроскина завелся таинственный грызун, который вывел из строя систему электроснабжения. Холодильник перестал работать, все молоко скисло. А Шарик вместо того, чтобы охранять дом, стал модным блогером. Дядя Федор спешит на помощь.",
  type: "detailed",
  img: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/8_0.jpg?itok=52JttP6Z",
};

const SliderContinueBrowsing: FC<Props> = ({}) => {
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 3,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(5)].map((_, i) => (
          <Link href="/card">
            <CardMovie
              title={data.title}
              type={data.type}
              text={data.text}
              img={data.img}
            />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderContinueBrowsing;
