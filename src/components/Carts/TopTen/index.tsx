import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";

// const posterImage = require("../../../images/posterImage.jpeg");
import img from "../../../images/posterImage.jpeg";
import { SearchFilmsType } from "@/types/types";

export type PosterProps = {
  num?: number;
  film: SearchFilmsType | any;
};

const PosterTopTen: FC<PosterProps> = ({ num, film }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={film.filmPoster}
          alt=""
          className={styles.img}
          width={500}
          height={500}
        ></Image>

        <span>{num}</span>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default PosterTopTen;
