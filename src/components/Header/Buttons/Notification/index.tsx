import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";

const NotificationButton: FC = () => {
  return (
    <div className={styles.button_notification}>
      <IconContext.Provider
        value={{
          className: `${styles.notification_icon}`,
        }}
      >
        <div>
          <AiOutlineBell />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default NotificationButton;
