import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SubMenu from "./DesktopMenu/SubMenu";

export const Header: FC = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  return (
    <header>
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
          <button className={styles.button_watch_for_free}>
            Смотреть 30 дней бесплатно
          </button>
          <button className={styles.button_search}>Поиск</button>
          <button className={styles.button_notification}></button>
          <button className={styles.button_profile}></button>
        </div>
        {isOpenSubMenu && <SubMenu />}
      </div>
      <MobileMenu />
    </header>
  );
};
