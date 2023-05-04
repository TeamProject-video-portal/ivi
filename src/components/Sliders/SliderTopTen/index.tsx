import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import PosterTopTen from "@/components/Carts/TopTen";
import logo from "../../../images/icons/top10.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

const SliderTopTen: FC = () => {
  const { t } = useTranslation();
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 5,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={logo} alt=""></Image>
        <h4>{t("sliders_title.during_the_week")}</h4>
      </div>

      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((item, i) => (
          <Link href="/card">
            <PosterTopTen num={i + 1} key={`${item}- ${i}`} />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderTopTen;
