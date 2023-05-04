import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardMovie from "@/components/CardMovie";
import { settings } from "./settings";
import img from "../../../images/banner__foto.jpeg";

type Props = {
  title: string;
  type: string;
};
const data = {
  title: "1. Возвращение в Простоквашино. Часть 1",
  text: "В жизни дяди Федора произошли серьезные перемены. У него появилась маленькая сестренка – Вера Павловна. И потому мама и папа уделяют сыну совсем мало внимания. А ему, между тем, требуется поддержка родителей. Дядя Федор получает известие из Простоквашино. На ферме Матроскина завелся таинственный грызун, который вывел из строя систему электроснабжения. Холодильник перестал работать, все молоко скисло. А Шарик вместо того, чтобы охранять дом, стал модным блогером. Дядя Федор спешит на помощь.",
  type: "detailed",
  img: img,
};

const SliderContinueBrowsing: FC<Props> = ({ title, type }) => {
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 3,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(5)].map((_, i) => (
          <Link href="/card">
            <CardMovie
              title={data.title}
              type={type}
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
