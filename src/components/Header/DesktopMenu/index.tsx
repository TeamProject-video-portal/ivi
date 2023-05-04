import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { en } from "../../../locales/en";
import { ru } from "../../../locales/ru";
type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};
const DesktopMenu: FC<Props> = (props) => {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className={styles.navigation}>
      <Link href="/">
        <span className={styles.link}> {t.header.my_ivi}</span>
      </Link>
      <Link href="/new">
        <span className={styles.link}>{t.header.whats_new}</span>
      </Link>
      <Link href="/movies">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("film");
          }}
        >
          {t.header.movies}
        </span>
      </Link>
      <Link href="/series">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("series");
          }}
        >
          {t.header.series}
        </span>
      </Link>
      <Link href="/animation">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("anim");
          }}
        >
          {t.header.animations}
        </span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
