import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};
const DesktopMenu: FC<Props> = (props) => {
  return (
    <div className={styles.navigation}>
      <Link href="/">
        <span className={styles.link}> Мой Иви</span>
      </Link>
      <Link href="/new">
        <span className={styles.link}> Что нового</span>
      </Link>
      <Link href="/movies">
        <span
          className={styles.link_movies}
          onMouseEnter={() => { props.setIsOpenSubMenu?.(true); props.setSubMenuTitle?.('film') }}
        >
          Фильмы
        </span>
      </Link>
      <Link href="/series">
        <span
          className={styles.link_movies}
          onMouseEnter={() => { props.setIsOpenSubMenu?.(true); props.setSubMenuTitle?.('series') }}
        >
          Сериалы
        </span>
      </Link>
      <Link href="/animation">
        <span
          className={styles.link_movies}
          onMouseEnter={() => { props.setIsOpenSubMenu?.(true); props.setSubMenuTitle?.('anim') }}
        >
          Мультфильмы
        </span>
      </Link>
    </div >
  );
};

export default DesktopMenu;
