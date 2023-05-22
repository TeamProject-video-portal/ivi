import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Icons from "./Info/Icons";
import Info from "./Info";
import { ISimpleMovie } from "@/types/types";
const posterImage = require("../../images/posterImage.jpeg");

type Props = {
  film: ISimpleMovie;
};
const Poster: FC<Props> = ({ film }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.poster}>
          <Image
            src={film?.filmPoster}
            alt=""
            className={styles.img}
            fill
            sizes="100%"
          ></Image>
          {isOpen && <Info />}
        </div>
        <div className={styles.description}>
          <span className={styles.name}>{film?.filmLang[0].filmName}</span>
          <span className={styles.tariff}>Бесплатно</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;
