import { FC } from 'react';
import styles from "./index.module.scss"
import Image from "next/image";
import Link from 'next/link';
const personImage = require("../../images/personImage.jpeg");

const PosterPerson: FC = () => {
  return (
    <Link href={'/'} className={styles.container}>
      <div className={styles.poster}>
        <Image src={personImage} alt="" className={styles.img} fill></Image>
        <div className={styles.label}>4</div>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>Эмма</div>
        <div className={styles.surname}>Уотсон</div>
        <div className={styles.countFilms}>4 фильма</div>
      </div>
    </Link>
  );
};

export default PosterPerson;