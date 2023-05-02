import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import PosterTopTen from "@/components/Carts/TopTen";
import logo from "../../../images/icons/top10.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SliderTopTen: FC = () => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 5,
  };
  const { t } = useTranslation();
  console.log(t);
  return (
    <div className={styles.container}>
      {/* <p>{t("my_ivi")}</p> */}

      <div className={styles.title}>
        <Image src={logo} alt=""></Image>
        <h4>за неделю</h4>
      </div>

      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((item, i) => (
          <PosterTopTen num={i + 1} key={`${item}- ${i}`} />
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderTopTen;
