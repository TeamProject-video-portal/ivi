import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss"
import { Button } from "../Button/Button";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <nav className={styles.cols}>
          <h3 className={styles.cols__title}>О нас</h3>
          <ul className={styles.list}>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>О компании</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/career/#career-vacancy-block'} className={styles.list__link}>Вакансии</Link>
            </li>
            <li>
              <Link href={'https://www.ivi.ru/pages/beta/'} className={styles.list__link}>Программа бета-тестирования</Link>
            </li>
            <li>
              <Link href={'https://www.ivi.ru/info/partners'} className={styles.list__link}>Информация для партнёров</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/advertisers/'} className={styles.list__link}>Размещение рекламы</Link>
            </li>
            <li>
              <Link href={'https://www.ivi.ru/info/agreement'} className={styles.list__link}>Пользовательское соглашение</Link>
            </li>
            <li>
              <Link href={'https://www.ivi.ru/info/confidential'} className={styles.list__link}>Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'} className={styles.list__link}>Комплаенс</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.cols}>
          <h3 className={styles.cols__title}>Разделы</h3>
          <ul className={styles.list}>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Мой Иви</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Что нового</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Фильмы</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Сериалы</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Мультфильмы</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>TV+</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Что посмотреть</Link>
            </li>
            <li>
              <Link href={'https://corp.ivi.ru/'} className={styles.list__link}>Активация сертификата</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cols}>
          <h3 className={styles.cols__title}>Служба поддержки</h3>
          <p>
            Мы всегда готовы вам помочь.<br />
            Наши операторы онлайн 24/7
          </p>
          <div className={styles.support}>
            <Link href={'https://www.ivi.ru/profile'}>
              <Button className={styles.btn}>Написать в чате</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};