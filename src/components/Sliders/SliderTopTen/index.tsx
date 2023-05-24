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
import { ISimpleMovie } from "@/types/types";

type Props = {
  films: ISimpleMovie[];
};

const SliderTopTen: FC<Props> = ({ films }) => {
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
        {films.map((item: ISimpleMovie, i: any) => (
          <Link href="/film" key={item.id}>
            <PosterTopTen num={i + 1} key={`${item.id}`} film={item} />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderTopTen;
