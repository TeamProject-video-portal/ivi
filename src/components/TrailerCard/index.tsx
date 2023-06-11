import { Dispatch, FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import FilmButtons from "../FilmButtons";

type Props = {
  filmPicture: string;
  filmLink: string;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
  className: string;
};

export const TrailerCard: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={[styles.container, props.className].join(" ")}>
      <div className={styles.player_block}>
        <Image src={props.filmPicture} alt=" " fill></Image>
        <div className={styles.buttons}>
          <button className={styles.watch}>
            <p>{t("buttons.watch")}</p>
            <span>{t("buttons.watch_by_subscription")}</span>
          </button>

          <div className={styles.note}>
            <p>{t("buttons.watch_first_30_days")}</p>
          </div>
        </div>
      </div>
      <FilmButtons
        filmLink={props.filmLink}
        isOpenModal={props.isOpenModal}
        setIsOpenModal={props.setIsOpenModal}
      />
    </div>
  );
};

export default TrailerCard;
