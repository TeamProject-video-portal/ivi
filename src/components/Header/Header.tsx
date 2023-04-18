import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_part}>
        <Image src={logo} width={66} height={48} alt="logo" />
        <div className={styles.navigation}>
          <Link href="/">
            <p className={styles.link}> Мой Иви</p>
          </Link>
          <Link href="/new">
            <p className={styles.link}> Что нового</p>
          </Link>
          <Link href="/movies">
            <p className={styles.link}>Фильмы</p>
          </Link>
          <Link href="/series">
            <p className={styles.link}>Сериалы</p>
          </Link>
          <Link href="/animation">
            <p className={styles.link}>Мультфильмы</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
