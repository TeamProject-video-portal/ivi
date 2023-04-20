import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
const MobileMenu: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="/">
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <span>Мой Иви</span>
          </div>
        </Link>
        <Link href="/movies">
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <span>Каталог</span>
          </div>
        </Link>
        <Link href="/">
          {" "}
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <span>Поиск</span>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <span>Профиль</span>
          </div>{" "}
        </Link>
        <Link href="/">
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <span>Ещё</span>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
