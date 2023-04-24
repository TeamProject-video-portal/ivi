import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import DesktopMenu from "./DesktopMenu";
import SubMenu from "./DesktopMenu/SubMenu";
import SearchButton from "./Buttons/Search";
import ProfileButton from "./Buttons/Profile";
import NotificationButton from "./Buttons/Notification";
import WatchingButton from "./Buttons/WatchForFree";

export const Header: FC = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isOpenSubMenu && <div className={styles.container_active}></div>}

        <div className={styles.main_part}>
          <Image src={logo} width={66} height={48} alt="logo" />
          <DesktopMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        </div>

        <div className={styles.buttons}>
          <WatchingButton />
          <SearchButton />
          <NotificationButton />
          <ProfileButton />
        </div>
        {isOpenSubMenu && (
          <SubMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        )}
      </div>
    </header>
  );
};
