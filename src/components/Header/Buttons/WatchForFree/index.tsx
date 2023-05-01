import { FC } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const WatchingButton: FC = () => {
  const router = useRouter();

  return (
    <div>
      <button className={styles.button_watch_for_free}>
        Смотреть 30 дней бесплатно
      </button>
    </div>
  );
};

export default WatchingButton;
