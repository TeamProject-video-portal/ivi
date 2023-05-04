import { FC } from "react";
import styles from "./index.module.scss";

const NotificationButton: FC = () => {
  return (
    <div className={styles.button_notification}>
      <div className="nbl-icon nbl-icon_pull_16 nbl-simpleControlButton__nbl-icon"></div>
    </div>
  );
};

export default NotificationButton;
