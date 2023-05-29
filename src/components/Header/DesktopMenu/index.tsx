import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};
const DesktopMenu: FC<Props> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [locale, setLocale] = useState<any>("ru");
  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={styles.navigation}>
      <Link href={`/home?lang=${locale}`}>
        <span className={styles.link}>{t("header.my_ivi")}</span>
      </Link>
      <Link href="https://www.ivi.tv/new">
        <span className={styles.link}>{t("header.whats_new")}</span>
      </Link>
      <Link href={`/movies?lang=${locale}`}>
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
      {/* <Link href="/series"> */}
      <Link href="https://www.ivi.tv/series">
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
      {/* <Link href={`/animation?lang=${locale}`}> */}
      <Link href="https://www.ivi.tv/animation">
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
