import { FC } from 'react';
import styles from "./index.module.scss"
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/Button/Button';

const PhilmographyItem: FC = () => {
  const personImage = require("../../../images/film1.jpeg");
  return (
    <Link href={'/'}>
      <div className={styles.philmographyItem}>
        <div color='purple' className={styles.philmographyItem__imgContainer}>
          <Image src={personImage} alt="person" className={styles.img} fill></Image>
        </div>
        <div className={styles.philmographyItem__body}>
          <div className={styles.philmographyItem__content}>
            <div>2022</div>
            <div>Человек-Паук: Через вселенные 2</div>
            <div className={styles.philmographyItem__rating}>Рейтинг Иви: 7.1</div>
          </div>
          <Button color='purple' className={styles.philmographyItem__btn}>Подробнее</Button>
        </div>
      </div>
    </Link>
  );
};

export default PhilmographyItem;