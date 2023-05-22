import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "../settings";
import { ISimpleMovie } from "@/types/types";

type Props = {
  title: string;
  films: ISimpleMovie[];
};
const SimpleSlider: FC<Props> = ({ title, films }) => {
  const newSettings = {
    ...settings,
    slidesToShow: 7,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
      </div>
      <Slider {...newSettings} className={styles.container}>
        {films.map((item, index) => (
          <Link href={`/film/309?lang=ru`} key={`${item.id}`}>
            <Poster film={item} />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SimpleSlider;
