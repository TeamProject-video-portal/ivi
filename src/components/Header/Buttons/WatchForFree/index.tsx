import { FC } from "react";
import styles from "./index.module.scss";

const WatchingButton: FC = () => {
  return (
    <div>
      <button className={styles.button_watch_for_free}>
        Смотреть 30 дней бесплатно
      </button>
    </div>
  );
};

export default WatchingButton;
