import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";

// const posterImage = require("../../../images/posterImage.jpeg");
import img from "../../../images/posterImage.jpeg";

export type PosterProps = {
  num?: number;
};

const PosterTopTen: FC<PosterProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={img}
          alt=""
          className={styles.img}
          width={500}
          height={500}
        ></Image>

        <span>{props.num}</span>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default PosterTopTen;
