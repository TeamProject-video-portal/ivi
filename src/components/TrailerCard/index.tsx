import { FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../images/banner__foto.jpeg";
import { Button } from "../Button/Button";
export const TrailerCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.player_block}>
        <Image src={img} alt=""></Image>
        <div className={styles.buttons}>
          <button className={styles.watch}>
            <p>Смотреть</p>
            <span>по подписке Иви</span>
          </button>
          <div className={styles.note}>
            <p>Первые 30 дней подписки бесплатно</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom_buttons}>
        <div className={styles.left_side}>
          <Button color={"darkbluegrey"} className={styles.trailer}>
            <div className="nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"></div>
            Трейлер
          </Button>

          <Button color={"darkbluegrey"} className={styles.favorite}>
            <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-button__nbl-icon"></div>
          </Button>

          <Button color={"darkbluegrey"} className={styles.share}>
            <div className="nbl-icon nbl-icon_share_20 nbl-button__nbl-icon"></div>
          </Button>
        </div>
        <Button color={"darkbluegrey"} className={styles.free_movies}>
          <div className="nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"></div>
          Бесплатные фильмы
        </Button>
      </div>
    </div>
  );
};
