import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Icons from "./Info/Icons";
import Info from "./Info";
const posterImage = require("../../images/posterImage.jpeg");

const Poster: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.poster}>
          <Image src={posterImage} alt="" className={styles.img} fill></Image>
          {isOpen && <Info />}
        </div>
        <div className={styles.description}>
          <span className={styles.name}>Маша и Медведь</span>
          <span className={styles.tariff}>Бесплатно</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;
