import { DetailedHTMLProps, FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../../images/banner__foto.jpeg";
import { Button } from "../../../components/Button/Button";
import { useTranslation } from "next-export-i18n";

type Props = {
  filmPicture: string;
  filmLink: string;
};

export const TrailerCard: FC<Props> = ({ filmPicture, filmLink }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.player_block}>
        <Image src={filmPicture} alt="movie picture" fill></Image>
        <div className={styles.buttons}>
          {/* <Link href={filmLink}> */}
          <button className={styles.watch}>
            <p>{t("buttons.watch")}</p>
            <span>{t("buttons.watch_by_subscription")}</span>
          </button>
          {/* </Link> */}

          <div className={styles.note}>
            <p>{t("buttons.watch_first_30_days")}</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom_buttons}>
        <div className={styles.left_side}>
          <Button color={"darkbluegrey"} className={styles.trailer}>
            <div className="nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"></div>
            {t("buttons.trailer")}
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
          <p>{t("buttons.free_movies")}</p>
        </Button>
      </div>
    </div>
  );
};

export default TrailerCard;
