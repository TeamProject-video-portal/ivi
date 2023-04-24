import { FC } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { RiUser3Line } from "react-icons/ri";

const ProfileButton: FC = () => {
  return (
    <div className={styles.button_profile}>
      <IconContext.Provider
        value={{
          className: `${styles.profile_icon}`,
        }}
      >
        <div>
          <RiUser3Line />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ProfileButton;
