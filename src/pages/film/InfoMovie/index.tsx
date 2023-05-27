import { DetailedHTMLProps, Dispatch, FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../../images/banner__foto.jpeg";
import { Button } from "../../../components/Button/Button";
import { useTranslation } from "next-export-i18n";
import FilmButtons from "../FilmButtons";
import { FilmLangType } from "@/types/types";
import { useRouter } from "next/router";

type Props = {
  className: string;
  filmLang: FilmLangType[];
};

export const InfoMovie: FC<Props> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className={[styles.container, props.className].join(" ")}>
      {/* <div>
        <p>Подробнее о фильме</p>
      </div> */}
      <div className={styles.datas}>
        {router.asPath.includes("=en")
          ? props.filmLang[1].filmDescription
          : props.filmLang[0].filmDescription}{" "}
        {/* <div className={styles.param}>
          <p className={styles.title}>Год производства</p>
          <span>1995</span>
        </div> */}
      </div>
    </div>
  );
};

export default InfoMovie;
