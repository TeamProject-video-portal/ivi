import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "./settings";
import { ActorsType } from "@/types/types";
import { Actor } from "@/components/DescriptionCard/Actors";
import { Raiting } from "@/components/DescriptionCard/Raiting";

type Props = {
  actors: ActorsType[];
  filmGrade: number;
  className: string;
};

const ActorsSlider: FC<Props> = ({ actors, filmGrade, className }) => {
  const newSettings = {
    ...settings,
  };

  return (
    <div className={[styles.container, className].join(" ")}>
      <Slider {...newSettings} className={styles.slider}>
        <Raiting filmGrade={filmGrade} />
        {actors.map((item: any) => (
          <Link
            href={{ pathname: "/actor/[id]", query: { id: "309" } }}
            key={`${item.id}`}
          >
            <Actor img={item.photo} name={item.name} key={`${item.id}`} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ActorsSlider;
