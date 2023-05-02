import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  raiting: number;
};
export const Raiting: FC<Props> = ({ raiting }) => {
  return (
    <div className={styles.raiting_cart}>
      <div className={styles.raiting}>
        <div className={styles.green_div}>
          <span>{raiting}</span>
        </div>
      </div>
      <p className={styles.name}>Рейтинг Иви</p>
    </div>
  );
};
