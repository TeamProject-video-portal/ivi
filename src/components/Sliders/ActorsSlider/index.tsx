import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "../settings";
import { ActorsType, SearchFilmsType, SimilarFilm } from "@/types/types";
import { Actors } from "@/components/DescriptionCard/Actors";

type Props = {
  actors: ActorsType[] | any;
};

const ActorsSlider: FC<Props> = ({ actors }) => {
  const newSettings = {
    ...settings,
    slidesToShow: 4,
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>
        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
      </div> */}
      <Slider {...newSettings} className={styles.container}>
        {actors.map((item: any) => (
          <Link
            href={{ pathname: "/actor/[id]", query: { id: "309" } }}
            key={`${item.id}`}
          >
            <Actors img={item.photo} name={item.name} key={`${item.id}`} />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default ActorsSlider;
