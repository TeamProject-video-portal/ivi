import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};
const DesktopMenu: FC<Props> = (props) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className={styles.navigation}>
      <Link href="/home">
        <span className={styles.link}>{t("header.my_ivi")}</span>
      </Link>
      <Link href="/new">
        <span className={styles.link}>{t("header.whats_new")}</span>
      </Link>
      <Link href="/movies">
        <span
          className={styles.link_movies}
          onMouseEnter={() => {
            props.setIsOpenSubMenu?.(true);
            props.setSubMenuTitle?.("film");
          }}
        >
          {t("header.movies")}
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
          {t("header.series")}
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
          {t("header.animations")}
        </span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
