import { FC } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

const WatchingButton: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <button className={styles.button_watch_for_free}>
        {t("buttons.watch")}
      </button>
    </div>
  );
};

export default WatchingButton;
