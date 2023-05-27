import { DetailedHTMLProps, Dispatch, FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import FilmButtons from "../FilmButtons";
import { FilmLangType } from "@/types/types";
import { useRouter } from "next/router";
import tvBg from "../../../images/tv-without-poster.png";
import ipadBG from "@/images/ipad-without-poster.png";
import { Button } from "@/components/Button/Button";
type Props = {
  filmPicture: string;
  filmLang: FilmLangType[];
};

export const WatchOnAllDevices: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Cмотреть {props.filmLang[0].filmName} на всех устройствах</h2>
        <p>
          Приложение доступно для скачивания на iOS, Android, SmartTV и
          приставках
        </p>
        <Link href={"https://www.ivi.tv/devices"}>
          <Button color={"pink"} className={styles.button}>
            Подключить устройства
          </Button>
        </Link>
      </div>
      <div className={styles.banner}>
        <div className={styles.tv}>
          <Image
            src={tvBg}
            alt=""
            width={600}
            className={styles.tv_bg_img}
          ></Image>
          <Image
            src={props.filmPicture}
            alt=""
            width={600}
            height={600}
            className={styles.tv_main_img}
          ></Image>
        </div>
        <div className={styles.ipad}>
          <Image
            src={ipadBG}
            alt=""
            width={500}
            className={styles.ipad_bg_img}
          ></Image>
          <Image
            src={props.filmPicture}
            alt=""
            width={600}
            height={600}
            className={styles.ipad_main_img}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default WatchOnAllDevices;
