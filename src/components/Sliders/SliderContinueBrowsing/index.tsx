import React, { FC, useEffect } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardMovie from "@/components/CardMovie";
import { settings } from "./settings";
import img from "../../../images/banner__foto.jpeg";
import { useSelector } from "react-redux";
import { selectBrowsingMovie } from "@/Redux/continue_browsing/selectors";
import { store } from "@/Redux/store";
import { BrowsingMovie } from "@/Redux/continue_browsing/reducer";

type Props = {
  title: string;
  type: string;
};

const SliderContinueBrowsing: FC<Props> = ({ title, type }) => {
  const movies: BrowsingMovie[] = store.getState().continueBrowsing;
  const m = useSelector(selectBrowsingMovie);
  console.log(m);
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: movies.length <= 3 ? movies.length : 3,
  };

  // useEffect(() => {
  //   console.log("selector", m);
  // }, [m]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <Slider {...newSettings} className={styles.container}>
        {movies.map((item, index) => (
          <Link href={`/film/${item.id}?lang=ru`} key={`${item}-${index}`}>
            <CardMovie
              title={item.name}
              type={type}
              text={item.description}
              img={item.poster}
            />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderContinueBrowsing;
