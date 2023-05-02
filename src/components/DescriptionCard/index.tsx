import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Actors } from "./Actors";

type Props = {
  data: {
    title: string;
    raiting: number;
    actors: string[][];
  };
};
export const DescriptionCard: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <div className={styles.data}>
        <div className={styles.row_time}>
          <span>2023</span>
          <span>1 ч. 26 мин.</span>
          <span>18+</span>
        </div>
        <div className={styles.row_theme}>
          <span> Россия</span>
          <span>Комедии</span>
          <span>Русские</span>
        </div>
        <div className={styles.row_buttons}>
          <div>
            <Button color={"darkbluegrey"} className={styles.button_full_hd}>
              FullHD
            </Button>
          </div>
          <div className={styles.watch_params}>
            <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
            <span>Рус</span>
          </div>

          <div className={styles.watch_params}>
            <div className="nbl-icon nbl-icon_player_subtitlesRegular_16 watchParams__nbl-icon"></div>
            <span>Рус</span>
          </div>
        </div>
      </div>
      <div className={styles.actors}>
        {data.actors.map((item) => {
          return <Actors img={item[0]} name={item[1]} />;
        })}
      </div>
    </div>
  );
};
