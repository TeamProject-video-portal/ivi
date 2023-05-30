import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { FilmLangType } from "@/types/types";
import { useRouter } from "next/router";

type Props = {
  className: string;
  filmLang: FilmLangType[];
};

export const InfoMovie: FC<Props> = (props) => {
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
    <div className={[styles.container, props.className].join(" ")}>
      {props.filmLang && (
        <div className={styles.datas}>
          {locale === "en"
            ? props.filmLang[1].filmDescription
            : props.filmLang[0].filmDescription}
        </div>
      )}
      <div className={styles.details}>Детали о фильме</div>
    </div>
  );
};

export default InfoMovie;
