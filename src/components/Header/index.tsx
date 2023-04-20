import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SubMenu from "./DesktopMenu/SubMenu";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

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
          <div className={styles.button_search}>
            <IconContext.Provider
              value={{
                className: `${styles.search_icon}`,
              }}
            >
              <div>
                <MdSearch />
              </div>
            </IconContext.Provider>
            <span>Поиск</span>
          </div>
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
        </div>
        {isOpenSubMenu && <SubMenu />}
      </div>
    </header>
  );
};
